<template>
    <section class="container-index raduis-left">

      <navigation />
      <header_component title="Tous les concerts," title_second="en avant-première." v-bind:imgVisible="true"/>

    </section>
    
    <filtre @filterArrayName="filterArtist" @SortedBy="SortedBy" />

        <concert_type v-for="type in types" v-bind:type="type.name">
            <slide_type v-for="concert in type.concerts.filter(concert => filterConcerts.includes(concert))" v-bind:concert="concert" /> 
        </concert_type>


    <footer_component />

</template>

<script>

    import navigation from '../components/general/navigation.vue'
    import header_component from '../components/general/header.vue'
    import footer_component from '../components/general/footer_component.vue'
    import concert_type from '../components/concerts/concert_type.vue'
    import slide_type from '../components/concerts/slide_type.vue'
    import filtre from '../components/general/filtre_comp.vue'

    export default {
        name: 'concerts',
        components: {
            navigation,
            header_component,
            footer_component,
            concert_type,
            slide_type,
            filtre,
        },

        data() {

            return {

                types : [],
                filterConcerts : []

            }

        },

        methods : {

            setType(types) {

                for (let type of types ) {

                    this.$store.commit('call_api', {
                        url : '/concerts?music_style='+type.id,
                        callback : (response) => {

                            this.types.push({
                                name : type.name,
                                id : type.id,
                                concerts : response,
                            })

                            response.forEach(concert => {
                                this.filterConcerts.push(concert)
                            });

                        }
                    })

                }

            },

            filterArtist(input) {

                this.filterConcerts = []

                this.types.forEach(type => {
                    
                    type.concerts.filter(concert => 
                        concert.artist.name
                        .toLowerCase()
                        .includes(
                            input.value.toLowerCase()
                        ) === true 
                    ).forEach(el => {
                        this.filterConcerts.push(el)
                    })

                });

            },

            SortedBy(input) {

                if ( input.value == "dcroissant" ) {

                    this.types.forEach(type => {

                        type.concerts.sort( (a, b) => {

                            return a.date < b.date;

                        })

                    })

                }

                if ( input.value == "ddcroissant" ) {

                    this.types.forEach(type => {

                        type.concerts.sort( (a, b) => {

                            return a.date > b.date;

                        })

                    })

                }

            }

        },

        mounted() {

            this.$store.commit('call_api', {
                url : '/music-styles',
                callback : (response) => {

                    this.setType(response);

                }
                
            }) 

        }

    }
</script>
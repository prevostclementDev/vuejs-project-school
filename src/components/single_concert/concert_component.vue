<template>
    
    <section class="concert">

        <img :src="concert.bg_img" alt="" class="bg_img">
        <div class="filter_bg"></div>

        <div class="content-concert">

            <div class="top-part">
                
                <p>{{ concert.place }}</p>

            </div>

            <div class="bottom-part">   

                <div class="left-part">

                    <p>
                        {{concert.name}}
                        <span>
                            {{concert.date}}
                        </span>
                    </p>

                </div>

                <div class="right-part">

                    <div class="price">
                        <p>Prix: {{concert.price}}€</p>
                    </div>

                    <div class="">
                        <router-link :to="{ name : 'reservations' , params : { id: concert.idVisible } }" class="cta">Réserver</router-link>
                    </div>

                </div>

            </div>

        </div>

    </section>
    
</template>
  
<script lang="ts">

    import axios from 'axios'

  export default {

    name: 'concert_component',

    data() {
        return {

            concert : {
                idVisible: Number,
                name: String,
                date : String,
                place : String,
                bg_img : String,
                price : Number,
            },

        }
    },

    props : {
        
        id_concert: {type : Number, default : 0},

    },

    methods : {

        setConcert (concert) {

            let date;
            let base_url = 'https://buuk-api.herokuapp.com';

            if (concert.date == null) {

                date = "date à venir";

            } else {

                date = new Date(concert.date).toLocaleDateString();

            }

            return this.concert = {
                idVisible : concert.id,
                name : concert.artist.name,
                date : concert.duration + " " + date,
                place : concert.place + " " + concert.city,
                bg_img : base_url + concert.artist.photo.url,
                price : concert.price,
            };

        }

    },

    mounted() {

        this.$store.commit('call_api', {
            url : '/concerts/'+this.id_concert,
            callback : (response) => {

                this.setConcert(response);

            }
            
        }) 

    },

  };

</script>
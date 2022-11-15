<template>
    
    <section class="choise_artiste">

        <div class="top_container">

            <ul class="list_name">

                <li v-for="(concert, index) in concerts"><button @click="(event) => setVisibleConcert(event,index)" class="btnFirstView" v-bind:class="{'active' : index === 0}" >{{ concert.artist.name }}</button></li>

            </ul>

        </div>
        <div class="bottom_container">

            <img v-bind:src="VisibleConcert.bg_img" alt="" class="bg_img">
            <div class="filter_bg"></div>

            <div class="bandeau_info">

                <p>
                    {{VisibleConcert.date}}
                    <span>{{VisibleConcert.place}}</span>
                </p>

                <a href="" class="cta">Réserver</a>

            </div>

        </div>

    </section>
    
</template>
  
<script lang="ts">

    import axios from 'axios'

  export default {

    name: 'first_view',

    data() {
        return {

            concerts : null,

            VisibleConcert: {
                    name: '',
                    date : "",
                    place : "",
                    bg_img : "",
            },

        }
    },

    methods : {

        setVisibleConcert (event,index) {

            const activeButton = document.querySelectorAll('.btnFirstView.active');

            activeButton.forEach((button) => {
                button.classList.remove('active');
            });

            this.VisibleConcert = this.setArrayVisible(this.concerts[index]);
            event.target.classList.add('active');

        },

        setArrayVisible (concert) {

            let date;
            let base_url = 'https://buuk-api.herokuapp.com';

            if (concert.date == null) {

                date = "date à venir";

            } else {

                date = new Date(concert.date).toLocaleDateString();

            }

            return this.VisibleConcert = {
                "name" : concert.artist.name,
                "date" : concert.duration + " " + date,
                "place" : concert.place + " " + concert.city,
                "bg_img" : base_url + concert.artist.photo.url,
            };

        }

    },

    mounted () {
		const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY4NTA2ODAyLCJleHAiOjE2NzEwOTg4MDJ9.W4Nlz9o5yr7CQGf6rnO8zSeOUE7b9u3YUMQ5xjPRCHk'
        
        const header = {

            headers: {
                'Authorization': `Bearer ${bearerToken}`,
                'accept': 'application/json'
            }

        }

        axios
        .get('https://buuk-api.herokuapp.com/concerts?_sort=date%3Adesc&_limit=5', header)
        .then(response => {
            if ( response.status === 200 ) {
                this.concerts = response.data;
                this.VisibleConcert = this.setArrayVisible(this.concerts[0]);
            }
        }).catch(error => {
            console.log(error.response.status + " " + error.response.statusText + " " + error.response.config.url + " " + error.response.data.message)
        })
    }

  };

</script>
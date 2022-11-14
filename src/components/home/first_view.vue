<template>
    
    <section class="choise_artiste">

        <div class="top_container">

            <ul class="list_name">

                <li v-for="(concert, index) in getLastedConcerts"><button @click="(event) => changeVisibleConcert(event,index)" class="btnFirstView" v-bind:class="{'active' : index === 0}" >{{ concert.name }}</button></li>

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
                    name: 'Angèle',
                    date : "15 DÉCEMBRE 2020",
                    place : "LYON, PALAIS DES SPORTS",
                    bg_img : "assets/production/img/angele.png",
            },

        }
    },

    computed : {

        getLastedConcerts () {
            
            return [
                {
                    name: 'Angèle',
                    date : "15 DÉCEMBRE 220",
                    place : "LYON, ALAIS DES SPORTS",
                    bg_img : "assets/production/img/angele.png",
                },
                {
                    name: 'Angèl',
                    date : "15 DÉCEMBRE 2020",
                    place : "LYON, PAL DES SPORTS",
                    bg_img : "assets/production/img/angele.png",
                },
                {
                    name: 'Angè',
                    date : "15 DÉCEMBRE 2020",
                    place : "LYON, PALS DES SPORTS",
                    bg_img : "assets/production/img/angele.png",
                },
                {
                    name: 'Ang',
                    date : "15 DÉCEMBRE 2020",
                    place : "LYON, PALAIS DS SPORTS",
                    bg_img : "assets/production/img/angele.png",
                },
                {
                    name: 'An',
                    date : "15 DÉCEMBRE 2020",
                    place : "LYON, PALAIS DES SPORT",
                    bg_img : "assets/production/img/angele.png",
                },
            ];

        }

    },

    methods : {

        changeVisibleConcert (event,index) {

            const activeButton = document.querySelectorAll('.btnFirstView.active');

            activeButton.forEach((button) => {
                button.classList.remove('active');
            });

            this.VisibleConcert = this.getLastedConcerts[index];
            event.target.classList.add('active');

        }

    },

    mounted () {
		const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM2MDQ0NjE4LCJleHAiOjE2Mzg2MzY2MTh9.L3GsjGPD6XaEPdjt6AVNRHXmjhXXWBcI2LyU3DjwP8E'
        const header = {

            headers: {
                'Authorization': `Bearer ${bearerToken}`,
                'accept': 'application/json'
            }

        }

        axios
        .get('https://buuk-api.herokuapp.com/concerts', header)
        .then(response => {
            this.concerts = response
            console.log(this.concerts)
        }).catch(error => {
            console.log(error.response.status + " " + error.response.statusText + " " + error.response.config.url + " " + error.response.data.message)
        })
    }

  };

</script>
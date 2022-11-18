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

                <router-link :to="{ name : 'concert' , params : { id: VisibleConcert.idVisible } }" class="cta">Réserver</router-link>

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

            concerts : {},

            VisibleConcert: {
                idVisible: {type : Number , default : 0},
                name: {type : String , default : 'none'},
                date : {type : String , default : 'none'},
                place : {type : String , default : 'none'},
                bg_img : {type : String , default : 'none'},
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
                "idVisible" : concert.id,
                "name" : concert.artist.name,
                "date" : concert.duration + " " + date,
                "place" : concert.place + " " + concert.city,
                "bg_img" : base_url + concert.artist.photo.url,
            };

        }

    },

    mounted () {

         this.$store.commit('call_api', {
            url : '/concerts?_sort=date%3Adesc&_limit=5',
            callback : (response) => {

                this.concerts = response;
                console.log(this.concerts);
                this.VisibleConcert = this.setArrayVisible(this.concerts[0]);

            }
            
        }) 

    }

  };

</script>
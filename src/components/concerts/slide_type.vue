<template>

    <router-link v-if="concert" :to="{ name : 'concert' , params : { id : concert.id} }" style="display:contents;">
        <div class="artiste">

            <img v-bind:src="concert.artist.photo.url" alt="" class="bg_img">
            <div class="filter_bg"></div>
                    
            <div class="content">
                        
                <div class="date">
                    <p>{{ new Date(concert.date).toLocaleDateString() }}</p>
                </div>

                <div class="info">
                    <h3>{{ concert.artist.name }}</h3>
                    <p>{{ concert.place }}, {{ concert.city }}</p>
                </div>

            </div>

        </div>
    </router-link>


</template>
  
<script lang="ts">

  export default {

    name: 'slide_type',

    props : {

        concert : Object

    }

  };

</script>
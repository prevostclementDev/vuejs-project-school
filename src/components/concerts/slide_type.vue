<template>

    <router-link to="/concert" style="display:contents;">
        <div v-if="concert" class="artiste">

            <img v-bind:src="concert.img_bg" alt="" class="bg_img">
            <div class="filter_bg"></div>
                    
            <div class="content">
                        
                <div class="date">
                    <p>{{ concert.date }}</p>
                </div>

                <div class="info">
                    <h3>{{ concert.name }}</h3>
                    <p>{{ concert.lieu }}</p>
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
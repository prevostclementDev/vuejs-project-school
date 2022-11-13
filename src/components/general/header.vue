<template>
    <header>
        <h1>
            {{ title }}
            <span>{{ title_second }}</span>
        </h1>
        <img v-if="imgVisible == true" src="assets/production/img/vector-opacity-block_1.png" alt="">
    </header>    
</template>
  
<script lang="ts">

    export default {

        name: 'header_component',
        props : {
            title : String,
            title_second : String,
            imgVisible : Boolean
        }
        
    };

</script>
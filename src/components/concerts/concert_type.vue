<template>

    <section class="type_concert">

        <h2>{{ type }}</h2>

        <div class="contains_artiste">

            <slot></slot>

        </div>

    </section>

</template>
  
<script lang="ts">

  export default {

    name: 'concert_type',

    props : {

        type : String

    },

    mounted() {

        const contains_artiste = document.querySelectorAll<HTMLElement>('.contains_artiste');
        let clicking = false;
        let posX = 0;
        let actualscroll = 0;

        if ( contains_artiste.length > 0 ) {

            contains_artiste.forEach( (element) => {

                element.addEventListener('mousedown', (event) => {

                    posX = event.pageX;

                    actualscroll = element.scrollLeft;

                    element.style.cursor = 'grabbing';
                    clicking = true;

                });

                element.addEventListener('mouseup', () => {

                    element.style.cursor = 'grab';
                    clicking = false;

                });

                element.addEventListener('mousemove', (event) => {

                    if (clicking) {

                        const scrolled = (event.pageX) ;

                        element.scrollLeft = actualscroll-(scrolled - posX);

                    }

                });

                element.addEventListener('mouseleave', () => {

                    element.style.cursor = 'grab';
                    clicking = false;

                });

            });

        }

    },

  };

</script>
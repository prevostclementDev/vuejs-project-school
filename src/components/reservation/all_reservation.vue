<template>
    
    <section class="all_reservation">

        <div class="text_info">
            <h2>Tu as {{ reservations.length }} réservations de concerts</h2>
        </div>

        <div class="contains-reservation">
            
            <div class="reservation" v-for="reservation in reservations" v-if="reservations.length != 0">
                <h3><strong>{{reservation.artist.name}},</strong>le {{reservation.date}} à Paris</h3>
                <button class="delete" :deleteID="reservation.id" @click.prevent="(event) => deleteReservation(event)">Supprimer</button>
            </div>
            
        </div>

    </section>
    
</template>
  
<script lang="ts">

  export default {

    name: 'all_reservation',

    computed : {

        reservations() {

            return this.$store.state.reservation;

        }

    },

    methods : {

        deleteReservation(event) {

            this.$store.commit('delete_reservation', event.target.getAttribute('deleteID'));
            
            if ( this.$store.state.reservation.length == 0 ) {

                this.$store.commit('set_reservation_status', false);

            }

        }

    }

  };

</script>
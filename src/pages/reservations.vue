<template>
    <section class="container-index raduis-left">

      <navigation />
      <header_component title="Mes réservations," title_second="pour les concerts" v-bind:imgVisible="false"/>

    </section>

    <no_reservation v-if="!status_reservation" />
    <all_reservation v-else />

    <footer_component />

</template>

<script>

    import navigation from '../components/general/navigation.vue'
    import header_component from '../components/general/header.vue'
    import footer_component from '../components/general/footer_component.vue'
    import no_reservation from '../components/reservation/no_reservation.vue'
    import all_reservation from '../components/reservation/all_reservation.vue'

    export default {
        name: 'reservations',

        components: {
            navigation,
            header_component,
            footer_component,
            no_reservation,
            all_reservation,
        },

        props : {

            id : {type : Number, default : 0},

        },

        data() {

            if ( this.$store.state.reservation.length != 0 ) {

                this.$store.commit('set_reservation_status', false);

            }

            return {

                reservation : this.$store.state.reservationStatus,

            }

        },

        computed: {

            status_reservation () {

                return this.reservation.status;

            }

        },

        mounted() {

            if ( this.id != 0 && this.id != undefined ) {

                this.$store.commit('add_reservation', {
                    id : this.id,
                });

                this.$store.commit('set_reservation_status', true);

                return;

            }

        }

    }
</script>

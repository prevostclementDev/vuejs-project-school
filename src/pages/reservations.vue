<template>
    <section class="container-index raduis-left">

      <navigation />
      <header_component title="Mes réservations," title_second="pour les concerts" v-bind:imgVisible="false"/>

    </section>

    <no_reservation v-if="!reservation" />
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

        data() {

            return {

                reservation : true,

            }

        },

    }
</script>

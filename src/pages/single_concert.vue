<template>

    <section class="global_concert">

        <navigation v-bind:borderBottom="true"/>

        <concert_component :id_concert="$route.params.id"/>

        <footer_component />

    </section>

</template>

<script>

    import navigation from '../components/general/navigation.vue'
    import footer_component from '../components/general/footer_component.vue'
    import concert_component from '../components/single_concert/concert_component.vue'

    export default {
        name: 'reservations',
        components: {
            navigation,
            footer_component,
            concert_component,
        },

    }
</script>

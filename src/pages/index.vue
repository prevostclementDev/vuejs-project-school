<template>
      <main class="container-index bottom-padding">

        <navigation />
        <header_component title="Les meilleurs concerts," title_second="en avant-première." v-bind:imgVisible="true"/>
        <first_view />
        <point_comp />

      </main>

      <phone_download />
      <footer_component />
</template>

<script>

  import navigation from '../components/general/navigation.vue'
  import header_component from '../components/general/header.vue'
  import first_view from '../components/home/first_view.vue'
  import point_comp from '../components/home/point_comp.vue'
  import phone_download from '../components/home/phone_download.vue'
  import footer_component from '../components/general/footer_component.vue'

  export default {
    name: 'Accueil',
    components: {
      navigation,
      header_component,
      first_view,
      point_comp,
      phone_download,
      footer_component,
    },
  }
</script>

<!-- <style lang="scss">

</style> -->
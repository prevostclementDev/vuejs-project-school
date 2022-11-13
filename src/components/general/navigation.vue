<template>
  <nav id="navigation" v-bind:class="{ 'no_border' : borderBottom }">
      <div class="left-part">
        <p>Buuk</p>
        <ul>
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/tous-les-concerts">Tous les concerts</router-link></li>
          <li><router-link to="/mes-reservations">Mes réservations</router-link></li>
        </ul>
      </div>
      <div class="right-part">
        <p>+33 4 50 67 33 22</p>
      </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'navigation',
  props : {

    borderBottom : Boolean,

  }
};
</script>
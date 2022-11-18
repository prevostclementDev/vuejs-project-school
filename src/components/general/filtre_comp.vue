<template>

    <div class="filtres">
        
        <div class="contains_filtres">

            <label for="" class="searchArtiste">
                <div class="img">
                    <img src="assets/production/img/chercher_1.png" alt="">
                </div>
                <div class="input">
                    <input @keyup="(event) => filterArray(event)" type="text" name="" id="" placeholder="Rechercher un artiste">
                </div>
                
            </label>

            <label for="" class="orderBy">

                <p>Trier par</p>
                <select @change="(event)=> sortedBy(event)" name="" id="">
                    <option value="dcroissant">Date croissante</option>
                    <option value="ddcroissant">Date décroissante</option>
                </select>

            </label>

        </div>

    </div>

</template>
  
<script lang="ts">

    export default {

        name: 'filtre_comp',

        methods : {

            filterArray(event) {

                this.$emit('filterArrayName', {
                    value : event.target.value,
                });

            },

            sortedBy(event) {

                this.$emit('SortedBy', {
                    value : event.target.value,
                });

            }

        }
        
    };

</script>
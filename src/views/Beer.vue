<template>
  <v-container v-if="beer" class="mt-12">
    <div class="d-flex">
      <v-img :src="beer.image_url" height="500" max-width="200" contain />
      <div class="ml-12">
        <h1>{{ beer.name }}</h1>
        <h3 class="mb-6">{{ beer.tagline }}</h3>
        <p>{{ beer.description }}</p>
        <p class="d-inline mr-6">
          Abv: <span>{{ beer.abv }}%</span>
        </p>
        <p class="d-inline mr-6">
          Ibu: <span>{{ beer.ibu }}</span>
        </p>
        <p class="d-inline mr-6">
          Ebc: <span>{{ beer.ebc }}</span>
        </p>
        <p class="d-inline mr-6">
          Srm: <span>{{ beer.srm }}</span>
        </p>
        <p class="d-inline mr-6">
          Ph: <span>{{ beer.ph }}</span>
        </p>
        <div v-if="beer.ingredients.malt">
          <p class="mb-0 mt-3">Malts:</p>
          <ul>
            <li v-for="(malt, i) in beer.ingredients.malt" :key="malt.name + i">
              {{ malt.name }} - {{ malt.amount.value }} {{ malt.amount.unit }}
            </li>
          </ul>
          <p class="mb-0 mt-3">Hops:</p>
          <ul>
            <li v-for="(hop, i) in beer.ingredients.hops" :key="hop.name + i">
              {{ hop.name }} - {{ hop.amount.value }} {{ hop.amount.unit }}
            </li>
          </ul>
          <p class="mb-0 mt-3">Food pairing:</p>
          <ul>
            <li v-for="food in beer.food_pairing" :key="food">
              {{ food }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Beer",
  components: {},
  data() {
    return {
      beer: null,
    };
  },
  mounted() {
    axios
      .get(`https://api.punkapi.com/v2/beers/${this.$route.params.id}`)
      .then((res) => (this.beer = res.data[0]))
      .catch((err) => console.log(err));
  },
};
</script>

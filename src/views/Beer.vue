<template>
  <div v-if="beer">
    <h1>{{ beer.name }}</h1>
  </div>
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

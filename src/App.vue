<template>
  <v-app>
    <v-app-bar app color="green" dark>
      <v-row align="center">
        <v-col cols="3" sm="3">
          <h1 class="mr-12" @click="navHome" style="cursor: pointer">
            Punk beer
          </h1>
        </v-col>
        <v-col cols="9" sm="6">
          <v-autocomplete
            width="300"
            v-model="model"
            :items="items"
            :loading="isLoading"
            :search-input.sync="search"
            color="white"
            hide-no-data
            hide-details
            hide-selected
            item-text="name"
            placeholder="Search for a beer..."
            prepend-icon="mdi-magnify"
            @change="selectBeer"
            return-object
          />
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main>
      <router-view :key="$route.path" />
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: "App",

  data: () => ({
    beers: [],
    isLoading: false,
    model: null,
    search: null,
  }),
  computed: {
    items() {
      return this.beers.map((beer) => {
        return { id: beer.id, name: beer.name };
      });
    },
  },
  watch: {
    search(val) {
      if (this.beers.length > 0) return;
      if (this.isLoading) return;
      if (this.search.length < 3) return;

      this.isLoading = true;
      axios
        .get(`https://api.punkapi.com/v2/beers?beer_name=${val}`)
        .then((res) => {
          this.beers = res.data;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally((this.isLoading = false));
    },
  },
  methods: {
    selectBeer: function (beer) {
      this.$router.push({ name: "Beer", params: { id: beer.id } });
    },
    navHome: function () {
      if (this.$route.path !== "/") this.$router.push({ name: "Home" });
    },
  },
};
</script>

<template>
  <div class="home">
    <div v-if="beers">
      <v-pagination
        v-model="page"
        :length="13"
        :total-visible="7"
        @input="pageChange"
      />
      <v-container>
        <v-row align-content="space-evenly">
          <beer-card v-for="beer in beers" :key="beer.id" :beer="beer" />
        </v-row>
      </v-container>
      <v-pagination
        v-model="page"
        :length="13"
        :total-visible="7"
        @input="pageChange"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BeerCard from "@/components/BeerCard.vue";

export default {
  name: "Home",
  components: {
    BeerCard,
  },
  data() {
    return {
      beers: null,
      page: 1,
    };
  },
  mounted() {
    axios
      .get(`https://api.punkapi.com/v2/beers?page=${this.page}`)
      .then((res) => {
        console.log(res);
        this.beers = res.data;
      })
      .catch((err) => console.log(err));
  },
  updated() {
    console.log(this.beers);
    console.log(this.page);
  },
  methods: {
    pageChange: function () {
      // this.page = value;
      axios
        .get(`https://api.punkapi.com/v2/beers?page=${this.page}`)
        .then((res) => {
          console.log(res);
          this.beers = res.data;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

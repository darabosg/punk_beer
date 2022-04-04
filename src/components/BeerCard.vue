<template>
  <v-col cols="6">
    <v-card class="d-flex pa-6" height="250">
      <div class="d-flex flex-grow-1 flex-shrink-0" style="max-width: 100%">
        <v-img :src="beer.image_url" height="200" max-width="80" contain />

        <div
          class="d-flex flex-column justify-space-between flex-grow-1 flex-shrink-1"
        >
          <div>
            <v-card-title>{{ beer.name }}</v-card-title>
            <v-card-subtitle>{{ beer.tagline }}</v-card-subtitle>
          </div>

          <v-btn color="green" small class="align-self-end">More</v-btn>
        </div>
      </div>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["beer"],
  data: () => ({}),
};
</script>

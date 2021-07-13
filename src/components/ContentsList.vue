<template>
  <v-container>
    <v-list>
      <v-card elevation="2" outlined rounded v-for="data in list" :key="data.id">
        <v-card-subtitle>{{ data.name }}</v-card-subtitle>
        <v-card-subtitle>{{ data.content }}</v-card-subtitle>
        <v-card-actions>
          <v-btn small rounded outlined class="secondary">
            <v-icon>mdi-pencil</v-icon>

          </v-btn>
          <v-btn small rounded outlined class="secondary">
            <v-icon>
              mdi-delete
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-list>
  </v-container>

</template>

<script>
export default {
  name: "ContentsList",
  data: () => ({
    list: [
      {id: 1, name: "eunsu lee", content: "test1 "},
      {id: 2, name: "eunsu lee", content: "test2"},
      {id: 3, name: "eunsu lee", content: "test2"},
      {id: 4, name: "eunsu lee", content: "test2"},
      {id: 5, name: "eunsu lee", content: "test2"},
    ]
  })
}
</script>

<style scoped>

</style>
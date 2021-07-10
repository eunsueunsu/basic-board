<template>
  <v-container>
    <v-list>
      <div v-for="data in list" :key="data.id">
        <p>{{data.content}}</p>
      </div>
    </v-list>
  </v-container>

</template>

<script>
export default {
  name: "ContentsList",
  data : ()=> ({
    list: [
      {id :1, content : "test1"},
      {id :2, content : "test2"},
    ]
  })
}
</script>

<style scoped>

</style>
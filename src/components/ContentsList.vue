<template>
  <v-container>
    <v-list>
      <v-card class="ma-2" elevation="1" outlined rounded v-for="data in list" :key="data.id">

        <v-row align="center" class="">
          <v-col cols="6">
            <v-card-text class="name">{{ data.name }}</v-card-text>

          </v-col>
          <v-col cols="6">
            <v-card-text class="card-date">{{ '@'+data.date }}</v-card-text>

          </v-col>



        <v-col cols="8" class="mr-auto" >
        <v-card-text>{{ data.content }}</v-card-text>
        </v-col>
        <v-col cols="auto" >
          <v-card-actions >
            <v-btn  x-small rounded outlined class="secondary">
              <v-icon>mdi-pencil</v-icon>

            </v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-btn x-small rounded outlined class="secondary">
              <v-icon>
                mdi-delete
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-col>
        </v-row>
      </v-card>

    </v-list>
  </v-container>

</template>

<script>
export default {
  name: "ContentsList",
  data: () => ({
    list: [
      {id: 1, name: "eunsu lee", content: "test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1 ", date:'2021-07-08'},
      {id: 2, name: "배고파요", content: "배고프다구요"},
      {id: 3, name: "eunsu lee", content: "test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1"},
      {id: 4, name: "eunsu lee", content: "test2"},
      {id: 5, name: "eunsu lee", content: "test2"},
    ]
  })
}
</script>

<style scoped>
.v-card__subtitle, .v-card__text, .v-card__title {
  /*padding-bottom: 0.5em;*/
  /*padding-top: 0.5em;*/
}  .row{
  margin-top: 0px;
}
</style>
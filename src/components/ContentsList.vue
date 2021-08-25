<template>
  <v-container>
    <v-list>
      <v-card class="ma-2" elevation="0" outlined v-for="data in list" :key="data.id">

        <v-row align="center" class="card-row">
          <v-col cols="6">
            <v-card-text class="name" style="color :#ffb6c1">{{ data.name }}</v-card-text>
          </v-col>
          <v-col cols="6">
            <v-card-text class="card-date">{{ '@' + data.date }}</v-card-text>
          </v-col>

          <v-col cols="8" class="mr-auto">
            <v-card-text>{{ data.content }}</v-card-text>
          </v-col>
          <v-col cols="auto">
            <v-card-actions>
              <v-btn small rounded outlined class="secondary" @click="onClickShowModal('수정하기')">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-btn small rounded outlined class="secondary" @click="onClickShowModal('삭제하기')">
                <v-icon>
                  mdi-delete
                </v-icon>
              </v-btn>
            </v-card-actions>

          </v-col>
        </v-row>
      </v-card>

    </v-list>
    <!--    부모 -> 자식 props 전달-->
    <InputModal v-if="showInputModal" :header-name="this.modalHeaderName" @close="showInputModal=false">
    </InputModal>
  </v-container>
</template>
<script>

import InputModal from "./modal/InputModal";

export default {
  name: "ContentsList",
  components: {
    InputModal,

  },
  data: () => ({
    showInputModal: false,
    modalHeaderName: "",
    list: [
      {
        id: 1,
        name: "eunsu lee",
        content: "test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1 ",
        date: '2021-07-08'
      },
      {id: 2, name: "배고파요", content: "배고프다구요"},
      {
        id: 3,
        name: "eunsu lee",
        content: "test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1"
      },
      {id: 4, name: "eunsu lee", content: "test2"},
      {id: 5, name: "eunsu lee", content: "test2"},
    ]
  }),
  methods: {
    onClickShowModal(headerName) {
      this.showInputModal = true
      this.modalHeaderName = headerName
    },

  }
}
</script>

<style scoped>
.v-card__subtitle, .v-card__text, .v-card__title {
  padding-bottom: 0.5em;
  padding-top: 0.5em;
}

.row {
  margin-top: 0px;
}
</style>
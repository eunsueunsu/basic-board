<template>
  <v-container>
    <v-list>
      <v-card class="ma-2" elevation="0" outlined v-for="data in list" :key="data.id">

        <v-row align="center" class="card-row">
          <v-col cols="6">
            <v-card-text class="name" style="color :#ffb6c1">{{ data.authorId }}</v-card-text>
          </v-col>
          <v-col cols="6">
            <v-card-text class="card-date">{{ '@' + data.createdAt }}</v-card-text>
          </v-col>

          <v-col cols="8" class="mr-auto">
            <v-card-text>{{ data.text }}</v-card-text>
          </v-col>
          <v-col cols="auto">
            <v-card-actions>
              <v-btn small rounded outlined class="secondary" @click="onClickShowModal('수정하기',data.name)">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-btn small rounded outlined class="secondary" @click="onClickShowModal('삭제하기',data.name)">
                <v-icon>
                  mdi-delete
                </v-icon>
              </v-btn>
            </v-card-actions>

          </v-col>
        </v-row>
      </v-card>

    </v-list>
    <InputModal v-if="inputModalStore.showInputModal"
    >
    </InputModal>
  </v-container>
</template>
<script>

import InputModal from "./modal/InputModal";
import {mapState, mapActions, mapMutations} from "vuex";
import axios from "axios";


export default {
  name: "ContentsList",
  components: {
    InputModal,

  },
  data: () => ({
    selectedName: "",
    // list: [
    //   {
    //     id: 1,
    //     name: "eunsu lee",
    //     content: "test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1 ",
    //     date: '2021-07-08'
    //   },
    //   {id: 2, name: "배고파요", content: "배고프다구요"},
    //   {
    //     id: 3,
    //     name: "eunsu lee",
    //     content: "test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1"
    //   },
    //   {id: 4, name: "eunsu lee", content: "test2"},
    //   {id: 5, name: "eunsu lee", content: "test2"},
    // ]
    list: []
  }),
  computed:
      mapState({
        inputModalStore: state => state.inputModalStore
      })
  ,
  methods: {
    ...mapMutations('inputModalStore', ['changeShowInputModal']
    ),
    ...mapActions('inputModalStore', ['callChangeShowInputModal']),

    onClickShowModal(headerName, name) {
      this.selectedName = name
      this.$store.dispatch('inputModalStore/callChangeShowInputModal', headerName)
    },
  },
  created() {
    // eslint-disable-next-line no-unused-vars
    const res = axios.get('/api/contents')
        .then(res => {
              this.list = res.data.data
            }
            // eslint-disable-next-line no-unused-vars
        ).catch(error=>{
          alert('리스트를 불러오는데 실패하였습니다.')
        })

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
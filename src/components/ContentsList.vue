<template>
  <v-container>
    <v-list>
      <v-card class="ma-2" elevation="0" outlined v-for="data in list" :key="data.id">
        <v-row align="center" class="card-row">
          <v-col cols="4">
            <v-card-text class="name" style="color :#ffb6c1">{{ data.authorId }}</v-card-text>
          </v-col>
          <v-col cols="8">
            <v-card-text class="card-date " style="text-align: right">{{ '@' + getLocalDate(data.createdAt) }}
            </v-card-text>
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
    <div class="text-center">
      <v-pagination
          v-model="pagination.pageNumber"
          :length="totalPages"
          circle
          @input="onPageChange"
      ></v-pagination>
    </div>
    <InputModal v-if="inputModalStore.showInputModal"
    >
    </InputModal>
  </v-container>
</template>
<script>

import InputModal from "./modal/InputModal";
import {mapState, mapActions, mapMutations} from "vuex";
import axios from "axios";
import {DateTime} from "luxon";


export default {
  name: "ContentsList",
  components: {
    InputModal,

  },
  data: () => ({
    totalPages: '',
    pagination: {
      pageNumber: 1,
      pageSize: 5
    },
    selectedName: "",
    // list: [
    //   {
    //     id: 1,
    //     authorId: "eunsu lee",
    //     text: "test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1 ",
    //     createdAt: '2021-12-19T16:09:47+09:00'
    //   },
    //   {
    //     id: 2, authorId: "배고파요", text: "배고프다구요", createdAt: '2021-12-19T16:09:47+09:00'
    //   },
    //   {
    //     id: 3,
    //     authorId: "eunsu lee",
    //     text: "test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1"
    //     , createdAt: '2021-12-19T16:09:47+09:00'
    //
    //   },
    //   {
    //     id: 4, authorId: "eunsu lee", text: "test2", createdAt: '2021-12-19T16:09:47+09:00'
    //   },
    //   {
    //     id: 5, authorId: "eunsu lee", text: "test2", createdAt: '2021-12-19T16:09:47+09:008'
    //   },
    // ]
    list: []
  }),
  computed:
      mapState({
        inputModalStore: state => state.inputModalStore
      })
  ,
  methods: {
    // eslint-disable-next-line no-unused-vars
    getLocalDate(date) {
      if (!date) return ''
      return DateTime.fromISO(date).toFormat('yyyy-MM-dd HH:mm:ss')
    },
    ...mapMutations('inputModalStore', ['changeShowInputModal']
    ),
    ...mapActions('inputModalStore', ['callChangeShowInputModal']),

    onClickShowModal(headerName, name) {
      this.selectedName = name
      this.$store.dispatch('inputModalStore/callChangeShowInputModal', headerName)
    },
    onPageChange() {
      this.getContentsList()

    },
    getContentsList() {
      // eslint-disable-next-line no-unused-vars
      const res = axios.get('/api/contents', {
        params: {
          pageNumber: this.pagination.pageNumber,
          pageSize: this.pagination.pageSize
        }

      })
          .then(res => {
                this.list = res.data.content
                this.pagination.pageNumber = res.data.pageable.pageNumber + 1
                this.totalPages = res.data.totalPages
              }
              // eslint-disable-next-line no-unused-vars
          ).catch(error => {
            alert('리스트를 불러오는데 실패하였습니다.')
          })
    },

  },
  created() {
    this.getContentsList();


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
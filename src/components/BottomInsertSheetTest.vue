<template>
  <v-container>
    <v-fab-transition>
      <v-btn
          fab
          color="primary"
          fixed
          bottom
          right
          @click="sheet =!sheet"
      >
        <v-icon>
          mdi-pencil
        </v-icon>
      </v-btn>
    </v-fab-transition>
    <v-bottom-sheet v-model="sheet">
      <v-sheet height="300px">
        <template>
          <v-container class="bs-con">

            <v-row class="bs-row">
              <v-col>
                <!-- align="center" - 베이스라인 잡아줌
                -->

                <v-row class="pa-3">

                  <v-col cols="4">
                    <v-text-field label="닉네임" v-model="content.authorId">
                    </v-text-field>
                  </v-col>

                  <v-col cols="4">
                    <v-text-field label="비밀번호" v-model="content.contentPassword">
                    </v-text-field>
                  </v-col>

                  <v-col cols="4">
                    <v-btn class="primary" outlined @click="onClickSaveContent">
                      등록
                    </v-btn>
                  </v-col>

                  <v-row class="pa-3 ">
                    <v-col cols="12">
                      <v-textarea label="서윗하게 쓰쇼" outlined rows="5" v-model="content.text">
                      </v-textarea>
                    </v-col>
                  </v-row>

                </v-row>
              </v-col>
            </v-row>

          </v-container>
        </template>

      </v-sheet>

    </v-bottom-sheet>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "BottomInsertSheetTest",

  data: () => ({
    sheet: false,
    content: {
      authorId: '',
      contentPassword: '',
      text: '',
      authorIp: ''
    }
  }),
  methods:{
    onClickSaveContent(){
      // eslint-disable-next-line no-unused-vars
      axios.post('/api/content',this.content).then(res=>{
        alert('등록 성공')
      })
    }
  }
}
</script>

<style scoped>
@import "/src/assets/styles/bottomInsertSheet.css";

.bs-row {
  max-width: 980px;
}

.bs-con {
  display: flex;
  justify-content: center;
}


</style>
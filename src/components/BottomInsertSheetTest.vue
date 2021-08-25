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
          <v-container>

            <v-row class="text-center" style="max-width: 980px" align-content="center">
              <v-col>
                <!-- align="center" - 베이스라인 잡아줌
                -->

                <v-row class="pa-3 " align="center"
                       justify="space-around">

                  <v-col cols="4">
                    <v-text-field label="닉네임">
                    </v-text-field>
                  </v-col>

                  <v-col cols="4">
                    <v-text-field label="비밀번호">
                    </v-text-field>
                  </v-col>

                  <v-col cols="4">
                    <v-btn class="primary" outlined>
                      등록
                    </v-btn>
                  </v-col>

                  <v-row class="pa-3 ">
                    <v-col cols="12">
                      <v-textarea label="서윗하게 쓰쇼" outlined rows="5">
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
export default {
  name: "BottomInsertSheetTest",

  data: () => ({
    sheet: false
  })
}
</script>

<style scoped>

</style>
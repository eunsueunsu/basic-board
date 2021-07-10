<template>
  <v-container>
    <v-row class="text-center">
      <v-col >
        <!-- align="center" - 베이스라인 잡아줌
        -->

        <v-row  class="pa-3 "  align="center"
               justify="space-around" >

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

          <v-row  class="pa-3 ">
            <v-col cols="12">
              <v-textarea label="예쁜말 고운말" outlined rows="2">
              </v-textarea>
            </v-col>
          </v-row>

        </v-row>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: "ContentsList"
}
</script>

<style scoped>

</style>
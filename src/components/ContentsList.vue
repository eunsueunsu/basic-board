<template>
<v-container>
<v-row class="text-center">

  <v-col>
<!--    // input-->
    <div>
<v-textarea label="닉네임" outlined rows="1" row-height="10">
</v-textarea>
<v-textarea label="비밀번호" outlined rows="1" row-height="10">
</v-textarea>
    </div>
    <div>
      <v-textarea label="예쁜말 고운말" outlined rows="1" row-height="10">
      </v-textarea>

    </div>
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
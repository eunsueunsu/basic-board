<template>
    <v-list>
      <v-list-item-group
          active-class="primary--text text--accent-4">
        <v-list-item>
          <v-list-item-icon>
            <v-icon large>
              mdi-github
            </v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            Github
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon large>
              mdi-account
            </v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            Resume
          </v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
          <v-switch  v-model="$vuetify.theme.dark" class="float-right"></v-switch>
<!--          :label="`dark mode`"-->
          </v-list-item-icon>
          <v-list-item-title>
            dark mode
          </v-list-item-title>

        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon large>
              mdi-login
            </v-icon>
          </v-list-item-icon>
          <v-list-item-title @click="onClickLoginAsAdmin()">
            login as admin
          </v-list-item-title>
        </v-list-item>

      </v-list-item-group>
      <InputModal v-if="showInputModal" :header-name="this.modalHeaderName" @close="showInputModal=false">
      </InputModal>
    </v-list>

</template>

<script>
import InputModal from "./modal/InputModal";

export default {
  name: "NavDrawer",
  components:{
    InputModal
  },
  data: () => ({
    group: null,
    // showInputModal:false,
    modalHeaderName :'',
  }),
  methods: {
    onClickLoginAsAdmin() {
      // this.showInputModal=true
      // this.modalHeaderName='관리자로 로그인'
      this.$emit("onClickShowModal",'관리자로 로그인')

    }
  }


}
</script>

<style scoped>

</style>
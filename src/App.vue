<template>
  <v-app>

    <v-app-bar
        app
        color="primary"
        dark
        hide-on-scroll
    >
      <v-app-bar-nav-icon @click="drawer = true">

      </v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <h4>방명록 쓰고가기 </h4>
        <!--        <v-img-->
        <!--          alt="Vuetify Logo"-->
        <!--          class="shrink mr-2"-->
        <!--          contain-->
        <!--          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"-->
        <!--          transition="scale-transition"-->
        <!--          width="40"-->
        <!--        />-->

        <!--        <v-img-->
        <!--          alt="Vuetify Name"-->
        <!--          class="shrink mt-1 hidden-sm-and-down"-->
        <!--          contain-->
        <!--          min-width="100"-->
        <!--          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"-->
        <!--          width="100"-->
        <!--        />-->
      </div>


      <!--      <v-btn-->
      <!--        href="https://github.com/vuetifyjs/vuetify/releases/latest"-->
      <!--        target="_blank"-->
      <!--        text-->
      <!--      >-->
      <!--        <span class="mr-2">Latest Release</span>-->
      <!--        <v-icon>mdi-open-in-new</v-icon>-->
      <!--      </v-btn>-->
      <v-spacer></v-spacer>


    </v-app-bar>

    <v-main>
      <Intro/>
      <ContentsList/>
      <BottomInsertSheet/>

    </v-main>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <NavDrawer></NavDrawer>
    </v-navigation-drawer>

    <InputModal v-if="showInputModal" :header-name="this.modalHeaderName" @close="showInputModal=false">
    </InputModal>
  </v-app>
</template>

<script>
import Intro from './components/Intro';
import NavDrawer from './components/NavDrawer';
import ContentsList from './components/ContentsList';
import BottomInsertSheet from './components/BottomInsertSheet';
import InputModal from "./components/modal/InputModal";



export default {
  name: 'App',

  components: {
    Intro,
    ContentsList,
    BottomInsertSheet,
    NavDrawer,
    InputModal,
  },

  data: () => ({
    drawer: false,
    showInputModal:false,
    modalHeaderName:'',
    //
  }),
  methods:{

    onClickShowModal(headerName) {
      this.showInputModal = true
      this.modalHeaderName = headerName
    },
    hideModal(){
      this.showInputModal=false
    },


  }
};
</script>

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
      <HelloWorld/>
      <!--      <BottomInsertSheetTest/>-->
      <ContentsList/>
      <BottomInsertSheetTest/>

    </v-main>
    <v-navigation-drawer v-model="drawer" absolute temporary>
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
            <v-switch :label="`dark mode`" v-model="$vuetify.theme.dark" class="float-right"></v-switch>

          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon large>
                mdi-login
              </v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              login as admin
            </v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import ContentsList from './components/ContentsList';
import BottomInsertSheetTest from './components/BottomInsertSheetTest';


export default {
  name: 'App',

  components: {
    HelloWorld,
    ContentsList,
    BottomInsertSheetTest
  },

  data: () => ({
    drawer: false,
    group: null
    //
  }),
};
</script>

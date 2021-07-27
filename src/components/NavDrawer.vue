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
</template>

<script>
export default {
  name: "NavDrawer",

  data: () => ({
    group: null
  })



}
</script>

<style scoped>

</style>
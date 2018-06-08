<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-items>
        <v-btn :to="{ name: 'home' }" flat>
          <v-icon>apps</v-icon>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-title>Стань стальной крысой</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-content>
  </v-app>
</template>

<script>
export default { name: 'App' }
</script>

<style>
html { overflow-y: auto }
</style>

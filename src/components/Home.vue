<template>
  <v-container grid-list-xl>
    <v-layout wrap text-xs-center>
      <v-flex xs12 display-1>
        Добро пожаловать
      </v-flex>
      <v-flex xs12 headline>
        Текстовый квест от Гарри Гаррисона &mdash; Стань стальной крысой.
      </v-flex>
      <v-flex xs12>
        <v-btn @click="newGame" large>Новая игра</v-btn>
        <v-btn v-if="frame" :to="{ name: 'frame' }" color="primary" large>
          Продолжить игру с {{ frame }}
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'Home',
  computed: {
    frame () {
      return parseInt(localStorage.steelRatFrame) || false
    }
  },
  methods: {
    newGame () {
      localStorage.steelRatFrame = 0
      this.$router.push({ name: 'frame' })
    }
  }
}

</script>

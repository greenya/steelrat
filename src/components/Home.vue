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
        <v-btn @click="newGameClick" large>Новая игра</v-btn>
        <v-btn v-if="frame" :to="{ name: 'frame' }" color="primary" large>
          Продолжить игру с {{ frame }}
        </v-btn>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" max-width="300">
      <v-card>
        <v-card-title class="headline">Новая игра</v-card-title>
        <v-card-text>Вы потеряете прогрес текущей игры. Продолжить?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="newGameStart">Да</v-btn>
          <v-btn flat @click="dialog = false">Нет</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      dialog: false
    }
  },
  computed: {
    frame () {
      return parseInt(localStorage.steelRatFrame) || false
    }
  },
  methods: {
    newGameClick () {
      if (this.frame) {
        this.dialog = true
        return
      }
      this.newGameStart()
    },
    newGameStart () {
      localStorage.steelRatFrame = 0
      this.$router.push({ name: 'frame' })
    }
  }
}

</script>

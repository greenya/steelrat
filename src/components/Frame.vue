<template>
  <v-container grid-list-xl>
    <v-layout wrap>
      <v-flex xs12 display-2 text-xs-center>
        {{ frameNumber || 'Начало' }}
      </v-flex>
      <v-flex xs12 headline>
        <span v-for="(word, i) in frameText" :key="i">
          <v-btn v-if="word.startsWith('@link')" @click="jump(word)" color="primary" style="padding-top: 0.1em; font-size: 85%;">
            {{ parseLinkToken(word) }}
          </v-btn>
          <span v-else>
            {{ word }}
          </span>
        </span>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import quest from '@/assets/quest.json'

export default {
  name: 'Frame',
  data () {
    return {
      frameNumber: 0
    }
  },
  created () {
    this.frameNumber = parseInt(localStorage.steelRatFrame) || 0
  },
  computed: {
    frameText () {
      const k = String(this.frameNumber)
      const f = quest.frames.find(i => i.key === k)
      return f ? f.body.split(' ') : []
    }
  },
  methods: {
    jump (link) {
      const n = this.parseLinkToken(link)
      localStorage.steelRatFrame = n
      this.$vuetify.goTo(0, { offest: 0, duration: 250, easing: 'easeInOutCubic' })
      setTimeout(() => { this.frameNumber = n }, 250)
    },
    parseLinkToken (token) {
      return parseInt(token.substring(6)) // 6 is an index of the first digit in "@link(123)"
    }
  }
}

</script>

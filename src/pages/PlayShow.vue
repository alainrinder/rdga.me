<template>
  <div class="component play-show">
    <h3>Partie #{{ play.id }} ({{ play.game }})</h3>
  </div>
</template>

<script>
module.exports = {
  /*props: ['playId'],
  {
    'playId':  {
      type: Number,
      required: true
    },
  },*/
  // computed
  data: function() {
    return {
      play: {'id': this.$route.params.playId, 'game': 'Catan'}
    };
  },
}
</script>

<style scoped>
h3 {
  color: red;
}
</style>

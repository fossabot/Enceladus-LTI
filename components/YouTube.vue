<template>
  <section>
    <iframe
      v-if='id'
      title='YouTube'
      :src='`https://youtube.com/embed/${id}?autoplay=0`'
    />
  </section>
</template>

<script>
import Vue from 'vue';
import Component from 'nuxt-class-component';

@Component
export default class YouTube extends Vue {
  id = '';
}
</script>


<style lang='postcss' scoped>
section {
  grid-area: youtube;

  background: #171717 center / 64px url('~/static/icons/youtube.svg') no-repeat;
}

iframe {
  size: 100%;
  border: 0;
}
</style>

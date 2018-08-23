<template>
  <nav>
    <a href='https://github.com/r-spacex/Enceladus-LTI' target='_blank'>
      <github/>
    </a>
  </nav>
</template>

<script>
import Vue from 'vue';
import Component from 'nuxt-class-component';
import Github from '~/static/icons/github.vue';

@Component({
  components: {
    Github,
  }
})
export default class Links extends Vue {}
</script>

<style lang='postcss' scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>

<template>
  <section>
    <span>{{ mission_name }}</span>
    <countdown/>
  </section>
</template>

<script>
import Vue from 'vue';
import Component from 'nuxt-class-component';
import Countdown from '~/components/Countdown.vue';

@Component({
  components: { Countdown }
})
export default class Header extends Vue {
  mission_name = 'CRS-14';
}
</script>

<style lang='postcss' scoped>
section {
  grid-area: header;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: lch(100 0 0);
  font-size: 36px;
  letter-spacing: +4px;
  line-height: 1.1;
}
</style>

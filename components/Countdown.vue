<template>
  <section>
    {{ display_time }}
  </section>
</template>

<script>
import Vue from 'vue';
import Component from 'nuxt-class-component';

function pad(n) {
  return do {
    if (n < 10) `0${n}`;
    else n;
  }
}

@Component
export default class Countdown extends Vue {
  t0 = null;
  sign = '-';
  hours = 0;
  minutes = 0;
  seconds = 0;

  mounted() {
    this.interval = setInterval(this.update_clock, 1000);
  }

  get display_time() {
    return do {
      if (this.hours >= 48) {
        `T${this.sign}${Math.floor(this.hours / 24)}d ${this.hours % 24}h`;
      } else {
        `T${this.sign}${pad(this.hours)}:${pad(this.minutes)}:${pad(this.seconds)}`;
      }
    };
  }

  update_clock() {
    this.sign = do {
      if (this.t0 > Date.now() / 1000) '-';
      else '+';
    };

    const diff = Math.abs(Math.floor(this.t0 - Date.now() / 1000));

    this.hours = Math.floor(diff / 3600);
    this.minutes = Math.floor(diff % 3600 / 60);
    this.seconds = diff % 60;
  }
}
</script>

<style lang='postcss' scoped>
section {
  font-family: 'D-DIN expanded';
  font-size: 24px;
}
</style>

<template>
  <main>
    <logo/>
    <div class='header'/>
    <div class='links'/>
    <div class='youtube'/>
    <div class='updates'/>
    <div class='sections'/>
    <div class='twitter'/>
  </main>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo,
  }
}
</script>

<style>
main {
  --theme-color: lch(60 97 48);

  $gap: 24px;
  $number-columns: 3; /* how many columns is our grid? *not* how many equally-spaced columns */
  $youtube-ratio: 2 / 4; /* what ratio is the youtube container to the whole grid? */

  height: 100vh;
  padding: $gap $gap 0;

  background-color: lch(0 0 0);

  display: grid;
  gap: $gap;
  grid-template:
    ' logo      header   links   ' 72px
    ' sections  youtube  twitter ' calc((100vw - $gap * ($number-columns + 1)) * $youtube-ratio * (9 / 16))
    ' sections  updates  twitter ' auto
    / 1fr 2fr 1fr;
}

.header { grid-area: header; }
.links { grid-area: links; }
.youtube { grid-area: youtube; }
.updates { grid-area: updates; }
.sections { grid-area: sections; }
.twitter { grid-area: twitter; }

main > div {
  border: 1px solid lch(100 0 0);
}
</style>

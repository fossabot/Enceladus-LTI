<template>
  <nuxt/>
</template>

<style lang='postcss'>
* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
  line-height: 1.4;

  &::before,
  &::after {
    box-sizing: inherit;
  }
}

html {
  -webkit-font-smoothing: antialias;
  -moz-osx-font-smoothing: grayscale;
}

img {
  max-inline-size: 100%;
}

textarea {
  resize: block;
}

hr {
  border-block-start: 0;
  border-block-end: 1px solid current-color;
  margin-inline: auto;
}
</style>

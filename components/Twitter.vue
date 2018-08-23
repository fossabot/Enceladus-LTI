<template>
  <section>
    <script
      async
      charset = 'utf-8'
      src = 'https://platform.twitter.com/widgets.js'
    />

    <header>TWITTER</header>

    <!-- TODO replace link color with blue when appropriate -->
    <a
      class = 'twitter-timeline'
      data-link-color = '#ff5100'
      data-dnt = 'true'
      data-theme = 'dark'
      data-chrome = 'noheader nofooter noborders noscrollbar transparent'
      href = 'https://twitter.com/theZcuber/lists/r-spacex-mission-control'
    />
  </section>
</template>

<style lang='postcss' scoped>
section {
  grid-area: twitter;
  height: 100%;
  overflow: hidden scroll;
}

header {
  position: sticky;
  top: 0;
  background-color: lch(0 0 0);

  font-size: 24px;
  letter-spacing: +4px;

  line-height: 1.2;

  padding-bottom: 0.3em;

  &::before {
    content: '';
    background: bottom left url('~/static/icons/twitter.svg') no-repeat;
    display: inline-block;
    size: 1.5em 1em;
  }

  &::after {
    content: '';
    background: bottom left url('~/static/icons/arrow-right.svg') no-repeat;
    float: right;
    size: 1em;
  }
}
</style>

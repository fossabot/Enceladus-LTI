<template>
  <section>
    <script
      async
      charset = 'utf-8'
      src = 'https://platform.twitter.com/widgets.js'
    />

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
  overflow-y: scroll;
}
</style>

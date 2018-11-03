<template>
  <div class="BlogPost o-media">
    <div class="o-media__figure">
      <slot name="figure"/>
    </div>
    <div class="o-media__body">
      <div class="o-vertical-spacing">
        <h3 class="BlogPost__headline">
          <slot name="headline"/>
        </h3>
        <p>
          <slot/>
        </p>
        <div class="BlogPost__meta">
          <slot name="meta"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: `BlogPost`,
};
</script>

<style lang="scss">
.BlogPost {
  &__headline {
    font-size: 1.25em;
    font-weight: bold;
  }

  &__meta {
    font-size: 0.85em;
    color: #6b6b6b;
  }
}
</style>

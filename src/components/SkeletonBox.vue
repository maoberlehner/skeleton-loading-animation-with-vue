<template>
  <span
    :style="{ height, width: computedWidth }"
    class="SkeletonBox"
  />
</template>

<script>
export default {
  name: `SkeletonBox`,
  props: {
    maxWidth: {
      default: 100,
      type: Number,
    },
    minWidth: {
      default: 80,
      type: Number,
    },
    height: {
      default: `1em`,
      type: String,
    },
    width: {
      default: null,
      type: String,
    },
  },
  computed: {
    computedWidth() {
      return this.width || `${Math.floor((Math.random() * (this.maxWidth - this.minWidth)) + this.minWidth)}%`;
    },
  },
};
</script>

<style lang="scss">
.SkeletonBox {
  display: inline-block;
  position: relative;
  vertical-align: middle;
  overflow: hidden;
  background-color: #DDDBDD;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(#fff, 0) 0,
      rgba(#fff, 0.2) 20%,
      rgba(#fff, 0.5) 60%,
      rgba(#fff, 0)
    );
    animation: shimmer 5s infinite;
    content: '';
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
}
</style>

<template>
  <div class="mint-swipe-item">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'vueSwipeItem',

    mounted() {
      this.$parent && this.$parent.swipeItemCreated(this);
    },

    destroyed() {
      this.$parent && this.$parent.swipeItemDestroyed(this);
    }
  };
</script>

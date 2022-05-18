<template>
  <button class="btn" :style="{background: bgColor}">
    Button
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    bgColor: {
      type: String,
      default: 'blue'
    }
  }
}
</script>

<style scoped>
  .btn {
    padding: 1rem 1rem 1rem 1rem;
    color: white;
    font-size: 3rem;
    border: none;
    box-shadow: 10px 5px 5px grey;
    border-radius: 1rem;
  }
  .btn:active {
    box-shadow: 1px 1px 1px grey;
  }
</style>
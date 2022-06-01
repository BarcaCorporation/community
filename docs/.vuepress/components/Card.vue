<template>
  <div>
     <h5 :title="title">Card</h4>
     <h6 :subtitle="subtitle">Card</h4>
     <h4 :content="content">Card</h4>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: true,
    },
    shareButtons: {
      type: Boolean,
      required: false,
    }
  },
  computed: {},
  methods: {},
} 
</script>

<style></style>

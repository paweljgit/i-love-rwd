<template>
<div class="footer base-box">
  <div v-html="content.content">
    a
  </div>
</div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    content: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">

.footer {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  margin-top: var(--base-top-margin);
  padding: var(--base-padding);
}
</style>
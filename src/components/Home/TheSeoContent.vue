<template>
<div class="seo-content base-box">
  <div class="seo-content__logo">
    <Logo class="scale" />
  </div>
  <div v-html="content.content"></div>
</div>
</template>

<script>
import Logo from "@/components/ui/Logo.vue";

export default {
  name: "TheSeoContent",
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  components: {
    Logo
  }
}
</script>


<style lang="scss" scoped>

.seo-content {
  margin-top: var(--base-top-margin);
  padding: var(--base-padding);

  h1, h2, h3, h4, h5 {
    color: #000;
  }

  &__logo {
    background-color: white;
    border-radius: 10px;
    padding: 10px 30px;
    width: fit-content;
    margin: 0 auto;
    margin-top: -65px;
    margin-bottom: 25px;

    .scale {
      font-size: 34px;
    }
  }
}
</style>
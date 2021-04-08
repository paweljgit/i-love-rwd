<template>
<div>
  <TheWelcomeBox :content="this.homeContent.welcomeBox"/>
  <TheSeoContent :content="this.homeContent.seoContent" />
</div>
</template>

<script>
import TheWelcomeBox from "@/components/Home/TheWelcomeBox.vue";
import TheSeoContent from "@/components/Home/TheSeoContent.vue";

export default {
  name: "Home",
  
  components: {
    TheWelcomeBox, TheSeoContent
  },

  data() {
    return {
      homeContent: this.allContent.home
    }
  },

  props: {
    allContent: {
      type: Object,
      required: true
    }
  }
}
</script>

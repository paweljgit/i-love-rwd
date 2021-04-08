<template>
<div>
  <TheFirstMockupSet 
    :device="device"
    :siteUrl="siteUrl"
    :content="this.submitedUrlContent.firstMockupSet"
  />
  <ScrollSign />
  <TheAllMockups 
    :device="device"
    :siteUrl="siteUrl"
    :content="this.submitedUrlContent.allMockups"
  />
</div>
</template>

<script>
import DevicesData from "@/assets/data/devices.json";
import TheFirstMockupSet from "@/components/SubmitedUrl/TheFirstMockupSet.vue";
import ScrollSign from "@/components/ui/ScrollSign.vue";
import TheAllMockups from "@/components/SubmitedUrl/TheAllMockups.vue";

export default {
  name: "Url",

  data() {
    return {
      device: DevicesData,
      siteUrl: this.$route.params.siteUrl,
      submitedUrlContent: this.allContent.submitedUrl
    }
  },
  
  props: {
    allContent: {
      type: Object,
      required: true
    }
  },

  components: {
    TheFirstMockupSet, ScrollSign, TheAllMockups
  }
}
</script>

<template>
<div class="complete-set">
  <div class="complete-set__phone">
    <MobileDevice 
      :siteUrl="this.siteUrl" 
      :device="this.device.phone" 
      :isStatic="true"
      :scaleValue="0.15"
    />
  </div>
  <div class="complete-set__tablet">
    <MobileDevice 
      :siteUrl="this.siteUrl" 
      :device="this.device.tablet" 
      :isStatic="true"
      :scaleValue="0.15"
    />
  </div>
  <div class="complete-set__laptop">
    <Laptop 
      :siteUrl="this.siteUrl" 
      :device="this.device.laptop" 
      :isStatic="true"
      :scaleValue="0.15"
    />
  </div>
</div>
</template>

<script>
import MobileDevice from "@/components/SubmitedUrl/MobileDevice.vue";
import Laptop from "@/components/SubmitedUrl/Laptop.vue";


export default {
  name: "CompleteSetOfDevices",
  components: {
    MobileDevice, Laptop
  },
  data() {
    return {
    }
  },
  props: {
    device: {
      type: Object,
      required: true
    },
    siteUrl: {
      type: String,
      required: true
    }
  },
  methods: {
  }
}
</script>


<style scoped lang="scss">

.complete-set {
  display: block;
  height: 240px;
  width: 510px;
  position: relative;
  margin: 0px auto;

  @media (max-width: 620px ) {
    width: 100%;
  }

  &__phone, &__tablet, &__laptop {
    position: absolute;
  }

  &__phone {
    top: 100px;
    left: 0px;
    z-index: 4;
  }

  &__tablet {
    top: 50px;
    right: 0px;
    z-index: 3;
  }

  &__laptop {
    top: 0px;
    left: 50px;
    z-index: 2;

    @media (max-width: 470px ) {
      left: -25px;
    }
  }
}
</style>

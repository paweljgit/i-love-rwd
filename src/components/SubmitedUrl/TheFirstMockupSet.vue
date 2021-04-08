<template>
<div class="full-height-wrapper full-height-wrapper__mockup-set">
  <div class="mockup-set base-box">
    <div class="mockup-set__logo-wrapper">
      <a href="/"><Logo /></a>
    </div>
    <div class="mockup-set__body">

      <div class="left-wrapper">
        <p><b style="color:black">{{ content.title }}</b></p>
        <p>{{ content.info1 }} {{ siteUrl }}. <br>
        {{ content.info2 }} <a href="/">{{ content.info3 }}</a>.</p>
        <div class="mockup-set__buttons">
          <DeviceButton 
            v-bind:activeDevice="this.activeDevice"
            v-bind:device="this.device.phone"
            @changeDevice="changeDevice"
            @rotateDevice="rotateDevice"
          />
          <DeviceButton 
            v-bind:activeDevice="this.activeDevice"
            v-bind:device="this.device.tablet"
            @changeDevice="changeDevice"
            @rotateDevice="rotateDevice"
          />
          <DeviceButton 
            v-bind:activeDevice="this.activeDevice"
            v-bind:device="this.device.laptop"
            @changeDevice="changeDevice"
          />
        </div>
      </div>
      <div class="mockup-set__mockups">
        <MobileDevice 
          v-if="this.activeDevice === 'phone'"
          :siteUrl="this.siteUrl" 
          :device="this.device.phone" 
          :scaleValue="0.5"
        />
        <MobileDevice 
          v-if="this.activeDevice === 'tablet'"
          :siteUrl="this.siteUrl" 
          :device="this.device.tablet" 
          :scaleValue="0.35"
        />
        <Laptop 
          v-if="this.activeDevice === 'laptop'"
          :siteUrl="this.siteUrl" 
          :device="this.device.laptop" 
          class="mockup-set__mockups--laptop"
        />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Logo from "@/components/ui/Logo.vue";
import DeviceButton from "@/components/ui/DeviceButton.vue";
import Laptop from "@/components/SubmitedUrl/Laptop.vue";
import MobileDevice from "@/components/SubmitedUrl/MobileDevice.vue";


export default {
  name: "MockupSet",
  components: {
    Logo, Laptop, MobileDevice, DeviceButton
  },
  data() {
    return {
      activeDevice: 'phone'
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
    },
    content: {
      type: Object,
      required: true
    }
  },
  methods: {
    rotateDevice(device) {
      let deviceName = device.name
      this.device[`${deviceName}`].isRotated = !this.device[`${deviceName}`].isRotated;
    },
    changeDevice(device) {
      this.activeDevice = device.name;
    }
  }
}
</script>

<style scoped lang="scss">

.full-height-wrapper__mockup-set {
  @media (max-width: 750px ) {
    height: auto;
  }
}

.mockup-set {
  @media (max-width: 750px ) {
    margin-top: 20px;
    margin-bottom: 50px;
  }

  &__logo-wrapper {
    background-color: white;
    color: #000;
    padding-right: 50%;
    border-radius: var(--base-border-radius);

    @media (max-width: 750px ) {
      padding-right: 0%;
    }

    a {
      text-decoration: none;
      color: black;
    }
  }

  &__body {
    padding: var(--base-padding);
    display: flex;
    height: 200px;

    @media (max-width: 750px ) {
      flex-direction: column;
      height: auto;
    }
  }

  &__buttons {
    display: flex;
    flex-wrap: wrap;
  }

  .left-wrapper {
    width: 50%;
    font-size: 12px;
    color: rgb(179, 179, 179);
    
    @media (max-width: 750px ) {
      width: 100%;
    }
  }

  &__mockups {
    width: 50%;
    margin-top: -175px;

    @media (max-width: 750px ) {
      width: 100%;
      margin-top: 40px;
      margin-bottom: 40px;
      margin-left: -10px;
    }

    &--laptop {
      margin-top: 75px;

      @media (max-width: 750px ) {
        margin-top: 0px;
        margin-left: -30px;
      }
    }
  }
}
</style>

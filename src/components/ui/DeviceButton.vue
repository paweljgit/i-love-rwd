<template>
<button class="device-button button" @click="buttonAction">
  <img v-if="canRotate" src="~@/assets/rotate-icon.svg" id="button-icon">
  <span>{{ getName }}</span>
</button>
</template>

<script>
export default {
  name: "DeviceButton",
  
  data() {
    return {
      canRotate: this.device.isRotated !== undefined,
    }
  },

  props: {
    activeDevice: String,
    device: Object
  },
  computed: {
    getName() {
      if (this.device.customName == undefined) {
        return this.device.name
      } else {
        return this.device.customName
      }
    }
  },
  methods: {

    buttonAction() {

      if (this.activeDevice === this.device.name) {

        if (this.device.isRotated !== undefined) {
          this.$emit('rotateDevice', this.device)
        }

      } else {
        this.$emit('changeDevice', this.device)
      }

    }
  }
}
</script>


<style scoped lang="scss">

.device-button {
display: flex;
flex-direction: row;
align-items: center;
margin-bottom: 10px;

  &:hover #button-icon {
    transform: rotate(90deg);
  }

  img {
    transition: all 0.5s ease-out;
    margin-right: 5px;
  }
}
</style>

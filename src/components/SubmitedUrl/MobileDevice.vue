<template>
<div 
  class="device-mockup" 
  :class="getDeviceClass" 
  :style="getDeviceStyle"
>
  <iframe 
    class="device-mockup__screen" 
    :style="getScreenStyle" 
    :src="siteUrl" 
    loading="lazy"
    allowtransparency="false"
  >
    Browser unable to load ...
  </iframe>
</div>
</template>


<script>
export default {
  name: 'MobileDevice',

  props: {
    siteUrl: {
      type: String,
      required: true,
      default: ''
    },
    scaleValue: {
      type: Number,
      required: false,
      default: 0.5
    },
      isStatic: {
      type: Boolean,
      required: false,
      default: false
    },
    device: {
      type: Object,
      required: true,
      default: function() {
        return {
          screenRatioHeight: 16,
          screenRatioWidth: 9,
          screenWidth: 400,
          topPadding: 10,
          leftPadding: 10,
          rightPadding: 10,
          bottomPadding: 55,
          borderRadius: 15,
          isRotated: false
        }
      }
    }
  },

  computed: {

    getScreenHeight() {
      let screenRatio = this.device.screenRatioHeight / this.device.screenRatioWidth;
      let screenHeight = this.device.screenWidth * screenRatio;
      return screenHeight
    },

    getDeviceBorderRadius() {
      let borderRadius = this.device.borderRadius * this.scaleValue;
      return borderRadius
    },

    getDeviceStyle() {
      let widthPadding = this.device.leftPadding + this.device.rightPadding;
      let deviceWidth = (this.device.screenWidth + widthPadding) * this.scaleValue;
      let heightPadding = this.device.topPadding + this.device.bottomPadding;
      let deviceHeight = (this.getScreenHeight + heightPadding) * this.scaleValue;

      return `
      height: ${deviceHeight}px;
      width: ${deviceWidth}px;
      border-radius: ${this.getDeviceBorderRadius}px;
      `
    },

    getDeviceClass() {
      return 'device-mockup ' +
      (this.device.isRotated && !this.isStatic ? 'device-mockup--rotated' : '')
      +
      (this.device.isRotated && this.isStatic ? 'device-mockup--static-rotated' : '')
      +
      (!this.device.isRotated && this.isStatic ? 'device-mockup--static' : '')
    },

    getScreenStyle() {
      let top = this.device.topPadding * this.scaleValue;
      let left = this.device.leftPadding * this.scaleValue;
      let rotatedLeft = (this.device.screenWidth + this.device.leftPadding) * this.scaleValue
  
      return (
      !this.device.isRotated ? 
      `
      height: ${this.getScreenHeight}px; 
      width: ${this.device.screenWidth}px; 
      transform: scale(${this.scaleValue});
      left: ${left}px;
      `
      : 
      `
      height: ${this.device.screenWidth}px; 
      width: ${this.getScreenHeight}px;
      transform: scale(${this.scaleValue}) rotate(90deg);
      left: ${rotatedLeft}px;
      `
      ) + 
      `
      top: ${top}px;
      border-radius: ${this.device.borderRadius}px;
      `   
    }
  }
}
</script>


<style scoped lang="scss">

.device-mockup {
  margin: 0px auto;
  background-color: #000;
  overflow: hidden;
  transition: 0.5s ease-in-out;
  transform: perspective(1000px) rotateX(4deg) rotateY(-16deg) rotateZ(4deg);

  &:hover, &--static {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }

  &--rotated {
    transform: perspective(1000px) rotateX(4deg) rotateY(-16deg) rotateZ(-90deg);
  }

  &--rotated:hover, &--static-rotated {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(-90deg);
  }

  &__screen {
    position: relative;
    transform-origin: top left;
    border: none;
    display: block;
    background: url('~@/assets/calm.svg') center/50% no-repeat darkgrey;
    -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
  }
}
</style>

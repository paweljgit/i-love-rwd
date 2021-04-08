<template>
<div>
  <div class="laptop-mockup" 
    :style="getMockupStyle"
  >
    <div class="laptop"
      :style="getLaptopStyle"
    >
      <div class="laptop--cover"
        :style="getLaptopStyle"
      >
        <iframe class="laptop--screen" 
          :style="getLaptopScreenStyle"
          :src="siteUrl"
          loading="lazy"
        >
        Browser unable to load ...
        </iframe>
      </div>
      <div class="laptop--keyboard"
        :style="getLaptopStyle"
      >
        <div class="keyboard-key"></div>      
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>      
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>      
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>      
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>      
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>      
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>      
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>      
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>         
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>      
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>      
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>      
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>      
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>      
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>      
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>      
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>      
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>      
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>      
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>      
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>      
        <div class="keyboard-key"></div>
        <div class="keyboard-key"></div>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'laptop',
  props: {
    siteUrl: {
      type: String,
      required: true,
      default: ''
    },
    isStatic: {
      type: Boolean,
      required: false,
      default: false
    },
    scaleValue: {
      type: Number,
      required: false,
      default: 1
    },
    device: {
      type: Object,
      required: true,
      default: function() {
        return {
          width: 350,
          height: 206,
          screenWidth: 1280,
          screenHeight: 720
        }
      }
    }
  },

  computed: {
    getMockupStyle() {
      return this.getLaptopStyle + (
      this.isStatic ? 
      `transform: none`
      :
      ``
      )
    },

    getLaptopStyle() {
      return `
      height: ${this.device.height}px; 
      width: ${this.device.width}px;
      `
    },

    getLaptopScreenStyle() {
      let scaleCalculated = (this.device.width-20) / this.device.screenWidth;
      let rounded = Math.ceil(scaleCalculated * 10000) / 10000;

      return `
      height: ${this.device.screenHeight}px; 
      width: ${this.device.screenWidth}px;
      transform: scale(${rounded});
      `
    }
  }
}
</script>


<style scoped lang="scss">

.laptop-mockup {
  margin: 0px auto;
  perspective: 600px;
  transition: 0.5s ease-in-out;
  transform: perspective(1000px) rotateX(0deg) rotateY(-20deg) rotateZ(0deg);

  &:hover {
    transform: none;
  }
}

.laptop {
  position: relative;
  transform-style: preserve-3d;
  transform: rotateX(-5deg);
  
  &--cover {
    position: absolute;
    border-radius: 10px;
    border: 2px solid black;
    transform: rotateY(0deg) translateZ(-112px);
    background: hsl(0, 0%, 25%);
  }

  &--screen {
    display: block;
    position: relative;
    top: 10px;
    left: 10px;
    transform-origin: top left;
    border: none;
    background: url('~@/assets/calm.svg') center/300px no-repeat darkgrey;
  }

  &--keyboard {
    position: absolute;
    border-radius: 10px;
    background: hsl(0, 0%, 0%);
    transform: rotateX(90deg) translateZ(-100px);
    padding: 20px;
  }
}

.keyboard-key {
  display: inline-block;
  background-color: rgb(43, 43, 43);
  width: 15px;
  height: 20px;
  margin: 2px;
}
</style>

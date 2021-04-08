<template>
<div 
  :class="{'scroll-sign--unpinned': scrolled}"  
  v-on="handleScroll()" 
  class="scroll-sign"
>
  <div class="scroll-sign__triangle"></div>
</div>
</template>

<script>

export default {
  name: "ScrollSign",

  data() {
    return {
      limitPosition: 10,
      scrolled: false,
      lastPosition: 0
    }
  },

  methods: {
    handleScroll() {
      if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
        this.scrolled = true;
      }       
      if (this.lastPosition > window.scrollY) {
        this.scrolled = false;
      }
      this.lastPosition = window.scrollY;
    }
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  
}

</script>

<style lang="scss" scoped>

.scroll-sign {
  position: fixed;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, -50%); 
  height: 38px; 
  width: 76px; 
  border-radius: 38px 38px 0 0; 
  background-color: rgba(255, 255, 255, 0.459);
  display: flex;
  justify-content: center;
  align-items: center;
  will-change: transform;
  transition: transform 200ms linear;
  transform: translateY(0%);
  z-index: -1;

  &--unpinned {
    transform: translateY(100%);
  }

  &__triangle {
    width: 0;
    height: 0;
    margin-top: 6px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 12px solid rgb(231, 231, 231);
    
  }
}

</style>
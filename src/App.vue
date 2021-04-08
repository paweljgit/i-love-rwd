<template>
<div>
  <router-view :allContent="this.allContent" />
  <Footer :content="this.allContent.footer" />
</div>
</template>

<script>
import Footer from "@/components/ui/Footer.vue";
import Content from "@/assets/data/content.json";

export default {
  components: {
    Footer
  },
  data () {
    return {
      allContent: Content.eng
    }
  }   
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,500;0,700;1,400&display=swap');

:root {
  --base-padding: 25px 50px;
  --base-border-radius: 25px;
  --base-max-width: 820px;
  --base-width: 95%;
  --base-top-margin: 50px;

  @media (max-width: 992px ) {
   --base-padding: 15px 25px;
  }
}

* {
  box-sizing: border-box;
}

html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

body {
  margin: 0px;
  padding: 0px 10px;
  background: rgb(92,37,141);
  background: -moz-linear-gradient(90deg, rgba(92,37,141,1) 0%, rgba(67,137,162,1) 100%);
  background: -webkit-linear-gradient(90deg, rgba(92,37,141,1) 0%, rgba(67,137,162,1) 100%);
  background: linear-gradient(90deg, rgba(92,37,141,1) 0%, rgba(67,137,162,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#5c258d",endColorstr="#4389a2",GradientType=1);
  font-family: 'Ubuntu', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: #5B5B5B;
}

.button {
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 7px;
  border: solid 2px #96DC00;
  background-color: #FFF;
  color: #000;
  margin-right: 10px;
  transition: 0.3s;

  &:hover {
  transition: all 0.5s ease-out;
  background: rgb(231,238,220);
  background: linear-gradient(329deg, rgba(231,238,220,1) 0%, rgba(255,255,255,1) 100%);
  }

  &:active {
  border: solid 2px #78af00;
  }

  &:focus {
  outline-style: none;
  }

}

.full-height-wrapper {
  height: 100vh;
  display: flex;
  align-items: center;

  @media (max-width: 750px ) {
    align-items: flex-start;
  }
}

.base-box {
  background: #f2f2f2;
  background: linear-gradient(0deg, #ffffff, #f2f2f2);
  margin: 0px auto;
  border-radius: var(--base-border-radius);
  width: var(--base-width);
  max-width: var(--base-max-width);
}

</style>

<template>
<div class="full-height-wrapper">
    <div class="base-box">
      <div class="logo-wrapper">
        <Logo />
      </div>
      <div class="welcome">      
        <p class="welcome__header">
          {{ content.title }}
        </p>
        <form @submit.prevent="submitUrl" method="post" class="form">
          <input 
            type="url" 
            pattern="http(s?)(:\/\/).*"
            required
            v-model="adresTypedByUser"
            placeholder="https://iloverwd.com/" 
            class="form__input"
          >
          <input type="submit" 
            class="form__button button" 
            :class="basicValidation" 
            :value="content.formButton"
          >
        </form>
        <p class="welcome__info" v-html="content.info">
        </p>
      </div>
    </div>
</div>
</template>


<script>
import Logo from "@/components/ui/Logo.vue";

export default {
  name: "TheWelcomeBox",

  components: {
    Logo
  },

  props: {
    content: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      adresTypedByUser: ''
    }
  },

  methods: {
    submitUrl() {
      let adresEncoded = encodeURIComponent(this.adresTypedByUser);
      this.$router.push(`/url/${adresEncoded}`);   
    }
  },

  computed: {
    basicValidation() {
      const adres = this.adresTypedByUser;
      const regex = /https?:\/\/.+\..{2,}/;
      if (adres.match(regex)) {
        return ''
      } else {
        return 'form__button--inactive'
      }
    }
  }
}
</script>


<style scoped lang="scss">

.logo-wrapper {
  background-color: white;
  color: #000;
  border-radius: var(--base-border-radius);
}

.welcome {
  padding: var(--base-padding);
  width: 100%;

  &__header {
    color:black;
    font-weight: bold;
    text-align: center;

    @media (max-width: 500px ) {
      width: 70%;
      margin: 0 auto;
    }

  }

  &__info {
    font-size: 12px;
    color: rgb(179, 179, 179)
  }
} 

.form {
  margin: 0 auto;
  width: fit-content;
  margin-bottom: 25px;

  &__input {
    font-family: 'Ubuntu', sans-serif;
    background-color: transparent;
    border: none;
    border-bottom: solid 2px black;
    padding: 10px 20px;
    width: 275px;
    margin-right: 10px;

    @media (max-width: 500px ) {
      width: 100%;
      margin-bottom: 20px;
    }

  }

  &__input:focus {
    outline-style: none;
    box-shadow: 0 4px 6px -6px #222;
  }

  &__button {
      
      @media (max-width: 500px ) {
        width: 100%;
        margin-bottom: 20px;
    }
  }

  &__button--inactive {
    background-color: rgb(231, 231, 231);
    color: rgb(134, 134, 134);
    border-color: rgb(145, 145, 145);

    &:hover {
    background: rgb(231, 231, 231);
    color: rgb(134, 134, 134);
    border-color: rgb(145, 145, 145);
    }
  }
}
</style>

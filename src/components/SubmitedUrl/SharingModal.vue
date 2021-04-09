<template>
  <div class="modal__mask">
    <div class="modal">
      <button 
        class="modal__close-button"
        @click="$emit('sharingModalToggle')">X</button>
      <p>{{ content.title }}</p>
      <input 
        class="modal__input" 
        :value="currenUrl" 
        id="modalInput"
        readonly="readonly">
      <button 
        class="modal__copy-button"
        @click="copyPath">{{ content.modalButton }}</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "SharingModal",
  data() {
    return {
      currenUrl: location.toString()
    }
  },
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  methods: {

    copyPath() {
      const modal = document.getElementById('modalInput');
      modal.select();

      try {
        document.execCommand('copy');
        alert(this.content.doneAlert);
        this.$emit('sharingModalToggle')
      } catch (err) {
        alert(this.content.errorAlert);
      }
    }

  }
}
</script>


<style scoped lang="scss">

.modal {
  background-color: rgb(255, 255, 255);
  padding: 30px 50px;
  height: fit-content;
  border-radius: 15px;
  width: 40%;
  position: relative;

  & p {
    margin-top: 0px;
  }

  &__mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.788);
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s ease;
  }

  &__input, &__copy-button {
    padding: 10px;
  }

  &__input {
    display: inline-block;
    width: 60%;
    margin-right: 10px;
  }

  &__close-button {
    background-color: black;
    color: white;
    font-weight: bold;
    height: 30px;
    width: 30px;
    border-radius: 15px;
    display: block;
    position: absolute;
    right: -15px;
    top: -15px;
    border: none;
  }
}
</style>

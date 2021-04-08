<template>
  <div class="box base-box">
    <SharingModal 
      v-if="sharingModal" 
      @sharingModalToggle="sharingModalToggle" 
      :content="content.sharingModal"
    />
    <div class="box-header">
      <div>
        <Logo class="box-header__logo" />
        <span>{{ siteUrl }}</span>
      </div>
      <div>
        <button @click="sharingModalToggle" class="sharing-button">{{ content.sharingButton }}</button>
      </div>
    </div>
    <div class="box__main">      
      <CompleteSetOfDevices 
        :siteUrl="this.siteUrl" 
        :device="this.device"
      />
      <div v-html="content.content">
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/ui/Logo.vue";
import CompleteSetOfDevices from "@/components/SubmitedUrl/TheCompleteSetOfDevices.vue";
import SharingModal from "@/components/SubmitedUrl/SharingModal";

export default {
  name: "TheAllMockups",
  components: {
    Logo, CompleteSetOfDevices, SharingModal
  },
  data() {
    return {
      sharingModal: false
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
    sharingModalToggle() {
      this.sharingModal = !this.sharingModal
    }
  }
}
</script>


<style scoped lang="scss">

.box {

  .box-header {
    background-color: white;
    color: #000;
    border-radius: var(--base-border-radius);
    padding: var(--base-padding);
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__logo {
      font-size: 36px;
      text-align: left;
      margin: 0;
    }
  }

  &__main {
    padding: var(--base-padding);
  }
}

.sharing-button {
  display: inline;
  border: none;
  background: transparent;
  text-decoration: underline;
  cursor: pointer;
}
</style>

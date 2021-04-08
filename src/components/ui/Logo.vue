<template>
<div class="logo">
  I <span class="heart">♥</span> RWD
</div>
</template>

<script>
export default {
  name: "Logo",
}
</script>


<style scoped lang="scss">

.logo {
  margin: 0 auto;
  font-size: 72px;
  font-weight: 900;
  width: fit-content;
  color: black;

  @media (max-width: 500px ) {
    font-size: 50px;
  }
}

.heart {
  color: rgb(241, 0, 0);
  font-size: 85%;
}
</style>

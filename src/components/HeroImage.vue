<template>
    <div class="heroImage"></div>
</template>

<script>
export default {
  name: 'HeroImage',
};
</script>

<style scoped>
  .heroImage{
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: -1;
    background-image: url(../assets/spacex.jpg);

    background-repeat: no-repeat ;
    background-size: cover;
    background-position: 55% 0;
    filter: brightness(190%);
  }

</style>

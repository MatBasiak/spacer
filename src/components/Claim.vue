<template>
  <div class="claimWrapper">
    <h1 class="claim">Spacer</h1>
    <p class="subclaim">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </p>
    <p class="subclaim">
      Type anything space ralated to start
    </p>
  </div>
</template>

<script>
export default {
  name: 'Claim',
};
</script>

<style lang="scss" scoped>
  .claimWrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: aliceblue;
  }
  .claim{
    font-size: 50px;
    text-transform: uppercase;
    margin: 0;

    @media(min-width: 768px){
      font-size: 80px;
    }
    @media(min-width: 1024px){
      font-size: 100px;
    }
  }
  .subclaim{
    margin: 25px 0 0 0;
    font-size: 15px;
    font-weight: 400;
    @media(min-width: 768px){
      width: 500px;
      font-size: 17px;
      letter-spacing: 1px;
      line-height: 1;
    }
  }
</style>

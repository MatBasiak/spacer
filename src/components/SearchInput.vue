<template>
    <input
      id="search"
      name="search"
     :value="value"
      @input="handleChange"
      :class="{dark}"
    />
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    value: {
      type: String,
      required: true,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleChange(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
  input {
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    width: 250px;
    color: white;
    text-align: center;
    font-size: 20px;
    font-weight: 200;
    text-transform: uppercase;
    height: 60px;
    border: 0;
    background: none;
    border-bottom: 1px solid white;
    transition: box-shadow .3s ease-out;
    @media (min-width: 1024px) {
      font-weight: 400;
    }
  }
  input:focus{
    outline: none;
    box-shadow: 0 10px 17px -9px rgba(255,255,255, .5);
  }
  .dark{
    color:#1e3d4a;
    border-bottom-color:#1e3d4a ;

  }
  dark:focus{
    outline: none;
    box-shadow: 0 10px 17px -9px (#1e3d4a .5);
  }

</style>

<template>
  <div id="login" class="box has-text-centered">
    <h2 class="title">Fullstack Clothing</h2>
    <button
      @click="login"
      :class="[{ 'is-loading': loading }, 'button is-primary']"
    >
      Login
    </button>
  </div>
</template>

<script>
export default {
  name: "LoginBox",
  methods: {
    login() {
      this.$store.dispatch("login").then(() => this.$router.push("/products"));
    },
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },
};
</script>

<style scoped>
.box {
  padding: 30px;
}
</style>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapGetters([
      // Just like how store state should never be mutated directly,
      // store state properties should never be watched directly.
      "token",
      "cartQuantity",
    ]),
  },
  created() {
    const token = localStorage.getItem("token");
    if (token) {
      this.updateInitialState(token);
    }
  },
  watch: {
    token() {
      if (this.token) {
        this.updateInitialState(this.token);
      }
    },
  },
  methods: {
    logout() {
      this.$store
        .dispatch("logout")
        .then(() => this.$router.push("/login"))
        .catch(console.log);
    },
    updateInitialState(token) {
      this.$store.dispatch("getCartItems", token);
      this.$store.dispatch("getProductItems", token);
    },
  },
};
</script>

<template>
  <div v-if="$route.path !== '/login'" class="navigation-buttons">
    <button @click="logout" class="button is-text is-pulled-left">
      Logout
    </button>
    <div class="is-pulled-right">
      <router-link to="/products" class="button"
        ><i class="fa fa-user-circle"></i><span>Shop</span>
      </router-link>
      <router-link to="/cart" class="button is-primary">
        <i class="fa fa-shopping-cart"></i><span>{{ cartQuantity }}</span>
      </router-link>
    </div>
  </div>
  <div class="container">
    <div class="columns">
      <div class="column is-6 column--align-center">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style>
html,
body {
  background: #f2f6fa;
}

#app {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 100%;
}

.column--align-center {
  margin: 0 auto;
}

.navigation-buttons {
  position: absolute;
  top: 5px;
  width: 99%;
  z-index: 99;
}

.navigation-buttons .button {
  margin: 0 2px;
}

.navigation-buttons .button .fa {
  padding-right: 5px;
}
</style>

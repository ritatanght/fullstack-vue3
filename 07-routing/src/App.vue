<script>
export default {
  name: "App",
};
</script>

<template>
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

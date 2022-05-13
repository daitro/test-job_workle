<template>
  <div id="app"><Home /></div>
</template>

<script>
import Home from "./pages/Home.vue";
export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap");

#app {
  font-family: "Roboto Condensed", sans-serif;
}
</style>

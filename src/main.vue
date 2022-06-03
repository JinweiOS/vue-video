<template>
  <div class="container">
    <BgVideo />
  </div>
</template>

<script>
import BgVideo from "./components/bg-video.vue";
export default {
  components: {
    BgVideo,
  },
  name: "App",
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
.container {
  height: 100%;
}
</style>

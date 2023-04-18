<script setup>
import { useUserStore } from './stores/UserStore.js';

useUserStore().initialize(window.location.pathname);
</script>

<template>
  <router-view />
</template>

<style lang="scss">
@import "./styles/global.scss";
@import "tippy.js/dist/tippy.css";
@import "tippy.js/themes/light.css";
@import "tippy.js/animations/shift-away.css";
@import "tippy.js/dist/svg-arrow.css";
</style>

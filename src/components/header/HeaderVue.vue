<template>
  <div class="home-header">
    <HeaderLogo />
    <HeaderProfile />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import HeaderLogo from "@/components/header/atoms/HeaderLogo.vue";
import HeaderProfile from "@/components/header/atoms/HeaderProfile.vue";

@Options({
  name: "HeaderVue",
  components: {
    HeaderProfile,
    HeaderLogo
  }
})
export default class HeaderVue extends Vue {
}
</script>

<style scoped>
.home-header {
  background-color: #909090;
  display: flex;
  min-height: 48px;
  height: 8vh;
  max-height: 96px;
  width: 100%;
}
</style>

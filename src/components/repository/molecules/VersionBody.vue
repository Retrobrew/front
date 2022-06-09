<template>
  <div class="version-card-body">
    <VersionNumber :version="versionNumber"/>
    <VersionButton />
    <VersionLanguage :language="versionLanguage"/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import VersionNumber from "@/components/repository/atoms/VersionNumber.vue";
import VersionButton from "@/components/repository/atoms/VersionButton.vue";
import VersionLanguage from "@/components/repository/atoms/VersionLanguage.vue";

@Options({
  name: "VersionBody",
  components: {VersionLanguage, VersionButton, VersionNumber},
  props: {
    versionNumber: String,
    versionLanguage: String,
  }
})
export default class VersionBody extends Vue {
}
</script>

<style scoped>
.version-card-body {
  display: flex;
  justify-content: space-between;
  margin: 4px 16px;
}
</style>

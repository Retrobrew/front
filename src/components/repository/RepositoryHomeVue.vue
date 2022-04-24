<template>
  <div class="main-vue">
    <RepositoryVersionVue />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import RepositoryVersionVue from "@/components/repository/RepositoryVersionVue.vue";

@Options({
  name: "RepositoryHomeVue",
  components: {RepositoryVersionVue},
})
export default class RepositoryHomeVue extends Vue {
}
</script>

<style scoped>

</style>

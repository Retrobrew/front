<template>
  <div class="main-vue">
    <RepositoryVersionVue
        :group="group"
    />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import RepositoryVersionVue from "@/components/repository/RepositoryVersionVue.vue";
import {Group} from "@/object/Group";

@Options({
  name: "RepositoryHomeVue",
  components: {RepositoryVersionVue},
  props: {
    group: Group
  }
})
export default class RepositoryHomeVue extends Vue {
}
</script>

<style scoped>

</style>

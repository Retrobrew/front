<template>
  <div class="lib-list">
    <LibListItem v-for="(lib, index) in libs" :key="index" :lib="lib" :project-id="projectId" />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import LibListItem from "@/components/library/lib-list/atoms/LibListItem.vue";

@Options({
  components: {
    LibListItem,
  },
  props: {
    libs: {
      type: Array,
      required: true
    },
    projectId: {
      type: String,
      required: true
    }
  }
})
export default class LibList extends Vue {
}
</script>

<style scoped>
.lib-list {
  background-color: #FFFFFF;
  border-radius: 8px;
  margin: 8px;
}
</style>

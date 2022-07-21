<template>
  <LibListTitle />
  <LibListDescription />
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import LibListDescription from "@/components/library/lib-list/atoms/LibListDescription.vue";
import LibListTitle from "@/components/library/lib-list/atoms/LibListTitle.vue";

@Options({
  components: {
    LibListTitle,
    LibListDescription,
  }
})
export default class LibListHead extends Vue {
}
</script>

<style scoped>

</style>

<template>
  <div class="main-vue container lib-list-card">
    <LibListHead />
    <hr class="lib-list-delimiter"/>
    <LibList :libs="libs" :project-id="group.uuid"/>
    <div class="lib-list-foot-limit" />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import ProjectController from "@/controller/ProjectController";
import {LibItem} from "@/object/LibItem";
import LibListHead from "@/components/library/lib-list/molecules/LibListHead.vue";
import LibList from "@/components/library/lib-list/molecules/LibList.vue";
import {Group} from "@/object/Group";

@Options({
  components: {
    LibList,
    LibListHead,
  },
  props: {
    group: {
      type: Group,
      required: true,
    }
  }
})
export default class LibListVue extends Vue {
  private libs: LibItem[] = [];

  mounted() {
    ProjectController.getLibs()
      .then((res: string) => {
        res = JSON.stringify(res);
        for (const item in JSON.parse(res)) {
          const lib = JSON.parse(res)[item];
          this.libs.push(new LibItem(lib.uuid, lib.name, lib.description));
        }
      });
  }
}
</script>

<style scoped>
.lib-list-card {
  background-color: #F0F0F0;
  border-radius: 8px;
}
.lib-list-delimiter {
  color: #000000;
  margin: 12px;
}
.lib-list-foot-limit {
  height: 8px;
}
</style>

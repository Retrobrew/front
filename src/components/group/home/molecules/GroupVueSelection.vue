<template>
  <div class="group-vue-selector">
    <button class="btn btn-primary" @click="this.setAndEmitGroupVue('feed')">Feed</button>
    <button v-if="isProject" class="btn btn-primary" @click="this.setAndEmitGroupVue('project')">Project</button>
    <button v-if="isProject" class="btn btn-primary" @click="this.setAndEmitGroupVue('repository')">Repository</button>
    <button v-if="isProject" class="btn btn-primary" @click="this.setAndEmitGroupVue('library')">Import Library</button>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {Emit} from "vue-property-decorator";

@Options({
  name: "GroupVueSelection",
  props: {
    isProject: Boolean
  }
})
export default class GroupVueSelection extends Vue {
  private groupVue: String = "feed";

  setAndEmitGroupVue(vue: String) {
    this.groupVue = vue;
    this.returnGroupVue();
  }

  @Emit('groupVue')
  returnGroupVue() {
    return this.groupVue;
  }
}
</script>

<style scoped>
.group-vue-selector {
  background-color: #FFFFFF;
  text-align: center;
  margin: 12px auto;
}
</style>

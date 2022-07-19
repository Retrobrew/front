<template>
  <div class="lib-list-lib-item">
    <div class="lib-list-lib-item-info">
      <p class="lib-list-lib-item-info-title">{{lib.name}}</p>
      <p class="lib-list-lib-item-info-description">{{lib.description}}</p>
    </div>
    <button type="button" class="btn btn-outline-info lib-list-lib-item-button" v-on:click="importLib">Import</button>
  </div>
</template>

<script lang="ts">
import {Options, Vue, prop} from "vue-class-component";
import {LibItem} from "@/object/LibItem";
import ProjectController from "@/controller/ProjectController";

class Props {
  lib: LibItem = prop({
    required: true,
  });
  projectId: string = prop({
    required: true,
  });
}

@Options({
})
export default class LibListItem extends Vue.with(Props) {

  private importLib = () => {
    ProjectController.importLibrary(this.projectId, this.lib.id)
        .then(_ => {
          //  console.log(res);
        }).catch(err => {
      alert("Impossible to import library: " + err);
    });
  }
}
</script>

<style scoped>
.lib-list-lib-item {
  display: flex;
  flex-direction: row;
  padding: 8px;
}
.lib-list-lib-item-info {
  display: flex;
  flex-direction: column;
  width: 90%;
}
.lib-list-lib-item-info-title {
  color: black;
  font-size: 1.2em;
  margin: 0;
  padding: 0;
}
.lib-list-lib-item-info-description {
  color: #828282;
  font-size: 0.8em;
  margin: 0;
  padding: 0;
}
.lib-list-lib-item-button {
  margin: auto;
}
</style>

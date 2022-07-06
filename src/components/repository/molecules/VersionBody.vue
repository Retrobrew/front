<template>
  <div class="">
    <div class="version-card-body">
      <VersionNumber :version="versionNumber"/>
      <VersionLanguage :language="versionLanguage"/>
    </div>
    <div class="card m-3">
      <div class="card-header">
        <div class="mb-0 font-weight-bold text-center h4">Edit Files</div>
      </div>
        <div id="tree" class="list-group list-group-root well shadow-sm"></div>
    </div>
    <div class="m-3">
      <div>
        <button
            v-on:click="$emit('new-file')"
            class="btn btn-primary m-1">
          New file
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import VersionNumber from "@/components/repository/atoms/VersionNumber.vue";
import VersionButton from "@/components/repository/atoms/VersionButton.vue";
import VersionLanguage from "@/components/repository/atoms/VersionLanguage.vue";
import {TreeNode} from "@/object/TreeNode";
import ProjectController from "@/controller/ProjectController";

@Options({
  name: "VersionBody",
  components: {VersionLanguage, VersionButton, VersionNumber},
  props: {
    versionNumber: String,
    versionLanguage: String,
    projectId: {
      type: String,
      required: true
    }
  }
})
export default class VersionBody extends Vue {
  private files: Array<TreeNode> = [];
  private selectedFile = "";
  //Prop
  projectId!: string;

  mounted() {
    ProjectController.getProjectTree(this.projectId)
        .then(res => {
          this.files = res;
          const div = document.getElementById("tree");
          if(!div){
            return;
          }

          this.displayFiles(this.files, div);
        })

  }

  private displayFiles (files: Array<TreeNode>, parentNode: HTMLElement) {
    files.forEach((item:TreeNode) => {
      let name = item.name;
      if(name.length === 0) {
        name = "src"
      }

      const link = document.createElement('a');
      link.href = '#';
      link.classList.add('list-group-item');
      link.innerHTML = name;
      link.addEventListener('click', this.selectFile.bind(this))
      parentNode.appendChild(link);

      if(item.children.length > 0) {
        link.classList.add('disabled')

        //Création du parent
        const div = document.createElement('div');
        div.classList.add('list-group')
        this.displayFiles(item.children, div);
        parentNode.appendChild(div);
      }

    })
  }

  private selectFile(event: Event) {
    event.preventDefault()
    if(!event.target){
      return
    }

    //retrouve l'ancien a selectionné
    const xpath = `//a[text()='${this.selectedFile}']`;
    const previousA = document.evaluate(
        xpath,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
    ).singleNodeValue as HTMLElement;

    if(previousA){
      previousA.classList.remove("font-weight-bold");
    }

    const a: HTMLElement = event.target as HTMLElement;
    this.selectedFile = a.innerHTML;
    a.classList.add('font-weight-bold');
    this.$emit('select-file', a.innerHTML)
  }
}
</script>

<style>
.version-card-body {
  display: flex;
  justify-content: space-between;
  margin: 4px 16px;
}

.list-group.list-group-root {
  padding: 0;
  overflow: hidden;
}

.list-group.list-group-root .list-group {
  margin-bottom: 0;
  box-shadow: #333553;
}

.list-group.list-group-root .list-group-item {
  border-radius: 0;
  border-width: 1px 0 0 0;
}

.list-group.list-group-root > .list-group-item:first-child {
  border-top-width: 0;
}

.list-group.list-group-root > .list-group > .list-group-item {
  padding-left: 30px;
}

.list-group.list-group-root > .list-group > .list-group > .list-group-item {
  padding-left: 45px;
}
</style>

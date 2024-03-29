<template>
  <div class="">
    <div class="card-header h3">Versions</div>
    <div class="version-card-body" v-for="(version, index) in versions" :key="index">
      <VersionNumber v-on:browse-version="$emit('browse-version', $event)" :version="version"/>
    </div>
    <div class="card m-3">
      <div class="card-header">
        <div class="mb-0 fw-bold text-center h4">Edit Files</div>
      </div>
        <div id="tree" class="list-group list-group-root well shadow-sm"></div>
    </div>
    <div class="m-3 d-flex">
      <div>
        <button
            v-on:click="$emit('new-file')"
            class="btn btn-primary m-1">
          New file
        </button>
      </div>
      <div>
        <button
            v-on:click="$emit('new-folder')"
            class="btn btn-primary m-1">
          New folder
        </button>
      </div>
      <div>
        <button
            v-on:click="$emit('new-version')"
            class="btn btn-primary m-1">
          Create version
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
  private versions: Array<String> = [];
  //Prop
  projectId!: string;
  versionNumber!: string;

  mounted() {
    this.files = [];
    ProjectController.getProjectTree(this.projectId, this.versionNumber)
      .then(res => {
        this.files = res;
        const div = document.getElementById("tree");

        if(!div){
          return;
        }
        this.cleanTree(div);
        this.displayFiles(this.files, div, 0, "");
      });

    ProjectController.getVersions(this.projectId)
        .then((res: string) => {
          // console.log(res);
          this.versions = (res as unknown as string[]).sort();
          this.versions.splice(this.versions.indexOf("latest"),1);
          this.versions.unshift("latest");
        })
  }

  private displayFiles (files: Array<TreeNode>, parentNode: HTMLElement, index: number, path: string) {
    //sort files by name
    files.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    //sort type directory before type file
    files.sort((a, b) => {
      if (a.type === "directory" && b.type === "file") {
        return -1;
      }
      if (a.type === "file" && b.type === "directory") {
        return 1;
      }
      return 0;
    });
    files.forEach((item:TreeNode) => {
      const link = document.createElement('a');
      let filePath = path;
      link.href = '#';
      link.classList.add('list-group-item');
      link.style.paddingLeft = `${index * 15}px`;
      if (item.type === "directory")
        link.innerHTML = "- " + item.name;
      else
        link.innerHTML = item.name;
      link.addEventListener('click', this.selectFile.bind(this))
      parentNode.appendChild(link);

      if (index != 0) {
        filePath += "/" + item.name;
        const hiddenPath = document.createElement('p');
        hiddenPath.style.display = "none";
        hiddenPath.innerText = filePath;
        link.appendChild(hiddenPath);
      }

      if(item.type === "directory") {
        link.classList.add('folder');

        //Création du parent
        const div = document.createElement('div');
        div.classList.add('list-group')
        this.displayFiles(item.children, div, index + 1, filePath);
        parentNode.appendChild(div);
      }
    })
  }

  private cleanTree(parent: HTMLElement): void {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
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
      previousA.classList.remove("fw-bold");
    }

    const a: HTMLElement = event.target as HTMLElement;
    this.selectedFile = a.innerHTML;
    a.classList.add('fw-bold');

    const htmlElement = event.target as HTMLElement;
    let filePath = htmlElement.firstElementChild!.innerHTML;

    if (htmlElement.classList.contains('folder')) {
      const folderContentElement = htmlElement.nextElementSibling as HTMLElement;
      if (folderContentElement.style.display === "none") {
        folderContentElement.style.display = "block";
      } else {
        folderContentElement.style.display = "none";
      }
    } else {
      this.$emit('select-file', filePath);
    }
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
#tree {
  padding-left: 15px;
}
.folder {
  color: #909090;
}
</style>

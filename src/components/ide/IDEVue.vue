<template>
  <HeaderVue />
  <div class="row m-0">
    <ProjectFiles
        class="col-sm-1 p-1"
        v-bind:project-id="projectId"
        v-bind:files="files"
    />
    <div class="main-vue ide container">
      <div
          class="monaco-editor-background monaco-editor monaco-tl-contents"
          ref="monacoEditorDiv"
      ></div>
      <div class="d-flex justify-content-center m-2">
        <button v-on:click="compileCode" class="btn btn-dark m-1">Compile code</button>
        <button v-bind:disabled="!wasCompiled" v-on:click="testProject" class="btn btn-primary m-1">Test project</button>
        <button v-on:click="saveFile(currentFile)" class="btn btn-success m-1">Save file</button>
      </div>
    </div>

  </div>
  <div class="d-flex justify-content-center">
    <MDBSpinner v-if="isCompiling" class="m-3"/>
    <div v-if="logs" class="container p-2 m-2">
      <h5 class="align-self-center">Result ...</h5>
      <div class="bg-light log-container p-5">
        {{logs}}
      </div>
    </div>
  </div>


</template>
<script setup lang="ts">
  import HeaderVue from "@/components/header/HeaderVue.vue";
  import ProjectFiles from "@/components/ide/atoms/ProjectFiles.vue";
  import {onMounted, ref} from "vue";
  import {TreeNode} from "@/object/TreeNode";
  import * as monaco from "monaco-editor";
  import ProjectController from "@/controller/ProjectController";
  import { MDBSpinner } from 'mdb-vue-ui-kit'

  const monacoEditorDiv = ref< HTMLElement | null> (null);
  let monacoEditor: monaco.editor.IStandaloneCodeEditor;

  const projectId = 555;
  let files = ref<Array<TreeNode>>([]);
  let fileDefaultContent: string | any = "fn main() {}";
  let logs = ref("");
  let wasCompiled = ref(false);
  let isCompiling = ref(false);
  const currentFile = "rom.rs";
  const currentLanguage = "rust";

  onMounted(() => {
    ProjectController.getProjectTree(projectId)
        .then(res => {
          files.value = res;
       })
    const editorOptions = {
      language: "rust",
      minimap: { enabled: false },
      value: fileDefaultContent
    };

    monacoEditor = monaco.editor.create(
        monacoEditorDiv.value!,
        editorOptions
    );

    ProjectController.getFileContent(projectId, currentFile)
        .then(res => {
          monacoEditor.setValue(res.content)
        })

    monacoEditor.onDidChangeModelContent(event => {
      wasCompiled.value = false;
      //TODO
      // console.log(monacoEditor.getValue())
    })
  })

  const saveFile = (filename: string) => {
    console.log("Enregistrement du fichier: API à faire")
    alert(`the file ${filename} was saved.`);
  }

  const compileCode = () => {
    isCompiling.value = true
    logs.value = "";

    ProjectController
        .compileProject(projectId, currentLanguage)
        .then(res => {
          isCompiling.value = false;
          logs.value = res;
          wasCompiled.value = true;
        })
  }

  const testProject = () => {
    ProjectController
        .testProject(projectId)
        .then(testUrl => {
          console.log(testUrl);
          // window.open(testUrl, '_blank');
        })
  }

</script>

<style scoped>
.monaco-editor {
  margin: 8px;
  min-height: 500px;
}
.ide {
  background-color: #F0F0F0;
  border-radius: 4px;
}
.container {
  background-color: #F0F0F0;
  border-radius: 4px;
}
</style>

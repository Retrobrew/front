<template>
  <HeaderVue />
  <div class="mt-3 container">
<!--        <ProjectFiles-->
<!--        class="col-sm-1 p-1 ms-2"-->
<!--        v-bind:project-id="projectId"-->
<!--        v-bind:files="files"-->
<!--    />-->
    <div class="ide p-2 mb-2">
      <div class="text-center h4 text-uppercase">{{ currentFile }}</div>
      <div
          class="monaco-editor-background m-2 monaco-tl-contents monaco-editor"
          ref="monacoEditorDiv"
      ></div>
      <div class="d-flex justify-content-center m-2">
        <button v-on:click="compileCode" class="btn btn-dark m-1">Compile code</button>
        <button v-bind:disabled="!wasCompiled" v-on:click="testProject" class="btn btn-primary m-1">Test project</button>
        <button v-on:click="saveFile(currentFile)" class="btn btn-success m-1">Save file</button>
      </div>
    </div>

    <div
        v-if="errorMsg"
        class="alert alert-danger alert-dismissible fade show mt-3"
    >
      {{errorMsg}}
      <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          v-on:click="closeError"
      ></button>
    </div>
  </div>
  <div class="d-flex justify-content-center container">
    <div v-if="!isLoadingProject && !errorMsg" class="ide container p-2 mt-2">
      <h4 class="align-self-center card-title">Logs</h4>
      <div class="text-center m-3">
        <MDBSpinner v-if="isCompiling"/>
      </div>
      <div v-if="logs" class="bg-light p-5">
        {{logs}}
      </div>
    </div>
  </div>

  <div class="text-center m-3">
    <MDBSpinner v-if="isLoadingProject"/>
  </div>
  <div class="text-center">
    <button
        v-on:click="router.push(`/group/${projectId}`)"
        class="btn btn-primary btn-sm"
    >
      <MDBIcon icon="arrow-left" class="me-2"></MDBIcon> Back to group
    </button>
  </div>

</template>
<script setup lang="ts">
  import HeaderVue from "@/components/header/HeaderVue.vue";
  import {onMounted, ref} from "vue";
  import * as monaco from "monaco-editor";
  import { MDBSpinner, MDBIcon } from 'mdb-vue-ui-kit'
  import { TreeNode } from "@/object/TreeNode";
  import ProjectController from "@/controller/ProjectController";
  import {useRoute, useRouter} from "vue-router";

  const router = useRouter();
  const route = useRoute();

  const monacoEditorDiv = ref< HTMLElement | null> (null);
  let monacoEditor: monaco.editor.IStandaloneCodeEditor;

  const currentFile = "rom.rs";
  const currentLanguage = "rust";
  let projectId = ref<string>(route.params['projectId']);
  let files = ref<Array<TreeNode>>([]);
  let fileDefaultContent: string | any = "fn main() {}";
  let logs = ref("");

  let errorMsg = ref("");
  let wasCompiled = ref(false);
  let isCompiling = ref(false);
  let isLoadingProject = ref(false);


  onMounted(() => {
    ProjectController.getProjectTree(555)
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

    ProjectController.getFileContent(555, currentFile)
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
        res = cleanLogs(res);
        logs.value = res;
        wasCompiled.value = true;
      }).catch(error => {
        wasCompiled.value = false;
        errorMsg.value = "Error while trying to compile project. Please try again.";

        console.error(error.message);
    }).finally(() => {
      isCompiling.value = false;
    })
  }

  const testProject = () => {
    isLoadingProject.value = true;
    ProjectController
      .testProject(projectId)
      .then(testUrl => {
        // console.log(testUrl);
        window.open(testUrl, '_blank');
      }).catch(error => {
        errorMsg.value = "Error while trying to execute project";
        console.error(error.message)
    }).finally(() => {
      isLoadingProject.value = false;
    })
  }

  const closeError = () => {
    errorMsg.value = "";
  }

  const cleanLogs = (logs: String) => {
    return logs.replace('<br>', "\n");
  }

</script>

<style scoped>
.monaco-editor {
  min-height: 500px;
}
.ide {
  background-color: #F0F0F0;
  border-radius: 4px;
}
</style>

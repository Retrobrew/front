<template>
  <div
      v-if="currentFile"
      class="mt-3 container version-card m-0"
  >
    <div class="p-2 mb-2">
      <div class="text-center h4 text-uppercase">{{ currentFile }}</div>
      <div
          class="monaco-editor-background m-2 monaco-tl-contents monaco-editor"
          ref="monacoEditorDiv"
      ></div>
      <ProjectActions
          :current-file="currentFile"
          :was-compiled="wasCompiled"
          v-on:new-file="$emit('new-file')"
          v-on:compilation-error="errorMsg = $event"
          v-on:project-loading="isLoadingProject = $event"
          v-on:project-compilation="isCompiling = $event"
          v-on:compilation-success="handleCompileResult($event)"
      />
    </div>
    <ErrorMsg
        v-if="errorMsg"
        :error-msg="errorMsg"
        v-on:close="errorMsg=''"
    />
  </div>
  <ProjectLogs
      :is-compiling="isCompiling"
      :is-loading-project="isLoadingProject"
      :error-msg="errorMsg"
      :logs="logs"
  />
  <div class="text-center m-3">
    <MDBSpinner v-if="isLoadingProject"/>
  </div>

</template>
<script setup lang="ts">
import {defineProps, onMounted, ref} from "vue";
  import * as monaco from "monaco-editor";
  import { MDBSpinner } from 'mdb-vue-ui-kit'
  import { TreeNode } from "@/object/TreeNode";
  import ProjectController from "@/controller/ProjectController";
  import { useRouter} from "vue-router";
  import ProjectLogs from "@/components/ide/atoms/ProjectLogs.vue";
  import ErrorMsg from "@/components/error/ErrorMsg.vue";
  import ProjectActions from "@/components/ide/atoms/ProjectActions.vue";

  const router = useRouter();

  const monacoEditorDiv = ref< HTMLElement | null> (null);
  let monacoEditor: monaco.editor.IStandaloneCodeEditor;

  const props = defineProps({
    currentFile: {
      type: String,
      required: true
    }
  })

  const currentLanguage = "rust";
  let projectId = 555;
  let files = ref<Array<TreeNode>>([]);
  let fileDefaultContent: string | any = "fn main() {}";
  let logs = ref("");

  let errorMsg = ref("");
  let wasCompiled = ref(false);
  let isCompiling = ref(false);
  let isLoadingProject = ref(false);
  let showNewFileForm = ref(false);

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

    ProjectController.getFileContent(555, props.currentFile)
        .then(res => {
          monacoEditor.setValue(res.content)
        })

    monacoEditor.onDidChangeModelContent(event => {
      wasCompiled.value = false;
      //TODO
      // console.log(monacoEditor.getValue())
    })
  })

  const handleCompileResult = (compileResult: {
    wasCompiled: boolean,
    logs: string
  }) => {
    wasCompiled.value = compileResult.wasCompiled;
    logs.value = compileResult.logs
  }

</script>

<style>
.monaco-editor {
  min-height: 500px;
}
</style>

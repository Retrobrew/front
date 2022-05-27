<template>
  <HeaderVue />
  <div class="row m-0">
    <ProjectFiles
        class="col-sm-1 p-1"
        v-bind:project-id="projectId"
        v-bind:files="files"
    />
    <div class="main-vue ide">
      <div
          class="monaco-editor"
          ref="monacoEditorDiv"
      ></div>
      <div class="ide-action">
        <button v-on:click="runCode" class="btn btn-primary">Run code</button>
        <button v-on:click="saveFile(currentFile)" class="btn btn-success">Save file</button>
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

  const monacoEditorDiv = ref< HTMLElement | null> (null);
  let monacoEditor: monaco.editor.IStandaloneCodeEditor;

  const projectId = 555;
  const files: Array<TreeNode> = ProjectController.getProjectTree(projectId);
  let fileDefaultContent: string | any = "fn main() {}";
  const currentFile = "somefile.rs";
  const currentLanguage = "rust";

  onMounted(() => {
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
      //TODO
      console.log(monacoEditor.getValue())
    })
  })

  const saveFile = (filename: string) => {
    console.log("Enregistrement du fichier: API à faire")
    alert(`the file ${filename} was saved.`);
  }

  const runCode = () => {
    // ProjectController.runCode(currentLanguage, projectId);
  }
</script>

<style scoped>
.monaco-editor {
  margin: 8px;
  height: 80vh;
}
.ide {
  background-color: #F0F0F0;
  border-radius: 4px;
}
.ide-action {
  text-align: center;
}
</style>

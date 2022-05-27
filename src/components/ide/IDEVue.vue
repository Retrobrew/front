<template>
  <HeaderVue />
  <div class="row">
    <ProjectFiles
        class="col-sm-1"
        v-bind:project-id="projectId"
        v-bind:files="files"
    />
    <div class="main-vue ide">
      <div
          class="monaco-editor"
          ref="monacoEditorDiv"
      ></div>
      <div class="ide-action">
        <button class="btn btn-primary">Run code</button>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
  import HeaderVue from "@/components/header/HeaderVue.vue";
  import ProjectFiles from "@/components/ide/atoms/ProjectFiles.vue";
  import APIController from "@/controller/APIController";
  import {onMounted, ref} from "vue";
  import {TreeNode} from "@/object/TreeNode";
  import * as monaco from "monaco-editor";

  const projectId = 555;
  const monacoEditorDiv = ref< HTMLElement | null> (null);
  let monacoEditor: monaco.editor.IStandaloneCodeEditor
  const files: Array<TreeNode> = APIController.getProjectTree(projectId);
  const fileContent: string | any = "fn main() {}";
  const editorOptions = {
    language: "rust",
    minimap: { enabled: false },
    value: fileContent
  };

  onMounted(() => {
    monacoEditor = monaco.editor.create(
        monacoEditorDiv.value!,
        editorOptions
    );

    monacoEditor.onDidChangeModelContent(event => {
      console.log(event)
      console.log(monacoEditor.getValue())
    })
  })


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

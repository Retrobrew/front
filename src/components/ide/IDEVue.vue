<template>
  <HeaderVue />
  <div class="main-vue ide">
    <div id="editor"></div>
    <div class="ide-action">
      <button class="btn btn-primary">Run code</button>
    </div>
  </div>
</template>

<script>
import {Options, Vue} from "vue-class-component";
import loader from "@monaco-editor/loader";
import HeaderVue from "@/components/header/HeaderVue";

@Options({
  name: "IDEVue",
  components: {HeaderVue},
})
export default class IDEVue extends Vue {
  async mounted() {
    loader.init().then((monaco) => {
      const editorOptions = {
        language: "rust",
        minimap: { enabled: false },
      };
      monaco.editor.create(document.getElementById("editor"), editorOptions);
  });
  }
}
</script>

<style scoped>
#editor {
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

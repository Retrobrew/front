<template>
  <div  class="col-sm-auto">
    <a
      v-on:click="uploadFile"
      class="link small col-sm-3"
    >
      Upload a picture
    </a>
    <input
        v-on:change="displayPicture($event)"
        ref="uploadField" style="display: none"
        type="file" class="hidden"
    />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "PostCreationPicture",

})
export default class PostCreationPicture extends Vue {

  declare $refs: {
    uploadField: HTMLInputElement
  }

  uploadFile() {
    this.$refs.uploadField.click();
  }

  displayPicture(event: any){
    this.$emit('uploadPicture', event.target.files[0]);
  }


}
</script>

<style scoped>

</style>
<template>
  <div class="group-icon-box my-container">
    <img :src="link">
    <div class="icon-float" v-on:click="changePicture">
        <MDBIcon
            icon="camera"
            size="lg"
            data-toggle
        />
    </div>
    <input
        v-on:change="displayPicture($event)"
        ref="uploadField" style="display: none"
        type="file" class="hidden"
    />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {MDBIcon, MDBTooltip } from 'mdb-vue-ui-kit'

@Options({
  components: {
    MDBIcon,
    MDBTooltip
  },
  props: {
    link: String
  }
})
export default class GroupIcon extends Vue {
  private text = false
  declare $refs: {
    uploadField: HTMLInputElement
  }

  changePicture() {
    this.$refs.uploadField.click();
  }

  displayPicture(event: any){
    this.$emit('uploadPicture', event.target.files[0]);
  }
}
</script>

<style scoped>
.group-icon-box {
  margin: auto 0;
  min-height: 48px;
  height: 10%;
  max-height: 96px;
  min-width: 48px;
  width: 10%;
  max-width: 96px;
}
.group-icon-box img {
  border-radius: 8px;
  height: 100%;
  width: 100%;
  vertical-align: middle;
}

.icon-float {
  padding: 3px 7px 3px 7px;
  border-radius: 50%;
  background: #e4e6eb;
  bottom: -10px;
  right: -10px;
  position: absolute;
  cursor: pointer;
}

.my-container {
  position: relative;
}

.my-container img {
  display: block;
}
</style>

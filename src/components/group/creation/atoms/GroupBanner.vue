<template>
  <div class="group-banner-box">
    <img :src="link"/>
  </div>
  <div>
    <div class="d-flex justify-content-start ms-2 mb-2 mt-2">
      <button class="btn btn-sm btn-primary" v-on:click="changePicture">Change banner</button>
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
import {MDBIcon} from "mdb-vue-ui-kit";

@Options({
  components: {
    MDBIcon
  },
  props: {
    link: String
  }
})
export default class GroupBanner extends Vue {
  declare $refs: {
    uploadField: HTMLInputElement
  }
  changePicture() {
    this.$refs.uploadField.click();
  }

  displayPicture(event: any){
    this.$emit('uploadBanner', event.target.files[0]);
  }
}
</script>

<style scoped>
.group-banner-box {
  min-height: 200px;
  height: 20%;
  max-height: 400px;
  overflow: hidden;
}
.group-banner-box img {
  object-fit: fill;
  vertical-align: middle;
  margin: -25% 0;
  width: 100%;
}
</style>

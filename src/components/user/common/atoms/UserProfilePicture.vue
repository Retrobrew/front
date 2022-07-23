<template>
  <img :src="url" @error="loadDefault" class="card"/>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "UserProfilePicture",
  props: {
    userUuid: String,
    link: File
  }
})
export default class UserProfilePicture extends Vue {
  private userUuid!: string;
  private link!: File;
  private url: string  = "";

  mounted() {
    if(this.link){
      this.url = URL.createObjectURL(this.link);
      return;
    }
    this.url = `${process.env.VUE_APP_AUTH_API_URL}/users/${this.userUuid}/avatar`
  }

  private loadDefault() {
    if(this.link){
      return;
    }
    this.url = "/assets/avatar-placeholder.png"
  }
}
</script>

<style scoped>
img {
  border: 1px solid #000000;
  margin: 8px;
}
</style>

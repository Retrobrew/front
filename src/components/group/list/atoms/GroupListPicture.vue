<template>
  <img :src="url" @error="loadDefault" class="shadow btn-rounded "/>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "GroupListPicture",
  props: {
    link: String,
    groupUuid: String,
  }
})
export default class GroupListCard extends Vue {
  private groupUuid!: string;
  private url: string  = "";

  mounted() {
    this.url = `${process.env.VUE_APP_AUTH_API_URL}/groups/${this.groupUuid}/icon`
  }

  private loadDefault() {
    this.url = "/assets/vector-gameboy.png"
  }
}
</script>

<style scoped>
.group-list-card img {
  object-fit: contain;
  height: 50px;
  width: 50px;
}
</style>

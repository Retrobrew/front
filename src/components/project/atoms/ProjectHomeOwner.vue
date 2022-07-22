<template>
  <div class="project-home-body-owner">
    <p style="font-weight: 500">Owner</p>
    <div>
      <p>{{owner}}</p>
      <img :src="ownerFlag" />
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "ProjectHomeOwner",
  props: {
    owner: String,
    ownerFlag: String,
  }
})
export default class ProjectHomeOwner extends Vue{
}
</script>

<style scoped>
.project-home-body-owner {
  text-align: start;
}
.project-home-body-owner p {
  margin: 2px 0;
  padding: 0;
}
.project-home-body-owner div {
  display: flex;
  flex-direction: row;
}
.project-home-body-owner div img {
  height: 24px;
  width: 24px;
  margin: 0 4px;
}
</style>

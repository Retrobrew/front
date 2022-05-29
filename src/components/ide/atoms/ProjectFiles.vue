<template>
  <div>
    <p class="text-dark form-label ps-2">Project files</p>
    <ul v-for="file in files" v-bind:key="file.name">
        <li>{{ file.name }}</li>
    </ul>
  </div>

  <!--  <div class="tree">
      <ul>
        <li>
          <a  href="#">src</a>
          <ul>
            <li>
              assets
              <ul>
                <li>logo.svg</li>
              </ul>
            </li>
            <li>
              components
              <ul>
                <li>feed</li>
                <li>group</li>
                <li>friend</li>
              </ul>
            </li>
            <li>
              App.vue
            </li>
            <li>
              main.ts
            </li>
          </ul>
        </li>
      </ul>
    </div>-->
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
@Options({
  name: "ProjectFiles",
  props: {
    files: Array,
    projectId: {
      type: Number,
      required: true,
      default: 0
    },
  }
})
export default class ProjectFiles extends Vue {


}
</script>

<style scoped>

</style>
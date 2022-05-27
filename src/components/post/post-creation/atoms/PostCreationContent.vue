<template>
  <div class="post-content card-text">
    <textarea class="form-control m-2" rows="3" placeholder="How do you feel today ?"></textarea>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
@Options({
  name: "PostCreationContent"
})
export default class PostCreationContent extends Vue {
}
</script>

<style scoped>

</style>

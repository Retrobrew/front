<template>
  <div id="feed">
    <PostVue />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import PostVue from "@/components/post/PostVue.vue";

@Options({
  name: "FeedVue",
  components: {
    PostVue
  }
})
export default class FeedVue extends Vue {
}
</script>

<style scoped>
#feed {
  margin: auto;
  min-width: 200px;
  width: 80vw;
  max-width: 1200px;
}

#feed div {
  margin: 12px 0;
}
</style>

<template>
  <div class="main-vue">
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
#feed div {
  margin: 12px 0;
}
</style>

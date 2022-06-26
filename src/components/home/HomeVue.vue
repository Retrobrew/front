<template>
  <HeaderVue />
  <FeedVue
      v-bind:group-uuid="'home'"
      v-bind:group="group"
      class="mb-3"
  />
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import HeaderVue from "@/components/header/HeaderVue.vue";
import FeedVue from "@/components/feed/FeedVue.vue";
import PostCreationVue from "@/components/post/post-creation/PostCreationVue.vue";
import {Group} from "@/object/Group";

@Options({
  name: "Home",
  components: {
    FeedVue,
    HeaderVue,
    PostCreationVue
  }
})
export default class Home extends Vue {
  private group: Group = Group.homeGroup();

}
</script>

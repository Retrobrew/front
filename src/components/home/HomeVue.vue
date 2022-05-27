<template>
  <HeaderVue />
  <PostCreationVue/>
  <FeedVue />
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import HeaderVue from "@/components/header/HeaderVue.vue";
import FeedVue from "@/components/feed/FeedVue.vue";
import {inject} from "vue";
import {User} from "@/object/User";
import PostCreationVue from "@/components/post/post-creation/PostCreationVue.vue";

@Options({
  name: "Home",
  components: {
    FeedVue,
    HeaderVue,
    PostCreationVue
  }
})
export default class Home extends Vue {
  private user: User | undefined = inject('user');
}
</script>

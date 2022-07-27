<template>
  <HeaderVue
      v-on:loadHomeFeed="changeValue(true)"
      v-on:loadMyFeed="changeValue(false)"
  />
  <FeedVue
      :key="loadHomeFeed"
      :load-home-feed="loadHomeFeed"
      v-bind:group-uuid="'home'"
      v-bind:group="group"
      class="mb-3"
  />
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {useMobileDetection} from "vue3-mobile-detection";
import HeaderVue from "@/components/header/HeaderVue.vue";
import FeedVue from "@/components/feed/FeedVue.vue";
import PostCreationVue from "@/components/post/post-creation/PostCreationVue.vue";
import {Group} from "@/object/Group";

@Options({
  name: "Home",
  components: {
    FeedVue,
    HeaderVue,
    PostCreationVue,
  }
})
export default class Home extends Vue {
  private group: Group = Group.homeGroup();
  private loadHomeFeed = true;

  created() {
    const { isMobile } = useMobileDetection();
    if (isMobile()) {
      this.$router.push("/mobile");
    }
  }

  changeValue(value: boolean) {
    this.loadHomeFeed = value;
  }
}
</script>

<template>
  <HeaderVue />
  <FeedVue />
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import HeaderVue from "@/components/header/HeaderVue.vue";
import FeedVue from "@/components/feed/FeedVue.vue";
import {inject} from "vue";

@Options({
  name: "Home",
  components: {
    FeedVue,
    HeaderVue
  }
})
export default class Home extends Vue {
  private user = inject('user');
  mounted() {
    console.log(this.user);
  }
}
</script>

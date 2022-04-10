<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps(['like', 'dislike']);
</script>

<template>
  <div class="post-foot-reaction">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
    </svg>
    <p>{{props.like}} Like{{props.like > 1 ? "s" : ""}}</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heartbreak-fill" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586ZM7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77Z"/>
    </svg>
    <p>{{props.dislike}} Dislike{{props.dislike > 1 ? "s" : ""}}</p>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class PostReaction extends Vue {
}
</script>

<style scoped>
.post-foot-reaction {
  display: flex;
}
.post-foot-reaction svg {
  margin: auto 4px;
  padding: 0;
}
.post-foot-reaction p {
  margin: auto 4px;
  padding: 0;
}
</style>

<template>
  <div class="post-foot-reaction">
    <div class="link" v-on:click="$emit('like-post')">
      <MDBIcon
        :class="{ 'liked': props.liked, 'not-liked': !props.liked }"
        icon="heart"
        data-toggle
      />
      {{props.likes}} Like{{props.likes > 1 ? "s" : ""}}
    </div>

    <!--
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heartbreak-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586ZM7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77Z"/>
      </svg>
      <p>{{props.dislikes}} Dislike{{props.dislikes > 1 ? "s" : ""}}</p>
    -->
  </div>
</template>

<script setup lang="ts">
import { MDBIcon } from "mdb-vue-ui-kit";

// eslint-disable-next-line no-undef
  const props = defineProps({
    liked: {
      type: Boolean
    },
    likes: Number,
    dislikes: Number
  });


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

.not-liked {
  color: grey;
}

.liked {
  color: royalblue;
}
</style>

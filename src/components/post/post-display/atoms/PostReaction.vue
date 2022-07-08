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

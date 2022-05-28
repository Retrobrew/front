<template>
  <div class="post mt-2">
      <PostHead
          :post-label="postLabel"
          :post-title="post.title"
          :post-author="post.author"
          :post-uuid="post.uuid"
      />

    <PostContent :content="post.content" />
    <button
        v-on:click="$emit('deletePost', post.uuid)"
        v-if="showDelete"
        class="btn btn-close btn-sm btn-danger btn-rounded float-sm-end me-3 ms-3"></button>
    <PostFoot :likes="postLikes" :dislikes="postDislike" :comments="post.comments" />
  </div>

</template>

<script setup lang="ts">
import PostContent from "@/components/post/post-display/atoms/PostContent.vue";
import PostHead from "@/components/post/post-display/molecules/PostHead.vue";
import PostFoot from "@/components/post/post-display/molecules/PostFoot.vue";
import {Post} from "@/object/Post";
import {User} from "@/object/User";
import {inject} from "vue";
const postLabel = "Pokemon";
const postLikes = 19;
const postDislike = 2;
// eslint-disable-next-line no-undef
const props = defineProps( {
  post: Post,
})
const user: User | undefined = inject('user');
const showDelete = user?.uuid == props.post?.author?.uuid;
</script>

<style scoped>
.post {
  background: #F0F0F0;
  border-radius: 8px;
}
</style>

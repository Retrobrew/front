<template>
  <div class="card">
    <div class="card-body">
      <PostCreationTitle v-bind:title="post.title"/>
      <PostCreationContent v-bind:content="post.content"/>
      <div class="row">
        <PostCreationLabel class="col-sm-auto"/>
        <PostCreationPicture class="col-sm-auto"/>
      </div>
    </div>
    <div class="card-footer">
      <div class="row">
        <div class="align-content-end">
          <PostCreationSubmitButton />
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import PostCreationTitle from "@/components/post/post-creation/atoms/PostCreationTitle.vue";
import PostCreationContent from "@/components/post/post-creation/atoms/PostCreationContent.vue";
import PostCreationLabel from "@/components/post/post-creation/atoms/PostCreationTag.vue";
import PostCreationPicture from "@/components/post/post-creation/atoms/PostCreationPicture.vue";
import PostCreationSubmitButton from "@/components/post/post-creation/atoms/PostCreationSubmitButton.vue";
import {Post} from "@/object/Post";

@Options({
  name: "PostCreationForm",
  components: {
    PostCreationSubmitButton,
    PostCreationPicture,
    PostCreationTitle,
    PostCreationContent,
    PostCreationLabel
  }
})
export default class PostCreationForm extends Vue {
  private post: Post | undefined =  Post.emptyPost();


}
</script>
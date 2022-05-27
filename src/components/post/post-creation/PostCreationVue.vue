<template>
  <div class="container mt-3">
    <MDBCard>
      <MDBCardBody class="pb-2">
        <PostCreationForm v-bind:post="post"/>
        <img class="card-img w-75 mt-2" v-bind:src="picture" v-if="showPicture"/>
        <PostCreationLabel class="row pt-2"/>
        <PostCreationPicture v-on:uploadPicture="addPicture($event)" class="row"/>
        <div class="col-sm-1 float-end">
          <button class="mt-2 btn btn-sm btn-success float-end" v-on:click="createPost">Create</button>
        </div>
      </MDBCardBody>
    </MDBCard>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import PostCreationForm from "@/components/post/post-creation/molecules/PostCreationForm.vue";
import {Post} from "@/object/Post";
import {FeedController} from "@/controller/FeedController";
import {
  MDBCard,
  MDBCardBody,
} from 'mdb-vue-ui-kit';
import PostCreationPicture from "@/components/post/post-creation/atoms/PostCreationPicture.vue";
import PostCreationLabel from "@/components/post/post-creation/atoms/PostCreationTag.vue";
import {User} from "@/object/User";
import {inject} from "vue";

@Options({
  name: "PostCreationVue",
  components: {
    PostCreationForm,
    MDBCard,
    MDBCardBody,
    PostCreationPicture,
    PostCreationLabel,
  }

})
export default class PostCreationVue extends Vue {
  private post: Post = Post.emptyPost();
  private user: User | undefined = inject('user');
  private picture = "";
  private showPicture = false;

  createPost(){
    FeedController
        .createPost(this.post)
        .then((res: any) => {
          this.post.uuid = res.uuid
          this.$emit('postCreated', this.post);
          this.post = Post.emptyPost()
        })
  }

  addPicture(picture: any): void {
    this.picture = URL.createObjectURL(picture);
    this.showPicture = true;
    // this.post.media = picture;
  }

}
</script>
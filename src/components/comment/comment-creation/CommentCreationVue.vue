<template>
  <div class="mt-3">
    <MDBCard>
      <MDBCardBody class="pb-2">
        <div>
          <MDBTextarea
              class="mt-1 form-control-sm"
              rows="2"
              placeholder="What did you think of this post ?"
              v-model="comment"
          />
        </div>
        <div>
          <button class="mt-2 btn btn-sm btn-success end-100" v-on:click="createComment">Send</button>
        </div>
      </MDBCardBody>
    </MDBCard>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {PostController} from "@/controller/PostController";
import {useRoute} from "vue-router";
import {
  MDBTextarea,
  MDBCardBody,
  MDBCard
} from 'mdb-vue-ui-kit';
import {User} from "@/object/User";
import {inject} from "vue";
import {Comment} from "@/object/Comment";

@Options({
  name: "CommentCreationVue",
  components: {
    MDBCardBody,
    MDBCard,
    MDBTextarea,
  },
})
export default class CommentCreationVue extends Vue {
  private user: User | undefined = inject('user');
  private comment = "";
  private route = useRoute();
  private postUuid = "";

  private createComment = () => {
    if(!this.user){
      alert("You can't comment if you are not logged");
      return;
    }
    this.postUuid = this.route.params.uuid as string
    PostController.commentPost(this.postUuid, this.comment)
      .then((uuid: string) => {

        const commentObject = new Comment(
            uuid,
            this.comment,
            this.user as User
        );

        this.$emit('new-comment', commentObject);
      })
      .catch(() => {
        // console.error(err);
      })
  }
}
</script>

<style scoped>

</style>

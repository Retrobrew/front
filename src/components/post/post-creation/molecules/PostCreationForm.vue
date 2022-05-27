<template>
      <MDBInput
          class="form-control-sm"
          type="text"
          placeholder="Add a title to your post!"
          v-model="post.title"
      />
      <MDBTextarea class="mt-1 form-control-sm" rows="2" placeholder="How do you feel today ?" v-model="post.content"></MDBTextarea>

</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {Post} from "@/object/Post";
import {
  MDBCardFooter,
  MDBTextarea,
  MDBInput
} from 'mdb-vue-ui-kit';

@Options({
  name: "PostCreationForm",
  components: {
    MDBCardFooter,
    MDBInput,
    MDBTextarea
  },
  props:{
    post: Post
  }
})
export default class PostCreationForm extends Vue {


}
</script>
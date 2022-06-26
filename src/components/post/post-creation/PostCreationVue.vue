<template>
  <div class="mt-3">
    <MDBCard>
      <MDBCardBody class="pb-2">
        <PostCreationForm v-bind:post="post"/>
        <img class="card-img w-75 mt-2" v-bind:src="picture" v-if="showPicture"/>
        <PostCreationPicture v-on:uploadPicture="addPicture($event)" class="row"/>
        <input :value="groupUuid" type="hidden"/>
        <div class="col-sm-1 float-end">
          <button class="mt-2 btn btn-sm btn-success float-end" v-on:click="createPost">Create</button>
        </div>
      </MDBCardBody>
    </MDBCard>
  </div>
</template>

<script setup lang="ts">
import PostCreationForm from "@/components/post/post-creation/molecules/PostCreationForm.vue";
import {Post} from "@/object/Post";
import {FeedController} from "@/controller/FeedController";
import {
  MDBCard,
  MDBCardBody,
} from 'mdb-vue-ui-kit';
import PostCreationPicture from "@/components/post/post-creation/atoms/PostCreationPicture.vue";
import {User} from "@/object/User";
import {inject, ref} from "vue";
import {Group} from "@/object/Group";

// eslint-disable-next-line no-undef
const props = defineProps({
  group: {
    type: Group,
    required: true
  }
});

// eslint-disable-next-line no-undef
const emits = defineEmits(['postCreated']);

  let post = ref<Post>(Post.emptyPost());
  const user: User | undefined = inject('user');
  let picture = ref("");
  let showPicture = ref(false);

  const addPicture = (file: File) => {
    picture.value = URL.createObjectURL(file);
    showPicture.value = true;
    post.value.media = file;
  }

const createPost = () => {
  post.value.postedIn = props.group;
  FeedController
      .createPost(post.value)
      .then((res: any) => {
        post.value.uuid = res.uuid;
        post.value.author = user as User;

        emits('postCreated', post.value);
      }).then(() => {
        post.value = Post.emptyPost()
      })
  }

</script>
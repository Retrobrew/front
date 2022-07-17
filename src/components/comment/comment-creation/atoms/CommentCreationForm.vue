<template>
  <MDBTextarea
    class="mt-1 form-control-sm"
    rows="2"
    placeholder="What did you think of this post ?"
    v-model="comment"
  />
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {MDBTextarea} from 'mdb-vue-ui-kit';

@Options({
  name: "CommentCreationForm",
  components: {
    MDBTextarea,
  },
  props: {
    comment: String
  }
})
export default class CommentCreationForm extends Vue {
}
</script>

<style scoped>

</style>

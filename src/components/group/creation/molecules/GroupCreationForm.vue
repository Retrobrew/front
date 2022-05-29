<template>
  <div>
    <MDBInput
        class="form-control-sm"
        type="text"
        label="Group name"
        v-model="group.name"
    />
    <MDBTextarea
        class="mt-2 form-control-sm"
        rows="2"
        label="Group description"
        placeholder="Please add a description to your group"
        v-model="group.description"></MDBTextarea>
  </div>

</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {
  MDBTextarea,
  MDBInput,
  MDBCardImg
} from 'mdb-vue-ui-kit';
import {Group} from "@/object/group";

@Options({
  name: "PostCreationForm",
  components: {
    MDBInput,
    MDBTextarea,
    MDBCardImg,
  },
  props:{
    group: {
      type: Group,
      required: true,
      default: Group.emptyGroup()
    }
  }
})
export default class PostCreationForm extends Vue {


}
</script>
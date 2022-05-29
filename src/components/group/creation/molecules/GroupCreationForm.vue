<template>
  <div>
    <MDBInput
        v-model="group.name"
        size="sm"
        label="Name"
    />
    <MDBTextarea
        class="mt-2 form-control-sm"
        rows="2"
        label="Group description"
        placeholder="Please add a description to your group"
        v-model="group.description"></MDBTextarea>
    <div class="mt-2">
      <MDBCheckbox v-model="group.isProject" label="Make it a project?"/>
    </div>

    <div class="d-flex justify-content-end mt-3">
      <button
          v-on:click="createGroup(group)"
          class="btn btn-success btn-sm">Create</button>
    </div>
  </div>

</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {
  MDBTextarea,
  MDBInput,
  MDBCheckbox
} from 'mdb-vue-ui-kit';
import {Group} from "@/object/group";
import {GroupController} from "@/controller/GroupController";

@Options({
  name: "PostCreationForm",
  components: {
    MDBInput,
    MDBTextarea,
    MDBCheckbox
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

  private createGroup(group: Group): void {
    GroupController
        .createGroup(group)
        .then((res: any) => {
          this.$router.push(`/group/${res.uuid}`)
        })
  }
}
</script>
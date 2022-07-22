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
        v-model="group.description" />

    <div class="mt-2">
      <MDBCheckbox v-model="group.isProject" label="Make it a project?"/>
    </div>

    <div>
      Choose your language:
      <select class="form-control-sm select-language" :value="null" :disabled="!group.isProject" @change="v => group.langage = v.target.value.toLowerCase()">
        <option>C</option>
        <option>Rust</option>
      </select>
    </div>

    <div class="d-flex justify-content-end mt-3">
      <button
          v-on:click="$emit('submit')"
          class="btn btn-success btn-sm">Create</button>
    </div>
  </div>

</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {
  MDBTextarea,
  MDBInput,
  MDBCheckbox,
} from 'mdb-vue-ui-kit';
import {Group} from "@/object/Group";

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
}
</script>

<style>
.select-language {
  background-color: #FFFFFF;
  border: thin solid #333553;
  line-height: 1em;
  margin: 0;
  padding: 4px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
</style>

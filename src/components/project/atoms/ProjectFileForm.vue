<template>
  <form
      v-on:submit="createNewFile"
  >
    <MDBInput
        name="filename"
        class="form-control-sm"
        type="text"
        placeholder="Add a title to your post!"
        v-model="filename"
    />
    <MDBBtn
      type="submit"
    >
      CREATE
    </MDBBtn>
  </form>

</template>

<script setup lang="ts">

import {ref} from "vue";
import { MDBInput, MDBBtn } from "mdb-vue-ui-kit";

const filename = ref<string>('')

// eslint-disable-next-line no-undef
const createNewFile = (event: SubmitEvent) => {
  event.preventDefault()

  console.log(event.target);
  console.log(filename.value);
}
</script>

<style scoped>

</style>
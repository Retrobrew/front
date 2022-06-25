<template>
  <div class="group-banner-box">
    <img :src="link"/>
    <div>
      <div v-if="userIsCreator" class="d-flex justify-content-end mb-2">
        <MDBBtn class="btn-light me-2" v-on:click="$emit('delete-group')">
          Delete Group
          <MDBIcon
              class="ms-2"
              icon="trash"
              size="lg"
              data-toggle
          />
        </MDBBtn>
      </div>
      <div v-else class="d-flex justify-content-end mb-2 me-10">
        <div v-if="isMember">
          <MDBBtn class="btn-primary me-2" v-on:click="$emit('quit-group')">Quit Group</MDBBtn>
        </div>
        <div v-else>
          <MDBBtn class="btn-primary me-2" v-on:click="$emit('join-group')">Join Group</MDBBtn>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import { MDBBtn, MDBIcon } from 'mdb-vue-ui-kit'

@Options({
  components: {
    MDBBtn,
    MDBIcon
  },
  props:{
    link: String,
    userIsCreator: Boolean,
    isMember: Boolean
  }
})
export default class GroupBanner extends Vue {
}
</script>

<style scoped>
.group-banner-box {
  min-height: 150px;
  height: 20%;
  max-height: 400px;
  overflow: hidden;
  width: 100%;
}
.group-banner-box img {
  vertical-align: middle;
  margin: -25% 0;
  width: 100%;
}
</style>

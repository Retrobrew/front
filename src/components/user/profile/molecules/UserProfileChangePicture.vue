<template>
  <div class="user-profile-change-picture">
    <UserProfilePicture :key="newPicture" :link="newPicture" :user-uuid="userUuid" />
    <div v-if="!pictureSelected" class="text-center mb-3">
      <button
          v-on:click="changePicture"
          class="btn btn-sm btn-success">
        Upload
      </button>
      <input
          v-on:change="displayPicture($event)"
          ref="uploadField" style="display: none"
          type="file" class="hidden"
      />
    </div>
    <div v-else class="text-center mb-3">
      <a v-on:click="newPicture = null; pictureSelected = false"
         class="decline btn-close btn-rounded btn-sm btn me-2"
      ></a>
      <a
        v-on:click="uploadNewPicture"
        class="btn-sm btn small-icon-link btn-rounded bg-success btn-success"
      >
        <MDBIcon
            class="small-icon"
            icon="check"
            size="sm"
            data-toggle
        />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import UserProfilePicture from "@/components/user/common/atoms/UserProfilePicture.vue";
import APIController from "@/controller/APIController";
import { MDBIcon } from "mdb-vue-ui-kit";

@Options({
  name: "UserProfileChangePicture",
  components: {
    UserProfilePicture,
    MDBIcon
  },
  props: {
    userUuid: String
  }
})
export default class UserProfileChangePicture extends Vue {
  private pictureSelected = false;
  private newPicture: File | null = null;
  declare $refs: {
    uploadField: HTMLInputElement
  }

  private uploadNewPicture() {
    if(!this.newPicture){
      alert("Please select a picture")
      return;
    }
    APIController.changeAvatar(this.newPicture).then(() => {
      this.pictureSelected = false;
    })
  }

  changePicture() {
    this.$refs.uploadField.click();
  }

  displayPicture(event: any){
    this.pictureSelected = true;
    this.newPicture = event.target.files[0]
  }

}
</script>

<style scoped>
.user-profile-change-picture {
  display: flex;
  flex-direction: column;
  min-height: 40px;
  height: 20%;
  max-height: 240px;
  min-width: 40px;
  width: 20%;
  max-width: 240px;
}
.small-icon-link {
  max-height: 24px;
}
.small-icon {
  top: 50%;
  left: 50%;
  width: 10px;
  display: block;
}
</style>

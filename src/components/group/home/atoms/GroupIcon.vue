<template>
  <div class="group-icon-box my-container">
    <img :src="url">
    <div
        class="icon-float" v-on:click="changePicture">
        <MDBIcon
            icon="camera"
            size="lg"
            data-toggle
        />
    </div>
    <input
        v-on:change="displayPicture($event)"
        ref="uploadField" style="display: none"
        type="file" class="hidden"
    />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {MDBIcon} from 'mdb-vue-ui-kit'
import {GroupController} from "@/controller/GroupController";
import {User} from "@/object/User";
import {inject} from "vue";

@Options({
  components: {
    MDBIcon
  },
  props: {
    groupUuid: {
      type: String,
      required: true
    }
  }
})
export default class GroupIcon extends Vue {
  private user: User | undefined = inject('user');
  private groupUuid!: string;
  private showEditIcon = false;
  private url: string  = "";

  mounted() {
    if(this.user) {
      this.showEditIcon = true;
    }
    this.url = `${process.env.VUE_APP_AUTH_API_URL}/groups/${this.groupUuid}/icon`
  }
  declare $refs: {
    uploadField: HTMLInputElement
  }

  changePicture() {
    this.$refs.uploadField.click();
  }

  displayPicture(event: any){
    this.url = URL.createObjectURL(event.target.files[0]);
    GroupController.uploadIcon(event.target.files[0], this.groupUuid)
        .then()
  }
}
</script>

<style scoped>
.group-icon-box {
  margin: auto 0;
  min-height: 48px;
  height: 10%;
  max-height: 96px;
  min-width: 48px;
  width: 10%;
  max-width: 96px;
}
.group-icon-box img {
  border-radius: 8px;
  height: 100%;
  width: 100%;
  vertical-align: middle;
}

.icon-float {
  padding: 3px 7px 3px 7px;
  border-radius: 50%;
  bottom: -10px;
  right: -10px;
  position: absolute;
  cursor: pointer;
  background: #e4e6eb;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.2),0 2px 10px 0 rgba(0,0,0,.1);;
}

.my-container {
  position: relative;
}

.my-container img {
  display: block;
}
</style>

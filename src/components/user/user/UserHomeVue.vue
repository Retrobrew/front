<template>
  <HeaderVue />
  <div class="container mt-3 shadow-0">
    <MDBCard v-if="user">
      <MDBCardHeader class="mb-2 pb-2">
        <UserProfileHead :user-name="user.username" :age="userAge" :sex="userSex"/>
      </MDBCardHeader>
      <MDBCardBody class="pb-1">
        <UserBody
            :key="friendShipStatus"
            v-on:request-friendship="onRequestFriendship"
            v-on:unfriend="onUnfriend"
            v-on:cancel-request="onCancelRequest"
            :user-uuid="user.uuid"
            :friendship-status="friendShipStatus"
        />
      </MDBCardBody>
    </MDBCard>
    <div class="d-flex justify-content-center">
      <div class="flex-column">
        <FriendListVue
            :readonly="readonly"
            class="mt-3 me-2"/>
      </div>
      <GroupListVue
          :readonly="readonly"
          class="mt-3 ms-2"/>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import HeaderVue from "@/components/header/HeaderVue.vue";
import UserProfileHead from "@/components/user/common/molecules/UserProfileHead.vue";
import UserBody from "@/components/user/user/molecules/UserBody.vue";
import {User} from "@/object/User";
import APIController from "@/controller/APIController";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody
} from 'mdb-vue-ui-kit';
import {inject} from "vue";
import {FriendshipController} from "@/controller/FriendshipController";
import GroupListVue from "@/components/group/list/GroupListVue.vue";
import FriendListVue from "@/components/friend/list/FriendListVue.vue";

@Options({
  name: "UserHomeVue",
  components: {
    UserBody,
    UserProfileHead,
    HeaderVue,
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    GroupListVue,
    FriendListVue,
  }
})
export default class UserHomeVue extends Vue {
  private connectedUser: User | undefined = inject('user');
  private userUuid: string = "";
  private user: User | null = null;
  private userAge = "";
  private userSex = "";
  private friendShipStatus: string|null = null;
  private requestId: string|null = null;
  private readonly = true;


  mounted() {
    this.userUuid = this.$route.params['uuid'] as string;
    if(this.connectedUser) {
      APIController
          .getUserProfile(this.userUuid)
          .then((res: any) => {
            this.user = res.user as User;
            this.userAge = this.user.getAge().toString();
            if (this.user.gender === "Male") {
              this.userSex = "https://cdn-icons-png.flaticon.com/512/8016/8016421.png"
            } else {
              this.userSex = "https://cdn-icons-png.flaticon.com/512/949/949792.png"
            }
            this.friendShipStatus = res.friendshipStatus;
            this.requestId = res.requestId;
          });
      return;
    }

    APIController
        .getUser(this.userUuid)
        .then((res) => {
          this.user = res;
          this.userAge = this.user.getAge().toString();
          if (this.user.gender === "Male") {
            this.userSex = "https://cdn-icons-png.flaticon.com/512/8016/8016421.png"
          } else {
            this.userSex = "https://cdn-icons-png.flaticon.com/512/949/949792.png"
          }
        })
  }

  private onRequestFriendship(){
    this.friendShipStatus =  'pending';
    FriendshipController.requestFriendship(this.userUuid)
      .then((requestId: any) => {
        this.requestId = requestId
      })
      .catch(error => {
        // console.error(error)
      })
  }

  private onCancelRequest(){
    this.friendShipStatus = null;
    if(!this.requestId) {
      alert('could not cancel request. You can try and reload the page.')
      return;
    }

    FriendshipController.cancelRequest(this.requestId)
      .then(() => this.requestId = null)
      .catch(error => {
        // console.error(error)
      })
  }

  private onUnfriend(){
    this.friendShipStatus = null;
    FriendshipController.unfriend(this.userUuid)
        .then((res) => {
        })
        .catch(error => {
          //console.error(error)
        })
  }
}
</script>

<style scoped>
#user-profile {
  box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important;
  border-radius: 8px;
  margin: 24px auto;
}
</style>

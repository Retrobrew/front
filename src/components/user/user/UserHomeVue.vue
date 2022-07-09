<template>
  <HeaderVue />
  <div class="container mt-3 shadow-0">
    <MDBCard v-if="user">
      <MDBCardHeader class="mb-2 pb-2">
        <UserProfileHead :user-name="user.username" :description="userDescription"/>
      </MDBCardHeader>
      <MDBCardBody class="pb-1">
        <UserBody
            v-on:request-friendship="onRequestFriendship"
            :user-picture="user.picture"
            :friendship-status="friendShipStatus"
        />
      </MDBCardBody>
    </MDBCard>
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

@Options({
  name: "UserHomeVue",
  components: {
    UserBody,
    UserProfileHead,
    HeaderVue,
    MDBCard,
    MDBCardHeader,
    MDBCardBody
  }
})
export default class UserHomeVue extends Vue {
  private connectedUser: User | undefined = inject('user');
  private userUuid: string = "";
  private user: User | null = null;
  private userDescription = "";
  private friendShipStatus: string|null = null;

  mounted() {
    this.userUuid = this.$route.params['uuid'] as string;
    if(this.connectedUser) {
      APIController
          .getUserProfile(this.userUuid)
          .then((res: any) => {
            this.user = res.user as User;
            this.userDescription = `${ this.user.sex } - ${ this.user.getAge() }`;
            console.log(this.userDescription)
            this.friendShipStatus = res.friendshipStatus;
          });
      return;
    }

    APIController
        .getUser(this.userUuid)
        .then((res) => {
          this.user = res;
          this.userDescription = `${ this.user.sex } - ${ this.user.getAge() }`
        })
  }

  private onRequestFriendship(){
    FriendshipController.requestFriendship(this.userUuid)
        .then((res) => {
          // console.log(res);
        })
        .catch(error => console.error(error))
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

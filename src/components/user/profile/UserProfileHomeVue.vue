<template>
  <HeaderVue />
  <div class="container mt-3 shadow-0">
    <MDBCard v-if="user.uuid">
      <MDBCardHeader class="mb-2 pb-2">
        <UserProfileHead :user-name="user.username" :age="userAge" :sex="userSex"/>
      </MDBCardHeader>
      <MDBCardBody class="pb-1">
        <UserProfileBody
            :user-uuid="user.uuid"
            :password-name="passwordName"
            :password-value="passwordValue"
            :password-confirm-name="passwordConfirmName"
            :mail-name="mailName"
            :mail-value="user.mail"
            :countries-name="countriesName"
            :country-value="countryValue"
        />
      </MDBCardBody>
    </MDBCard>
  <div class="d-flex justify-content-center">
    <div class="flex-column">
      <FriendRequestListVue
          v-on:accepted="reload = !reload"
          class="mt-3 me-2"
      />
      <FriendListVue
          :key="reload"
          class="mt-3 me-2"
      />
    </div>
    <GroupListVue class="mt-3 ms-2"/>
  </div>
  </div>

</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import HeaderVue from "@/components/header/HeaderVue.vue";
import UserProfileHead from "@/components/user/common/molecules/UserProfileHead.vue";
import UserProfileBody from "@/components/user/profile/molecules/UserProfileBody.vue";
import FriendListVue from "@/components/friend/list/FriendListVue.vue";
import GroupListVue from "@/components/group/list/GroupListVue.vue";
import {User} from "@/object/User";
import {inject} from "vue";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody
} from 'mdb-vue-ui-kit'
import FriendRequestListVue from "@/components/friend/list-request/FriendRequestListVue.vue";

@Options({
  name: "UserProfileHomeVue",
  components: {
    FriendRequestListVue,
    GroupListVue,
    FriendListVue,
    UserProfileBody,
    UserProfileHead,
    HeaderVue,
    MDBCard,
    MDBCardHeader,
    MDBCardBody
  }
})
export default class UserProfileHomeVue extends Vue {
  private user: User | undefined = inject('user');
  private passwordName = "Password";
  private passwordConfirmName = "Confirm Password";
  private passwordValue = "P4$$w0rd";
  private mailName = "Email address";
  private countriesName = "Country";
  private countryValue = "France";
  private reload = false;
  private userAge = "";
  private userSex = "";

  mounted() {
    if(!this.user) {
      return;
    }

    if (this.user.gender === "Male") {
      this.userSex = "https://cdn-icons-png.flaticon.com/512/8016/8016421.png"
    } else {
      this.userSex = "https://cdn-icons-png.flaticon.com/512/949/949792.png"
    }

    this.userAge = this.user.getAge().toString();
  }
}

</script>

<style scoped>
.user-list {
  display: flex;
  justify-content: center;
}
</style>

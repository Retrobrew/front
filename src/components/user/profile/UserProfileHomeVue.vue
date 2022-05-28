<template>
  <HeaderVue />
  <div class="container mt-3 shadow-0">
    <MDBCard>
      <MDBCardHeader class="mb-2 pb-2">
        <UserProfileHead :user-name="user.username" :description="user.sex + ' - 78'"/>
      </MDBCardHeader>
      <MDBCardBody class="pb-1">
        <UserProfileBody
            :user-picture="user.picture"
            :password-name="passwordName"
            :password-value="passwordValue"
            :password-confirm-name="passwordConfirmName"
            :mail-name="mailName"
            :mail-value="user.mail"
            :countries-name="countriesName"
            :countries="countries"
            :country-value="countryValue"
        />
      </MDBCardBody>
    </MDBCard>
  <div class="d-flex justify-content-center">
    <FriendListVue class="mt-3 me-2"/>
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

@Options({
  name: "UserProfileHomeVue",
  components: {
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
  private countries = [
    "Belgium",
    "Denmark",
    "Finland",
    "France",
    "Germany",
    "Poland",
    "Netherlands",
    "Norway",
    "Sweden",
    "United Kingdom"
  ];
}

</script>

<style scoped>
.user-list {
  display: flex;
  justify-content: center;
}
</style>

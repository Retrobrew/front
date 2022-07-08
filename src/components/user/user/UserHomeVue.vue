<template>
  <HeaderVue />
  <div
      id="user-profile"
      class="main-vue"
      v-if="user"
  >
    <UserProfileHead :user-name="user.username" :description="userDescription"/>
    <UserBody :user-picture="user.picture"/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import HeaderVue from "@/components/header/HeaderVue.vue";
import UserProfileHead from "@/components/user/common/molecules/UserProfileHead.vue";
import UserBody from "@/components/user/user/molecules/UserBody.vue";
import {User} from "@/object/User";
import APIController from "@/controller/APIController";

@Options({
  name: "UserHomeVue",
  components: {UserBody, UserProfileHead, HeaderVue}
})
export default class UserHomeVue extends Vue {
  private userUuid: string = "";
  private user: User | null = null;
  private userDescription = "";

  mounted() {
    this.userUuid = this.$route.params['uuid'] as string;

    APIController
        .getUserProfile(this.userUuid)
        .then((res) => {
          this.user = res;
          this.userDescription = `${ this.user.sex } - ${ this.user.getAge() }`
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

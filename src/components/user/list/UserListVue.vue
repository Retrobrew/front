<template>
  <div id="user-list" class="container mt-3 shadow-0">
    <div class="card">
      <div class="card-header mb-2 pb-2 text-center h2">
        Everyone is here
      </div>
      <div class="card-body">
        <div v-if="users.length > 0">
          <div v-for="friend in users" v-bind:key="friend.uuid">
            <UserListCard
                v-bind:friend="friend"
            />
          </div>
        </div>
        <div v-else>
          <p class="text-center">Looks like you're alone :/</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import FriendListTitle from "@/components/friend/list/atoms/FriendListTitle.vue";
import APIController from "@/controller/APIController";
import {Friend} from "@/object/Friend";
import UserListCard from "@/components/user/list/UserListCard.vue";

@Options({
  name: "UserListVue",
  components: {
    UserListCard,
    FriendListTitle,
  }
})
export default class UserListVue extends Vue {
  private users: Array<Friend> = [];

  mounted() {
    APIController.getAllUsers()
      .then((users) => {
        this.users = users;
      })
      .catch((reason) => {
        //TODO afficher un message d'erreur;
        console.error(reason);
      });

  }
}
</script>

<style scoped>
/*#friend-list {*/
/*  box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important;*/
/*  border-radius: 8px;*/
/*  max-width: 580px;*/
/*}*/
</style>

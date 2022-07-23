<template>
  <div id="friend-list" class="main-vue">
    <FriendListTitle />
    <div v-if="friends.length > 0">
      <div v-for="friend in friends" v-bind:key="friend.uuid">
        <FriendListCard
            v-bind:friend="friend"
            v-on:delete-friend="deleteFriend($event)"
        />
      </div>
    </div>
    <div v-else>
      <p class="text-center">You don't have any friends yet :/</p>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import FriendListTitle from "@/components/friend/list/atoms/FriendListTitle.vue";
import FriendListCard from "@/components/friend/list/molecules/FriendListCard.vue";
import {Friend} from "@/object/Friend";
import {FriendshipController} from "@/controller/FriendshipController";
import countryList from "@/utils/countries.json";

@Options({
  name: "FriendListVue",
  components: {
    FriendListCard,
    FriendListTitle,
  }
})
export default class FriendListVue extends Vue {
  private friends: Array<Friend> = [];
  private countries = countryList;

  mounted() {
    FriendshipController.getMyFriends()
      .then((friends) => {
        this.friends = friends;
        this.friends.forEach((friend) => {
          friend.country = this.countries.find((country) => country.name === friend.country)?.image ?? "";
        });
      })
      .catch((reason) => {
        //TODO afficher un message d'erreur;
        // console.error(reason);
      });
  }

  deleteFriend(friendUuid: string){
    const friend = this.friends.find(friend => friend.uuid === friendUuid);
    if(friend){
      this.friends.splice(this.friends.indexOf(friend), 1)
    }
  }
}
</script>

<style scoped>
#friend-list {
  box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important;
  border-radius: 8px;
  max-width: 580px;
}
</style>

<template>
  <div id="friend-list" class="main-vue shadow card">
    <div class="text-center p-3 friend-list-title">Friend requests</div>
    <div v-if="requests.length > 0">
      <div v-for="request in requests" v-bind:key="request.requestId">
        <FriendRequestListCard
            :key="requests"
            v-bind:request="request"
            v-on:reject-friend-request="updateRequestsList($event)"
            v-on:accept-friend-request="updateRequestsList($event); $emit('accepted')"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {FriendshipController} from "@/controller/FriendshipController";
import {FriendRequest} from "@/object/FriendRequest";
import FriendRequestListCard from "@/components/friend/list-request/molecules/FriendRequestListCard.vue";

@Options({
  name: "FriendRequestListVue",
  components: {
    FriendRequestListCard,
  }
})
export default class FriendRequestListVue extends Vue {
  private requests: Array<FriendRequest> = [];

  mounted() {
    FriendshipController.getFriendRequests()
      .then((res) => {
        this.requests = res;
      })
      .catch((reason) => {
        //TODO afficher un message d'erreur;
        console.error(reason);
      });
  }

  private updateRequestsList(requestId: number) {
    const index = this.requests.findIndex(item => {
      return item.requestId === requestId
    });

    if(index === -1){
      return;
    }

    this.requests.splice(index,1);
  }
}
</script>

<style scoped>
#friend-list {
  border-radius: 8px;
  max-width: 580px;
}
.friend-list-title {
  font-size: 1.8em;
}
</style>

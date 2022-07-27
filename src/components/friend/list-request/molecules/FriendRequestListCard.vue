<template>
  <div class="friend-list-card d-flex justify-content-between">
    <FriendListPicture :link="request.requester.picture" :user-uuid="request.requester.uuid"/>
    <router-link :to="{name: 'friend', params:{uuid: request.requester.uuid}}" class="pt-2">
      <p>{{request.requester.username}}</p>
    </router-link>
    <div class="friend-list-card-action">
      <a v-on:click="decline(request.requestId)" class="decline btn-close btn-rounded btn-sm btn me-2"></a>
      <a v-on:click="accept(request.requestId)" class="btn-sm btn small-icon-link btn-rounded bg-success btn-success">
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
import FriendListPicture from "@/components/friend/list/atoms/FriendListPicture.vue";
import FriendListName from "@/components/friend/list/atoms/FriendListName.vue";
import FriendListRemove from "@/components/friend/list/atoms/FriendListRemove.vue";
import {FriendRequest} from "@/object/FriendRequest";
import { MDBIcon } from "mdb-vue-ui-kit"
import {FriendshipController} from "@/controller/FriendshipController";

@Options({
  name:"FriendRequestListCard",
  components: { FriendListRemove, FriendListName, FriendListPicture, MDBIcon },
  props: {
    request: FriendRequest
  }
})
export default class FriendRequestListCard extends Vue {
  private decline(requestId: number) {
    FriendshipController
      .declineRequest(requestId)
        .then(res => {
          if(res){
            this.$emit('reject-friend-request', requestId)
          }
        })
      .catch(error => {
        // console.error(error);
        alert("Could not handle this friend request")
      })
  }
  private accept(requestId: number) {
    FriendshipController
      .acceptRequest(requestId)
      .then(res => {
        if(res){
          this.$emit('accept-friend-request', requestId);
        }
      })
      .catch(error => {
        // console.error(error);
        alert("Could not handle this friend request")
      })
  }
}
</script>

<style scoped>
.friend-list-card {
  display: flex;
  justify-content: space-between;
  padding: 24px 48px;
}
.friend-list-card a {
  margin: auto 0;
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
.decline {
  background-color: #e4e6eb
}
.friend-list-card-action {
  margin: auto 0;
}
</style>

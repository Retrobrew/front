<template>
  <MDBNavbar expand="lg" dark bg="light" container>
    <router-link to="/">
      <img src="../../assets/placeholder_logo.png" alt="" loading="lazy" />
    </router-link>
    <MDBNavbarNav class="ms-2">
      <MDBNavbarItem>
        <a href="https://retrobrew.fr/android/retrobrew.apk" target="_blank" class="btn btn-rounded btn-primary">
          <i class="fab fa-android me-1" />
          Get the app !
        </a>
      </MDBNavbarItem>
    </MDBNavbarNav>
    <MDBNavbarToggler target="#navbarLeftAlignExample" @click="collapse4 = !collapse4" />
    <MDBCollapse v-model="collapse4" id="navbarLeftAlignExample">
      <MDBNavbarNav center>
        <!-- Left links -->
<!--        <form class="d-flex input-group w-50">-->
<!--          <input type="search" class="form-control" placeholder="Search a game..." aria-label="Search" />-->
<!--        </form>-->
        <!-- Left links -->
      </MDBNavbarNav>
      <MDBNavbarNav v-if="!user" right class="mt-1 me-2 w-25" style="justify-content: flex-end">
        <router-link to="/login" class="nav-link">
          <MDBNavbarItem class="ps-2">
            Login
          </MDBNavbarItem>
        </router-link>
        <router-link to="/register" class="nav-link">
          <MDBNavbarItem class="ps-2">
            Register
          </MDBNavbarItem>
        </router-link>
      </MDBNavbarNav>
      <MDBNavbarNav right v-else class="mt-1 me-2 w-75"  style="justify-content: flex-end">
        <div v-if="onFeed" class="mt-auto mb-auto">
          <div v-if="myFeed" class="mt-auto mb-auto">
            <MDBNavbarItem class="ps-1 link" v-on:click="loadHomeFeed">
              Home feed
            </MDBNavbarItem>
          </div>
          <div v-else class="mt-auto mb-auto">
            <MDBNavbarItem class="ps-1 link" v-on:click="loadMyFeed">
              My feed
            </MDBNavbarItem>
          </div>
        </div>
        <router-link to="/find-friends" class="nav-link">
          <MDBNavbarItem class="ps-1">
            Friends
          </MDBNavbarItem>
        </router-link>
        <router-link to="/find-groups" class="nav-link">
          <MDBNavbarItem class="ps-1">
            Groups
          </MDBNavbarItem>
        </router-link>
        <router-link to="/profile" class="nav-link">
          <MDBNavbarItem class="ps-1">
            Profile
          </MDBNavbarItem>
        </router-link>
        <a v-on:click="logout" class="nav-link link">
          <MDBNavbarItem class="ps-1">
            Logout
          </MDBNavbarItem>
        </a>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
</template>

<script lang="ts">
import {
  MDBBtn,
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCardLink
} from 'mdb-vue-ui-kit';
import {Options, Vue} from "vue-class-component";
import {inject} from "vue";
import {User} from "@/object/User";
import APIController from "@/controller/APIController";

@Options({
  title:"Retrobrew",
  components: {
    MDBBtn,
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCardLink
  },
})
export default class HeaderVue extends Vue {
  private collapse4 = false;
  private user: User | undefined = inject('user');
  private myFeed = false;
  private onFeed = false;

  mounted() {
    this.onFeed = this.$route.name == 'home';
  }

  logout(){
    APIController.logout();
  }

  loadHomeFeed(){
    this.myFeed=false;
    this.$emit('loadHomeFeed');
  }

  loadMyFeed(){
    this.myFeed=true;
    this.$emit('loadMyFeed');
  }

}
</script>

<style scoped>
.navbar {
  background-color: #333553!important;
  color: white!important;
}
</style>

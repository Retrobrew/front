<template>
  <MDBNavbar expand="lg" dark bg="light" container>
    <MDBNavbarBrand href="/">
      <img src="../../assets/placeholder_logo.png" alt="" loading="lazy" />
    </MDBNavbarBrand>
    <MDBNavbarToggler target="#navbarLeftAlignExample" @click="collapse4 = !collapse4" />
    <MDBCollapse v-model="collapse4" id="navbarLeftAlignExample">
      <MDBNavbarNav center>
        <!-- Left links -->
        <form class="d-flex input-group w-50">
          <input type="search" class="form-control" placeholder="Search a game..." aria-label="Search" />
        </form>
        <!-- Left links -->
      </MDBNavbarNav>

      <MDBNavbarNav right class="w-25 justify-content-end">
        <div v-if="!user">
          <a href="/login">
            <MDBBtn color="success" class="me-2">Login</MDBBtn>
          </a>
          <a href="/register">
            <MDBBtn color="danger">Register</MDBBtn>
          </a>
        </div>
        <div v-else>
          <a href="/profile">
            <MDBBtn color="success" class="me-2">Profile</MDBBtn>
          </a>
        </div>
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
  MDBDropdownItem
} from 'mdb-vue-ui-kit';
import {Options, Vue} from "vue-class-component";
import {inject} from "vue";
import {User} from "@/object/User";

@Options({
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
    MDBDropdownItem
  },
})
export default class HeaderVue extends Vue {
  private collapse4 = false;
  private user: User | undefined = inject('user');

}
</script>

<style scoped>
.navbar {
  background-color: #333553!important;
  color: white!important;
}
</style>

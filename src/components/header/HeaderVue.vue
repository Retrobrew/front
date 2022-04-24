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
        <a href="/login">
          <MDBBtn color="success" class="me-2">Login</MDBBtn>
        </a>
        <a href="/register">
          <MDBBtn color="danger">Register</MDBBtn>
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
  MDBDropdownItem
} from 'mdb-vue-ui-kit';
import {Options, Vue} from "vue-class-component";
import {inject, provide} from "vue";
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
  private isLoginValid: boolean = false;
  private user = inject('user');

  mounted() {
    const token = sessionStorage.getItem('access_token');
    if (token === undefined) {
      this.isLoginValid = false;
    } else {
      fetch(`${process.env.VUE_APP_AUTH_API_URL}/profile`, {
        headers: { Authorization: "Bearer " + token }
      })
      .then(response => {
        if (response.status !== 200) {
          throw new Error("Connexion expired");
        }
        return response.json();
      })
      .then(json => {
        fetch(`${process.env.VUE_APP_AUTH_API_URL}/users/${json.userId}`, {
          headers: { Authorization: "Bearer " + token }
        })
        .then(response => response.json())
        .then(json => {
          this.user = new User(json.email, json.username, new Date(), "", "", "")
          provide('user', this.user);
          console.log(this.user)
        })
      })
      .catch(err => console.error(err));
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: #2e3154!important;
  color: white!important;
}
</style>

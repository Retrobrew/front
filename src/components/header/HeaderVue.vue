<template>
  <MDBNavbar expand="lg" dark bg="light" container>
    <MDBNavbarBrand href="#">
      <img
          src="../../assets/placeholder_logo.png"
          alt=""
          loading="lazy"
      />
    </MDBNavbarBrand>
    <MDBNavbarToggler
    target="#navbarLeftAlignExample"
    @click="collapse4 = !collapse4"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapse4" id="navbarLeftAlignExample">
      <MDBNavbarNav center>
        <!-- Left links -->
        <form class="d-flex input-group w-50">
          <input
              type="search"
              class="form-control"
              placeholder="Search a game..."
              aria-label="Search"
          />
        </form>
        <!-- Left links -->
      </MDBNavbarNav>

      <MDBNavbarNav right class="w-25 justify-content-end">
        <MDBBtn color="success" class="me-2"> Login </MDBBtn>
        <MDBBtn color="danger"> Register </MDBBtn>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
</template>

<script>
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
import { ref } from 'vue';
export default {
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
  setup() {
    const collapse4 = ref(false);
    const dropdown7 = ref(false);
    return {
      collapse4,
      dropdown7
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #2e3154!important;
  color: white!important;
}
</style>

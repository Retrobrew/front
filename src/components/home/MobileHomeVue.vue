<template>
  <div class="mobile-home-vue">
    <img src="../../assets/placeholder_logo.png" alt="" loading="lazy" />
    <p>
      We highly recommend that you browse our website from our official app for better experience on your mobile device !
    </p>
    <a href="https://retrobrew.fr/android/retrobrew.apk" target="_blank" class="btn btn-rounded btn-primary">
      <i class="fab fa-android" />
      Get the app!
    </a>
  </div>
</template>

<script>
export default {
  name: "MobileHomeVue"
}
</script>

<style scoped>
.mobile-home-vue {
  background-color: #333553;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #FFFFFF;
}
.mobile-home-vue img {
  height: auto;
  width: 70vw;
}
.mobile-home-vue p {
  text-align: center;
  margin: 5vh 5vw;
}
</style>

<template>
  <div class="text-center mb-3">
    <button
        v-on:click="$emit('changePicture')"
        class="btn btn-sm btn-success">
      {{label}}
    </button>
  </div>

</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "UserProfileButton",
  props: {
    label: String,
  }
})
export default class UserProfileButton extends Vue {
}
</script>

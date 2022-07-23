<template>
  <div class="field">
    <p>{{fieldName}}</p>
    <select class="form-select user-register-fields-input" :value="value">
      <option v-for="(item, index) in countries" v-bind:key="index">
        {{item.name}}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import countryList from "@/utils/countries.json";

@Options({
  name: "UserProfileSelector",
  props: {
    fieldName: String,
    list: Array,
    value: String,
  }
})
export default class UserProfileSelector extends Vue {
  private countries = countryList;
}
</script>

<style scoped>
.field {
  margin: 16px 8px;
}
.field p {
  margin: 0;
  padding: 0;
}
</style>

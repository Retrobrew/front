<template>
  <div>
    <div v-if="label" class="post-tag tag link">
      <p>{{label}}</p>
    </div>
    <div v-else class="disabled-tag tag">
      <p>
        {{groupDeleted}}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  props: {
    label: {
      type: String
    }
  }
})
export default class PostLabel extends Vue{
  private groupDeleted = "This group was deleted"
}
</script>

<style scoped>
.post-tag {
  background-color: #8b8bff;
}

.post-tag:hover {
  box-shadow: 0 4px 10px 0 rgba(0,0,0,.2),0 4px 20px 0 rgba(0,0,0,.1);
}

.tag {
  margin: 8px;
  padding: 4px 15px;
  border-radius: 10px;
}
.tag p {
  margin: 0;
  padding: 0;
  color: #F0F0F0;
}

.disabled-tag {
  padding: 4px 20px 4px 15px;
  background-color: #8b8bff95;
  font-style: italic;
}

</style>

<template>
  <div>
    <div v-if="label" class="post-tag tag link" :class="'post-tag-' + label.charAt(0).toLowerCase()">
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
}

.post-tag-a {
  background-color: rgb(226, 95, 81);
}

.post-tag-b {
  background-color: rgb(242, 96, 145);
}

.post-tag-c {
  background-color: rgb(187, 101, 202);
}

.post-tag-d {
  background-color: rgb(149, 114, 207);
}

.post-tag-e {
  background-color: rgb(120, 132, 205);
}

.post-tag-f {
  background-color: rgb(91, 149, 249);
}

.post-tag-g {
  background-color: rgb(72, 194, 249);
}

.post-tag-h {
  background-color: rgb(69, 208, 226);
}

.post-tag-i {
  background-color: rgb(38, 166, 154);
}

.post-tag-j {
  background-color: rgb(82, 188, 137);
}

.post-tag-k {
  background-color: rgb(155, 206, 95);
}

.post-tag-l {
  background-color: rgb(212, 227, 74);
}

.post-tag-m {
  background-color: rgb(254, 218, 16);
}

.post-tag-n {
  background-color: rgb(247, 192, 0);
}

.post-tag-o {
  background-color: rgb(255, 168, 0);
}

.post-tag-p {
  background-color: rgb(255, 138, 96);
}

.post-tag-q {
  background-color: rgb(194, 194, 194);
}

.post-tag-r {
  background-color: rgb(143, 164, 175);
}

.post-tag-s {
  background-color: rgb(162, 136, 126);
}

.post-tag-t {
  background-color: rgb(163, 163, 163);
}

.post-tag-u {
  background-color: rgb(175, 181, 226);
}

.post-tag-v {
  background-color: rgb(179, 155, 221);
}

.post-tag-w {
  background-color: rgb(194, 194, 194);
}

.post-tag-x {
  background-color: rgb(124, 222, 235);
}

.post-tag-y {
  background-color: rgb(188, 170, 164);
}

.post-tag-z {
  background-color: rgb(173, 214, 125);
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

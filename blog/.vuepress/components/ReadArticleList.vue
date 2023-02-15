<template>
  <div>
    <Article v-for="item in read" :title="item.title" :path="item.path" :date="item.frontmatter?.date" />
  </div>
</template>
<script>

import Article from "./Article.vue";
import {filterRead} from "../utils";

export default {
  name: "ReadArticleList",
  component: {
    Article
  },
  computed: {
    read: function () {
      return filterRead(this.list)
    }
  },
  props: ['list'],
  created() {
    console.log(this.read)
  }
}
</script>

<style scoped>

</style>
<template>
  <div>
    <Note v-for="item in notes" :title="item.title" :path="item.path" :date="item.frontmatter?.date" :tags="item.frontmatter?.tags" />
  </div>
</template>
<script>

import Note from "./Note.vue";
import {filterNotes} from "../utils";

export default {
  name: "NoteList",
  component: {
    Note
  },
  computed: {
    notes: function () {
      return filterNotes(this.list)
    }
  },
  props: ['list'],
}
</script>

<style scoped>

</style>
<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>This event was created by {{ user.id }}</p>
    <p>There are {{ getEvent(1) }} categories</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    catLength() {
      return this.$store.getters.catLength
    },
    getEvent() {
      return this.$store.getters.getEventById
    },
    ...mapState(['user', 'categories'])
  }
}
</script>

<style scoped></style>

<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>This event was created by {{ user.id }}</p>
    <p>{{ getEventById(1) }}</p>
    <VuexCh4 />
  </div>
</template>

<script>
import VuexCh4 from '@/components/VuexCh4.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    VuexCh4
  },
  computed: {
    ...mapGetters(['getEventById']),
    ...mapState(['user', 'categories'])
  }
}
</script>

<style scoped></style>

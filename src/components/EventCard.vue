<template>
  <router-link
    class="event-link"
    :to="{ name: 'event-show', params: { id: '1' } }"
  >
    <div class="event-card -shadow">
      <!-- Skelaton -->
      <!-- HTML -->
      <span class="eyebrow">@{{ event.time }} on {{ event.data }}</span>
      <h4>{{ event.title }}</h4>
      <BaseIcon name="users">{{ event.attendees.length }} attending</BaseIcon>
      <!-- <BaseIcon name="users"><p slot="eiei"></p></BaseIcon> -->
    </div>
  </router-link>
</template>

<script>
export default {
  // Brain
  // JS
  data() {
    return {
      event: {
        id: 1,
        title: 'Beach Cleanup',
        data: 'Tues Aug 19, 2018',
        time: '6:00',
        attendees: [
          { id: 'abc123', name: 'Adam Jahr' },
          { id: 'def456', name: 'Greeg Pollac' }
        ]
      }
    }
  }
}
</script>

<style scoped>
/* Dress */
/* CSS */
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>

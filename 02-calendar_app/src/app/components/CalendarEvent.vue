<template>
  <div class="day-event" :style="getEventBackgroundColor">
    <div v-if="!event.edit">
      <span class="has-text-centered details">{{ event.details }}</span>
      <div class="has-text-centered icons">
        <i
          class="fa fa-pencil-square edit-icon"
          @click="editEvent(day.id, event.details)"
        ></i>
        <i
          class="fa fa-trash-o delete-icon"
          @click="deleteEvent(day.id, event.details)"
        ></i>
      </div>
    </div>
    <div v-else>
      <input :placeholder="event.details" v-model="newEventDetails" />
      <div class="has-text-centered icons">
        <i
          class="fa fa-check"
          @click="updateEvent(day.id, event.details, newEventDetails)"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  name: "CalendarEvent",
  props: ["day", "event"],
  data() {
    return {
      newEventDetails: "",
    };
  },
  methods: {
    editEvent(dayId, eventDetails) {
      store.editEvent(dayId, eventDetails);
    },
    updateEvent(dayId, originalEventDetails, updatedEventDetails) {
      // if the updatedEventDetails is empty,
      // we’ll assume the user aims to keep his original event details
      if (!updatedEventDetails) updatedEventDetails = originalEventDetails;
      store.updateEvent(dayId, originalEventDetails, updatedEventDetails);
      this.newEventDetails = "";
    },
    deleteEvent(dayId, eventDetails) {
      store.deleteEvent(dayId, eventDetails)
    },
  },
  computed: {
    // returns a random color from an array to be used as the bg color for an event
    getEventBackgroundColor() {
      const colors = ["#FF9999", "#85D6FF", "#99FF99"];
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      return `background-color: ${randomColor}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.day-event {
  margin-top: 6px;
  margin-bottom: 6px;
  display: block;
  color: #4c4c4c;
  padding: 5px;
  .details {
    display: block;
  }
  .icons .fa {
    padding: 0 2px;
  }
  input {
    background: none;
    border: 0;
    border-bottom: 1px solid #fff;
    width: 100%;
    &:focus {
      outline: none;
    }
  }
}
</style>

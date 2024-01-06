<template>
  <div id="calendar-week" class="container">
    <!-- Markup for calendar week -->
    <div class="columns is-mobile">
      <div class="day column">
        <div class="day-banner has-text-white has-text-centered">Mon</div>
        <div class="day-details">
          <div class="day-number">1</div>
          <div class="day-event" style="background: #99ff99">
            <div v-if="true">
              <span class="has-text-centered details">Get Groceries</span>
              <div class="has-text-centered icons">
                <i class="fa fa-pencil-square edit-icon"></i>
                <i class="fa fa-trash-o delete-icon"></i>
              </div>
            </div>
            <div v-if="false">
              <input type="text" placeholder="Get Groceries" />
              <div class="has-text-centered icons">
                <i class="fa fa-check"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns is-mobile">
      <div class="day column">
        <div class="day-banner has-text-white has-text-centered">Tue</div>
        <div class="day-details">
          <div class="day-number">2</div>
        </div>
      </div>
    </div>
    <div class="columns is-mobile">
      <div class="day column">
        <div class="day-banner has-text-white has-text-centered">WED</div>
        <div class="day-details">
          <div class="day-number">3</div>
        </div>
      </div>
    </div>
    <div class="columns is-mobile">
      <div class="day column">
        <div class="day-banner has-text-white has-text-centered">THU</div>
        <div class="day-details">
          <div class="day-number">4</div>
        </div>
      </div>
    </div>
    <div class="columns is-mobile">
      <div class="day column">
        <div class="day-banner has-text-white has-text-centered">FRI</div>
        <div class="day-details">
          <div class="day-number">5</div>
          <div class="day-event" style="background: #ff9999">
            <div v-if="true">
              <span class="has-text-centered details"
                >Friday dinner/drinks</span
              >
              <div class="has-text-centered icons">
                <i class="fa fa-pencil-square edit-icon"></i>
                <i class="fa fa-trash-o delete-icon"></i>
              </div>
            </div>
            <div v-if="false">
              <input type="text" placeholder="Friday dinner/drinks" />
              <div class="has-text-centered icons">
                <i class="fa fa-check"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns is-mobile">
      <div class="day column">
        <div class="day-banner has-text-white has-text-centered">SAT</div>
        <div class="day-details">
          <div class="day-number">6</div>
        </div>
      </div>
    </div>
    <div class="columns is-mobile">
      <div class="day column">
        <div class="day-banner has-text-white has-text-centered">SUN</div>
        <div class="day-details">
          <div class="day-number">7</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarWeek",
};
</script>

<style lang="scss" scoped>
#calendar-week {
  margin-bottom: 50px;

  .column {
    padding: 0 0 0 0;
  }
  .day {
    background-color: #4a4a4a;
    color: #fff;
    border-left: 1px solid #8f8f8f;
    border-bottom: 1px solid #8f8f8f;
    font-size: 12px;
    cursor: pointer;

    &:hover {
      background: darken(#4a4a4a, 3%);
    }

    .day-banner {
      background-color: #333333;
      color: #fff;
      padding: 10px;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 12px;
      font-weight: 600;
    }

    .day-details {
      padding: 10px;
    }

    &:last-child {
      border-right: 1px solid #8f8f8f;
    }
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
  }
}
</style>

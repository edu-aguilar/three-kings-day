<template>
  <div class="home-view">
    <div class="home">
      <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
      <h1 class="home__header">
        Los Reyes Magos de Oriente te han traído 3 regalos, ¿Cuál prefieres
        abrir primero?
      </h1>
      <transition name="fade" mode="out-in">
        <div v-show="showPresentsList" class="home__presents-list">
          <b-button
            :disabled="present1Done"
            class="happy-button"
            @click="goTo('present1')"
            >Regalo 1 <span>🎁</span></b-button
          >
          <b-button
            :disabled="present2Done"
            class="happy-button"
            @click="goTo('present2')"
            >Regalo 2 <span>🎁</span></b-button
          >
          <b-button
            :disabled="present3Done"
            class="happy-button"
            @click="goTo('present3')"
            >Regalo 3 <span>🎁</span></b-button
          >
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function () {
    return {
      showPresentsList: false,
      present1Done: false,
      present2Done: false,
      present3Done: false,
    };
  },
  mounted: function () {
    this.handleDonePresents();

    setTimeout(() => {
      this.showPresentsList = true;
    }, 1500);
  },
  methods: {
    goTo: function (route) {
      this.$router.push(route);
    },
    handleDonePresents: function () {
      const present1Status = window.localStorage.getItem("present1");
      const present2Status = window.localStorage.getItem("present2");
      const present3Status = window.localStorage.getItem("present3");

      if (present1Status !== null) {
        this.present1Done = true;
      }

      if (present2Status !== null) {
        this.present2Done = true;
      }

      if (present3Status !== null) {
        this.present3Done = true;
      }

      const arePresentsFinished =
        this.present1Done && this.present2Done && this.present3Done;

      if (arePresentsFinished) {
        this.$router.push("/finish");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home-view {
  height: 100%;

  .home {
    height: 100%;

    margin-top: 5rem;

    &__header {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    &__presents-list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .happy-button {
      background-color: var(--primary-color);
      width: 75%;

      & + .happy-button {
        margin-top: 1rem;
      }

      span {
        margin-left: 1rem;
      }
    }
  }
}
</style>

<template>
  <div class="present1-yes-view">
    <div class="present1-yes-view-content">
      <h2>En los próximos días los tendrás en casa =)</h2>
      <img
        src="https://media.giphy.com/media/QBC5foQmcOkdq/giphy.gif"
        alt="happy gif"
      />
    </div>
    <b-button class="happy-button" @click="goTo">Lista de regalos</b-button>
  </div>
</template>

<script>
export default {
  name: "Present1yes",
  mounted: function () {
    window.localStorage.setItem("present1", "done");

    this.$confetti.start({
      particles: [5],
      defaultSize: 5,
    });
  },
  methods: {
    goTo: function () {
      this.$confetti.stop();
      this.$router.push("/home");
    },
  },
};
</script>

<style lang="scss" scoped>
.present1-yes-view {
  height: 100%;
}

.present1-yes-view-content {
  height: calc(100% - 40px);

  display: flex;
  justify-content: center;
  flex-direction: column;
}

h2 {
  text-align: center;
}

.happy-button {
  width: 100%;
}
</style>

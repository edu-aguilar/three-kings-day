<template>
  <div class="present3-yes-view">
    <div class="present3-yes-view-content">
      <h2>Algún Rey Mago tiene una caja para tí...</h2>
      <img
        src="https://media.giphy.com/media/69ocantqVQ1QaTmmRi/giphy.gif"
        alt="happy gif"
      />
    </div>
    <b-button class="happy-button" @click="goTo">Lista de regalos</b-button>
  </div>
</template>

<script>
export default {
  name: "present3yes",
  methods: {
    goTo: function () {
      window.localStorage.setItem("present3", "done");
      this.$router.push("/home");
    },
  },
};
</script>

<style lang="scss" scoped>
.present3-yes-view {
  height: 100%;
}

.present3-yes-view-content {
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

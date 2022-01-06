<template>
  <div class="finish-yes-view">
    <div class="finish-yes-view-content">
      <h2>Hasta el año que viene!!!</h2>
      <h2 style="margin: 2rem 0">
        Espero que disfrutes los regalos y te haya parecido divertida la forma
        de dártelos
      </h2>
      <h2>No olvides seguir portándote bien...</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "finishyes",
  mounted: function () {
    this.$confetti.start({
      particles: [5],
      defaultSize: 5,
    });
  },
};
</script>

<style lang="scss" scoped>
.finish-yes-view {
  height: 100%;
}

.finish-yes-view-content {
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

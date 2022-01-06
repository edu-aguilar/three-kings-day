<template>
  <div class="intro-view">
    <div class="intro">
      <transition name="fade" mode="out-in">
        <div v-show="showText">
          <p class="intro-what">"Lo importante es la experiencia"</p>
          <p class="intro-who">Silvia Marín Sánchez</p>
          <p class="intro-when">5 de enero a medio día</p>
        </div>
      </transition>
    </div>
    <transition name="fade" mode="out-in">
      <b-button
        class="happy-button"
        v-show="showButton"
        @click="$router.push('home')"
        >Vivir la experiencia</b-button
      >
    </transition>
  </div>
</template>

<script>
export default {
  name: "Intro",
  data: function () {
    return {
      showText: false,
      showButton: false,
    };
  },
  mounted: function () {
    setTimeout(() => {
      this.showText = true;
    }, 1500);
    setTimeout(() => {
      this.showButton = true;
    }, 4000);
  },
};
</script>

<style lang="scss" scoped>
.intro-view {
  height: 100%;

  .intro {
    height: calc(100% - 40px);

    display: flex;
    flex-direction: column;
    justify-content: center;

    .intro-what {
      font-size: 3rem;
      font-style: italic;
      font-weight: bold;

      margin-top: -10rem;
    }

    .intro-who {
      font-size: 2rem;

      margin-top: 3rem;
    }

    .intro-when {
      font-size: 1.5rem;
    }
  }

  .happy-button {
    width: 100%;
  }
}
</style>

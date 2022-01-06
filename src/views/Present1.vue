<template>
  <div class="present1-view">
    <section class="gallery">
      <img
        class="gallery__item"
        src="https://www.beasoldado.com/2426-thickbox_default/pendientes-aro-rombo-onix.jpg"
        alt="imagen pendiente 1"
      />
      <img
        class="gallery__item"
        src="https://www.beasoldado.com/2617-thickbox_default/pendientes-aro-rombo-onix.jpg"
        alt="imagen pendiente 2"
      />
    </section>
    <div class="options">
      <h2>¿Te gustan?</h2>
      <div class="options__buttons">
        <b-button class="happy-button" @click="goTo('present1/no')"
          >😭 <span>NO</span> 🥵</b-button
        >
        <b-button class="happy-button" @click="goTo('present1/yes')"
          >😎 <span>SI</span> 🤩</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Present1",
  methods: {
    goTo: function (route) {
      this.$router.push(route);
    },
  },
};
</script>

<style lang="scss" scoped>
.present1-view {
  height: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;

  section {
    width: 100%;
  }

  section.gallery {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }

  .gallery .gallery__item {
    scroll-snap-align: start;
    width: 100%;
  }

  .options h2 {
    text-align: center;
  }

  .options .options__buttons {
    display: flex;
    justify-content: space-evenly;
  }
}
</style>

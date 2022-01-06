<template>
  <div class="present2-view">
    <div class="present2-content">
      <h2 class="present-2-title-1">Melchor está escribiendo un mail...</h2>
      <h2 class="present-2-title-2">¿Le ayudas a terminarlo?</h2>
      <b-button class="happy-button" @click="helpMelchor"
        >Ayudar a Melchor</b-button
      >
      <div class="iframe-wrapper">
        <iframe
          v-if="iframeReady"
          src="https://ngswk.sse.codesandbox.io/"
          frameborder="0"
        ></iframe>
      </div>
    </div>
    <b-button class="happy-button" @click="handleFinish"
      >Lista de regalos</b-button
    >
  </div>
</template>

<script>
export default {
  name: "Present2",
  data: function () {
    return {
      iframeReady: false,
    };
  },
  methods: {
    helpMelchor: function () {
      this.iframeReady = true;
    },
    handleFinish: function () {
      window.localStorage.setItem("present2", "done");

      this.$router.push("/home");
    },
  },
};
</script>

<style lang="scss" scoped>
.present2-view {
  height: 100%;

  .present2-content {
    height: calc(100% - 40px);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .present-2-title-1 {
      margin-top: -6rem;
    }

    .present-2-title-2 {
      margin: 2rem 0;
    }

    .happy-button {
      width: 75%;
    }

    .iframe-wrapper {
      height: 40px;

      iframe {
        height: 100%;
      }
    }
  }

  .happy-button {
    width: 100%;
  }
}
</style>

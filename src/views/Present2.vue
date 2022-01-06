<template>
  <div class="present2-view">
    <div class="present2-content">
      <h2 class="present-2-title-1">Melchor está escribiendo un mail...</h2>
      <h2 class="present-2-title-2">¿Le ayudas a terminarlo?</h2>
      <b-button :disabled="mailSent" class="happy-button" @click="helpMelchor"
        >Ayudar a Melchor</b-button
      >
      <div class="iframe-wrapper">
        <vue-friendly-iframe
          style="display: none"
          v-if="iframeReady"
          src="https://ngswk.sse.codesandbox.io/"
          @load="onIframeLoaded"
        ></vue-friendly-iframe>
        <b-loading :is-full-page="isFullPage" v-model="isLoading"></b-loading>
      </div>
    </div>
    <b-button :disabled="!mailSent" class="happy-button" @click="handleFinish"
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
      mailSent: false,
      isLoading: false,
      isFullPage: false,
    };
  },
  methods: {
    helpMelchor: function () {
      this.iframeReady = true;
      this.isLoading = true;
    },
    handleFinish: function () {
      window.localStorage.setItem("present2", "done");

      this.$router.push("/home");
    },
    onIframeLoaded: function () {
      setTimeout(() => {
        this.isLoading = false;
        this.mailSent = true;
        this.toast();
      }, 3000);
    },
    toast() {
      this.$buefy.toast.open({
        message: "Genial!! revisa tus notificaciones...",
        type: "is-success",
        duration: 4500,
      });
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

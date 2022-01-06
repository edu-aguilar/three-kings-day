<template>
  <main id="app">
    <router-view />
  </main>
</template>

<style lang="scss">
@import url("http://fonts.cdnfonts.com/css/chrobot");

html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  overflow: hidden;
}

h2 {
  font-size: 2rem !important;
}

* {
  box-sizing: border-box;
  font-family: "Chrobot", Avenir, Helvetica, Arial, sans-serif !important;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

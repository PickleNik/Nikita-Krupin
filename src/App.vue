<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Comfortaa');
*{
  font-family: 'Comfortaa', sans-serif;
}
html {
    overflow: hidden;
    height: 100%;
}

body {
    height: 100%;
    overflow: auto;
}
.centerX{
  margin-left:50%;
  transform:translateX(-50%);
}
.rounded{
  border-radius:3em;
}
/*scrollbar*/
::-webkit-scrollbar{
  width: 0;
}
::selection{
  background:transparent;
  color:#eee;
}
</style>

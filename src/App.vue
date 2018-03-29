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
.centerX{
  margin-left:50%;
  transform:translateX(-50%);
}
.rounded{
  border-radius:3em;
}
/*scrollbar*/
::-webkit-scrollbar-track{
  border-radius: 10px;
  background-color: inherit;
}
::-webkit-scrollbar{
  width: 8px;
  background-color:#333;
}
::-webkit-scrollbar-thumb{
  border-radius: 20px;
  background-color: #333;
}
::-webkit-scrollbar-thumb:hover{
  background:  #ededed;
}
::-webkit-scrollbar-thumb:active {
  background: #fefefe;
}
::selection{
  background:transparent;
  color:#eee;
}
</style>

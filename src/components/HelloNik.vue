<template>
  <main class="secondary" :class="background">
    <v-flex id="window" sm6 offset-sm3 md6 offset-md3 lg6 offset-lg3  class=" hidden-xs-only rounded text-sm-center text-xs-center elevation-22">
      <div class="titlebar">
        <div class="buttons">
          <div class="close" @click="background = 'background1'">
            <!-- close button link -->
          </div>
          <div class="minimize" @click="background = 'background2'">
            <!-- minimize button link -->
          </div>
          <div class="zoom" @click="background = 'background3'">
            <!-- zoom button link -->
          </div>
        </div>
        <div style="padding-right:4em">Nikita Krupin</div>
        <!-- window title -->
      </div>
      <img id="face" src="../assets/me.jpg" style="width:18em; height:18em;border-radius:100%;margin:1em;"/>
      <h1 id="name" class="mb-2 link--yaku">
        <span>N</span><span>i</span><span>k</span><span>i</span><span>t</span><span>a</span> <span>K</span><span>r</span><span>u</span><span>p</span><span>i</span><span>n</span>
      </h1>
      <p id="bio"><v-icon class="pink--text pb-2" >web</v-icon> Web and <v-icon class="pink--text pb-2" >phone_iphone</v-icon> Mobile Developer, <v-icon class="pink--text pb-2" >color_lens</v-icon> Designer</p>
      <p class="hidden-xs-only white--text typed mb-3 ml-3 mr-3" style="font-size:2em;"><span id="hithere" class="white--text"></span></p>
      <v-layout row wrap>
        <v-flex style="z-index:111;border-radius:1em;width:50vw;margin-bottom:1em;">
          <a id="a1" href="https://www.linkedin.com/in/nikita-krupin/" target="_blank">LinkedIn</a>
          <a id="a2" href="https://www.upwork.com/o/profiles/users/_~01d865e6d937b80c2c/" target="_blank">Upwork</a>
          <a id="a3" href="https://github.com/PickleNik" target="_blank">Github</a>
          <a id="a4" href="mailto:krupin.nikita0110@gmail.com">Email</a>
        </v-flex>
      </v-layout>
    </v-flex>



    <v-flex id="windowxs" class="scroll-y hidden-sm-and-up text-xs-center">
      <div class="titlebar">
        <div class="buttons">
          <div class="close" @click="background = 'background1'">
            <!-- close button link -->
          </div>
          <div class="minimize" @click="background = 'background2'">
            <!-- minimize button link -->
          </div>
          <div class="zoom" @click="background = 'background3'">
            <!-- zoom button link -->
          </div>
        </div>
        <div style="padding-right:4em">Nikita Krupin</div>
        <!-- window title -->
      </div>
      <img id="face" src="../assets/me.jpg" style="width:18em; height:18em;border-radius:100%;margin:1em;"/>
      <h1 id="name" class="mb-2 link--yaku">
        <span>N</span><span>i</span><span>k</span><span>i</span><span>t</span><span>a</span> <span>K</span><span>r</span><span>u</span><span>p</span><span>i</span><span>n</span>
      </h1>
      <p id="bio"><v-icon class="pink--text pb-2" >web</v-icon> Web and <v-icon class="pink--text pb-2" >phone_iphone</v-icon> Mobile Developer</p>
      <p class="hidden-xs-only white--text typed mb-3 ml-3 mr-3" style="font-size:2em;"><span id="hithere" class="white--text"></span></p>
      <v-layout row wrap>
        <v-flex style="z-index:111;border-radius:1em;width:50vw;margin-bottom:1em;">
          <a id="a1" href="https://www.linkedin.com/in/nikita-krupin/" target="_blank">LinkedIn</a>
          <a id="a2" href="https://www.upwork.com/o/profiles/users/_~01d865e6d937b80c2c/" target="_blank">Upwork</a>
          <a id="a3" href="https://github.com/PickleNik" target="_blank">Github</a>
          <a id="a4" href="mailto:krupin.nikita0110@gmail.com">Email</a>
        </v-flex>
      </v-layout>
    </v-flex>
    <vue-particles style="position:absolute;top:0;left:0;width:99vw;height:99vh;"
      color="#fff" class="hidden-xs-only"
      :particleOpacity="0.5"
      :particlesNumber="50"
      shapeType="circle"
      :particleSize="11"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="repulse"
      :clickEffect="true"
      clickMode="repulse"
    >
    </vue-particles>
  </main>
</template>

<script>
import Typed from 'typed.js'

export default {
  data () {
    return {
      background: '',
      typedOptions: ['Checkout my LinkedIn', 'Hire me on Upwork', 'Fork me on GitHub', 'Email me', 'Links are below', '']
    }
  },
  mounted () {
    // eslint-disable-next-line
    new Typed('#hithere', {
      strings: this.typedOptions,
      typeSpeed: 11,
      backSpeed: 11,
      startDelay: 5000,
      backDelay: 2000,
      smartBackspace: true,
      showCursor: false
    })
  }
}
</script>
<style>
main{
  background:url('https://images.unsplash.com/photo-1499331940637-67e8c9351dc9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e43b62d5c22c0956ede3bbec94709159&auto=format&fit=crop&w=1950&q=80')center center no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  transition-timing-function: ease-in-out;
  transition-duration: .8s;
  transition-property: all;
  height:100%;
}
.tutstree{
  background: url('../assets/tutstree.png') black no-repeat; background-size: contain; background-position: center; height:15em; width:15em; cursor: pointer;
  animation: bounceIn 1s ease 4.8s 1 forwards;
}
.enly{
  background: url('../assets/enly.png') black no-repeat; background-size: contain; background-position: center; height:15em; width:15em; cursor: pointer;
  animation: bounceIn 1s ease 5s 1 forwards;
}
#window{
  overflow-y: scroll;
  max-height:100vh;
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  z-index:111;
  background:rgba(30,30,30,0.5);
  animation: zoomInDown 1s ease 1;
}
#windowxs{
  overflow-y: scroll;
  max-height:100vh;
  z-index:111;
  background:rgba(30,30,30,0.5);
  animation: zoomInDown 1s ease 1;
  height:100vh;
}
#face{
  opacity: 0;
  animation: rollIn 1s ease 1s 1 forwards;
}
#name{
  font-size: 2.7em;
  color: #eee;
  width: 100%;
  text-align: center;
  opacity:0;
  animation: lightSpeedIn 1s ease 1s 1 forwards;
}
#bio{
  font-size: 1.5em;
  color: #eee;
  width: 100%;
  text-align: center;
  opacity:0;
  animation: lightSpeedInLeft 1s ease 1s 1 forwards;
}
#a1{
  opacity:0;
  animation: bounceIn 1s ease 2s 1 forwards;
}
#a2{
  opacity:0;
  animation: bounceIn 1s ease 2.5s 1 forwards;
}
#a3{
  opacity:0;
  animation: bounceIn 1s ease 3s 1 forwards;
}
#a4{
  opacity:0;
  animation: bounceIn 1s ease 3.5s 1 forwards;
}
#a5{
  opacity:0;
  animation: bounceIn 1s ease 4s 1 forwards;
}
#about{
  padding-left: 2em;
  padding-right: 2em;
  opacity:0;
  animation: fadeInUp .5s ease 4.4s 1 forwards;
  margin-bottom:1em;
  text-align: justify;
}
#projects{
  padding-left: 2em;
  padding-right: 2em;
  opacity:0;
  animation: fadeInUp .5s ease 4.6s 1 forwards;
  margin-bottom:1em;
  text-align: justify;
}
.background1{
  background:url('https://images.unsplash.com/photo-1499331940637-67e8c9351dc9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e43b62d5c22c0956ede3bbec94709159&auto=format&fit=crop&w=1950&q=80')center center no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.background2{
  background:url('https://images.unsplash.com/photo-1458602534355-532b3ef5b604?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=04e6b3a3e1976c33455a0aa1d47e00a0&auto=format&fit=crop&w=1950&q=80')center center no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.background3{
  background:url('https://www.hdwallpapers.in/walls/apple_mac_os_x_el_capitan-wide.jpg')center center no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
/*titlebar Start*/

.titlebar {
  background: transparent;
  color: #eee;
  font-size: 11pt;
  line-height: 20px;
  text-align: center;
  width: 100%;
	padding:2em;
	border: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  cursor: default;
}

.buttons {
  padding-left: 8px;
  padding-top: 3px;
  float: left;
  line-height: 0px;
}

.close {
  background: #ff5c5c;
  font-size: 9pt;
  width: 1em;
  height: 1em;
  border: 1px solid #e33e41;
  border-radius: 50%;
  display: inline-block;
}

.close:active {
  background: #c14645;
  border: 1px solid #b03537;
  color: #4e0002;
}

.minimize {
  background: #ffbd4c;
  font-size: 9pt;
  line-height: 11px;
  margin-left: 4px;
  width: 1em;
  height: 1em;
  border: 1px solid #e09e3e;
  border-radius: 50%;
  display: inline-block;
}

.minimize:active {
  background: #c08e38;
  border: 1px solid #af7c33;
  color: #5a2607;
}

.zoom {
  background: #00ca56;
  font-size: 9pt;
  line-height: 11px;
  margin-left: 4px;
  width: 1em;
  height: 1em;
  border: 1px solid #14ae46;
  border-radius: 50%;
  display: inline-block;
}

.zoom:active {
  background: #029740;
  border: 1px solid #128435;
  color: #003107;
}

/*titlebar END*/
.typed::after {
	content: '❤️';
	display: inline;
  animation: blink 1s infinite;
}
@keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
}
a{
  margin:1em;
  text-decoration:none;
  font-size: 1.3em;
}
a:hover{
  color:pink;
}
/* Yaku */
.link--yaku {
	color: #bababa;
	overflow: hidden;
  cursor:none;
}
.link--yaku span {
	display: inline-block;
	position: relative;
	-webkit-transform: perspective(1000px) rotate3d(0,1,0,0deg);
	transform: perspective(1000px) rotate3d(0,1,0,0deg);
	-webkit-transition: -webkit-transform 0.5s, color 0.5s;
	transition: transform 0.5s, color 0.5s;
}

.link--yaku:hover span {
	color: pink;
	-webkit-transform: perspective(1000px) rotate3d(0,1,0,360deg);
	transform: perspective(1000px) rotate3d(0,1,0,360deg);
}

.link--yaku span:first-child,
.link--yaku:hover span:first-child {
	-webkit-transition-delay: 0s;
	transition-delay: 0s;
}
.link--yaku span:nth-child(2),
.link--yaku:hover span:nth-child(2) {
	-webkit-transition-delay: 0.1s;
	transition-delay: 0.1s;
}
.link--yaku span:nth-child(3),
.link--yaku:hover span:nth-child(3) {
	-webkit-transition-delay: 0.2s;
	transition-delay: 0.2s;
}
.link--yaku span:nth-child(4),
.link--yaku:hover span:nth-child(4) {
	-webkit-transition-delay: 0.3s;
	transition-delay: 0.3s;
}
.link--yaku span:nth-child(5),
.link--yaku:hover span:nth-child(5) {
	-webkit-transition-delay: 0.4s;
	transition-delay: 0.4s;
}
.link--yaku span:nth-child(6),
.link--yaku:hover span:nth-child(6) {
	-webkit-transition-delay: 0.5s;
	transition-delay: 0.5s;
}
.link--yaku span:nth-child(7),
.link--yaku:hover span:nth-child(7) {
	-webkit-transition-delay: 0.6s;
	transition-delay: 0.6s;
}
.link--yaku span:nth-child(8),
.link--yaku:hover span:nth-child(8) {
	-webkit-transition-delay: 0.7s;
	transition-delay: 0.7s;
}.link--yaku span:nth-child(9),
.link--yaku:hover span:nth-child(9) {
	-webkit-transition-delay: 0.8s;
	transition-delay: 0.8s;
}
.link--yaku span:nth-child(10),
.link--yaku:hover span:nth-child(10) {
	-webkit-transition-delay: 0.9s;
	transition-delay: 0.9s;
}
.link--yaku span:nth-child(11),
.link--yaku:hover span:nth-child(11) {
	-webkit-transition-delay: 1s;
	transition-delay: 1s;
}
.link--yaku span:nth-child(12),
.link--yaku:hover span:nth-child(12) {
	-webkit-transition-delay: 1.1s;
	transition-delay: 1.1s;
}
@keyframes zoomInDown {
  from {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}
@keyframes rollIn {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes lightSpeedIn {
  from {
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    transform: skewX(-5deg);
    opacity: 1;
  }

  to {
    transform: none;
    opacity: 1;
  }
}
@keyframes lightSpeedInLeft {
  from {
    transform: translate3d(-100%, 0, 0) skewX(30deg);
    opacity: 0;
  }

  60% {
    transform: skewX(-20deg);
    opacity: 1;
  }

  80% {
    transform: skewX(5deg);
    opacity: 1;
  }

  to {
    transform: none;
    opacity: 1;
  }
}
@keyframes bounceIn {
  from, 20%, 40%, 60%, 80%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(.9, .9, .9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(.97, .97, .97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}
</style>

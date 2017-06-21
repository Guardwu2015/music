<template>
	<div class="loader-wrap">
		<div class="ball-scale">
			<div></div>
		</div>
	</div>
</template>

<style>
@keyframes ball-scale {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0); }

  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 0; } }

.ball-scale{ position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 60px; height: 60px;}
.ball-scale > div {
  background-color: #42B983;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  animation-fill-mode: both;
  display: inline-block;
  height: 60px;
  width: 60px;
  animation: ball-scale 1s 0s ease-in-out infinite; }

</style>
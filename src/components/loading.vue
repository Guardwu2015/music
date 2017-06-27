<template>
	<div class="loading-wrap">
		<div class="spinner7">
			<div class="circ1"></div>
			<div class="circ2"></div>
			<div class="circ3"></div>
			<div class="circ4"></div>
		</div>
	</div>
</template>

<style>
	.spinner7 {
      width: 100%;
      height: 30px;
      text-align: center;
    }

    .spinner7 > div {
      background-color: #fc3a6e;
      height: 10px;
      width: 10px;
      margin-left:3px;
      border-radius: 50%;
      display: inline-block;
      
      -webkit-animation: stretchdelay 0.7s infinite ease-in-out;
      animation: stretchdelay 0.7s infinite ease-in-out;
    }

    .spinner7 .circ2 {
      -webkit-animation-delay: -0.6s;
      animation-delay: -0.6s;
    }

    .spinner7 .circ3 {
      -webkit-animation-delay: -0.5s;
      animation-delay: -0.5s;
    }

    .spinner7 .circ4 {
      -webkit-animation-delay: -0.4s;
      animation-delay: -0.4s;
    }

    .spinner7 .circ5 {
      -webkit-animation-delay: -0.3s;
      animation-delay: -0.3s;
    }

    @-webkit-keyframes stretchdelay {
      0%, 40%, 100% { -webkit-transform: translateY(-10px) }  
      20% { -webkit-transform: translateY(-20px) }
    }

    @keyframes stretchdelay {
      0%, 40%, 100% { 
        transform: translateY(-10px);
        -webkit-transform: translateY(-10px);
      } 20% {
        transform: translateY(-20px);
        -webkit-transform: translateY(-20px);
      }
    }

</style>
<template>
  <div>
      <header>
  <div class="video-background" ></div>
  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src="../../assets/images/coverr-ocean-and-footsteps-1559889043636.mp4" type="video/mp4">
  </video>
  <div class="container h-100">
    <div class="d-flex h-100 text-center align-items-center">
      <div class="w-100 text-white font-weight-bold">
        <h1 class="display-3 font-weight-bold">Adventure?</h1>
        <p class="lead mb-0">Plan and find your next adventure with us.</p>
      </div>
    </div>
  </div>
</header>


<section class="my-5">
  <div class="container">
    <div class="row">
      <div class="col-md-8 mx-auto">
        <p>What Type Of Adventurer Are You? How adventurous are you really? Are you a light adventurer, who likes a good time but never goes too far out of his/her comfort zone? Or are you a real, true, serious adventurer, who would brave any situation and loves a good challenge?</p>

        <p>“Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.” – Mark Twain</p>

        <p class="mb-0">
          For more adventures <a routerLink="/auth/signup">Sing Up</a>
        </p>
      </div>
    </div>
  </div>
</section>

  </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
header {
  position: relative;
  background-color: black;
  height: 75vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
}

header video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

header .container {
  position: relative;
  z-index: 2;
}

header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
}

@media (pointer: coarse) and (hover: none) {
  header {
    background: url('https://source.unsplash.com/XT5OInaElMw/1600x900') black no-repeat center center scroll;
  }
  header video {
    display: none;
  }
}

</style>
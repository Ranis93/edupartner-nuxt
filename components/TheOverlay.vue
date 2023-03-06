<template>
  <div class="overlay">
    <div class="video">
      <div id="frame" />
      <div class="close">
        &times;
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.overlay{position:fixed;display:none;justify-content:center;align-items:center;width:100%;height:100%;top:0;background-color:rgba(0,0,0,.8); z-index: 100;}
.overlay .video{width:70vw;height:85vh;position:relative;}
.overlay .close{color:#fff;font-size:36px;position:absolute;top:-27px;right:-25px;cursor:pointer}
@media (max-width: 480px) {
  .overlay .video{width:100%;height:50%;position:relative}
  .overlay .close{color:#fff;font-size:55px;position:absolute;top:-65px;right:20px;cursor:pointer}
}
</style>

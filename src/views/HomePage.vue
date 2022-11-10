<template>
    <div class="home-page">
      <div class="image-container">
        <!-- <div class="image-html">
          <h2>A Reason to Celebrate Outdoors</h2>
        </div> -->
        <img class="home-page-image" src="https://media.istockphoto.com/id/1372150090/photo/banner-with-eco-craft-paper-tableware-and-wooden-cutlery-background.jpg?s=612x612&w=0&k=20&c=_-PoS57vUypFSwS0Ay8iO4DvfPRzTMu41cNEjVq4Yys=" alt="image">
      </div>
      <div class="image-container">
        <!-- <div class="image-html white-text">
          <h2>Give thoughtfully</h2>
        </div> -->
        <img class="home-page-image" src="https://media.istockphoto.com/id/1139344500/photo/salad-with-salmon-avocados-tomatoes-and-spinach-in-a-black-plate-on-a-wooden-background-top.jpg?s=612x612&w=0&k=20&c=qtpUw6Kux0GGQ0DJJmo1TYJVkk23zs7GDI5UUITZo_M=" alt="image">
      </div>
      <AdsMFE />
      <ApplicationMFE />
    </div>
</template>

<script>
import {AdsMFE,ApplicationMFE} from 'vue-lerna-mfe'

export default {
  name: 'HomePage',
  components:{
    AdsMFE,
    ApplicationMFE
  }
}
</script>

<style scoped>
.home-page{
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home-page-image{
  width: 100%;
  margin: 20px;
  cursor: pointer;
}
.image-container{
  width: 70%;
}
.image-html{
  position: absolute;
  margin: 100px 20px;
  width: 70%;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.white-text{
  color: white;
}
</style>
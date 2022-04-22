<template>
  <el-carousel indicator-position="outside" class="one">
    <el-carousel-item v-for="item in imgList" :key="item">
      <h3>
        <img :src="item.imgUrl" style="width: 100%">
      </h3>
       </el-carousel-item>
    </el-carousel>
    </template>
<script>
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
export default {
  name: 'Tab',
  data () {
    return {
      imgList: [
        {imgUrl: require('@/assets/img/2.jpg')},
        {imgUrl: require('@/assets/img/3.jpg')},
        {imgUrl: 'https://gw.alicdn.com/imgextra/i2/O1CN01Vw9Kln28IpczTUatT_!!6000000007910-0-tps-1200-320.jpg'}
      ]
    }
  }
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
.one{
  width: 85%;
  margin: 0 auto;
}
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
    background-image: ;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

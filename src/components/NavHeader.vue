<template>
  <div class="nav">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Hi,欢迎来到大麦网 </el-menu-item>
      <el-menu-item index="2"><span>[<a>登录</a> 注册]</span> </el-menu-item>
      <el-submenu index="3">
        <template slot="title"><span>|</span>我的大麦</template>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
        <el-menu-item index="3-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="4"><a target="_blank"><span>|</span>订单管理</a></el-menu-item>
    </el-menu>
    <el-menu :default-active="activeIndex" class="el-menu-demo1" mode="horizontal" @select="handleSelect">
      <el-menu-item index="4">大麦网微信</el-menu-item>
      <el-menu-item index="5"><span>|</span>手机版</el-menu-item>
      <el-submenu index="6">
        <template slot="title"><span>|</span>客房服务</template>
        <el-menu-item index="6-1">选项1</el-menu-item>
        <el-menu-item index="6-2">选项2</el-menu-item>
        <el-menu-item index="6-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title"><span>|</span>网站导航</template>
        <el-menu-item index="7-1">选项1</el-menu-item>
        <el-menu-item index="7-2">选项2</el-menu-item>
        <el-menu-item index="7-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="8"><a target="_blank"><span>|</span>English</a></el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'Nav',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.el-menu-demo{
  float: left;
}
.el-menu-demo1{
  float: right;
}
.nav{
  height: 59px;
  width: 100%;
  text-decoration: none;
  font-size: 16px;
  opacity: 1;
}
 .nav span{
  margin-right: 20px;
   font-size: 18px;
   opacity: 0.8;
}
.nav span a{
color: red;
}
</style>

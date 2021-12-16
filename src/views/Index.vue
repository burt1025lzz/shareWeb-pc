<template>
  <div>
    <el-menu :default-active="activeIndex" class="" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2" disabled>文章</el-menu-item>
      <el-menu-item index="3">视频</el-menu-item>
      <div class="logo__container">
        <img src="../assets/logo.jpeg" alt="logo"/>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped>
.logo__container {
  width: 60px;
  height: 60px;
  float: right;
  border-radius: 25%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>

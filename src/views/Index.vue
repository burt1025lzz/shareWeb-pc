<template>
  <div>
    <el-menu :default-active="activeIndex" class="" mode="horizontal" @select="handleSelect">
      <el-menu-item
          v-for="item in menuList"
          :key="item.router"
          :index="item.router"
          :disabled="item.disabled"
      >
        {{ item.title }}
      </el-menu-item>
      <div class="logo__container">
        <img src="../assets/logo.jpeg" alt="logo"/>
      </div>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      activeIndex: '/',
      menuList: [{
        title: '首页',
        router: '/'
      }, {
        title: '文章',
        router: '/article'
      }, {
        title: '视频',
        router: '/video'
      }]
    };
  },
  methods: {
    handleSelect(path) {
      this.$router.push({path})
    }
  },
  created() {
    this.activeIndex = this.$route.path
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

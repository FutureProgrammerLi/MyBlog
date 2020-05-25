<template>
  <a-layout id="components-layout-demo-fixed">
    <my-header />
    <a-layout-content :style="{ padding: '0 20%', marginTop: '64px' }">
      <!-- <a-breadcrumb :style="{ margin: '16px 0' }">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb> -->
      <!-- <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
        Content
      </div> -->
      <Content />
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<script>
import MyHeader from '@/components/layout/MyHeader'
import Content from '@/components/layout/Content'
export default {
  components: {
    MyHeader,
    Content
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
  },
};
</script>
<style lang="less" >
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  float: left;
}
.logo{
  line-height: 31px;
  color:whitesmoke;
}
#components-layout-demo-fixed{
  height:100vh;
  ul{
   float:right;
  }
  li{
    float:left;
  }
  a{
    font-size:1.5rem;
    color:white;
  }
}

</style>

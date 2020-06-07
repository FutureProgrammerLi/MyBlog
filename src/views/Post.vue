<template>
<div id="top">
  <PostForm />
  </div>
</template>
<script>
import PostForm from '../components/forms/PostForm.vue'
export default {
  components:{
    PostForm
  },
  
};
</script>

<style lang="less" scoped>
#top{
    display:flex;
    justify-content: center;
    align-items: center;
    .ant-form{
        min-width:50%;
    }
}
</style>
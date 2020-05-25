<template>
<div :style="{  background: '#fff', minHeight: '360px' }">
    <a-row>
      <a-col :span="18">
        <Card 
        image_url="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"  
        title="First blog" 
        content="Can you See Me?" />
        <Card 
        image_url="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590429195564&di=15cfeb8bb18a11d398365dfc94a43d3b&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F64%2F76%2F20300001349415131407760417677.jpg"
        title="Second blog" 
        content="Ofcourse you can!" />
      </a-col>
      <a-col :span="6">
        Here's categories
      </a-col>
    </a-row>
</div>
</template>

<script>
import Card from '@/components/cards/Card'
export default {
components: {
    Card,
},
}
</script>

<style lang="scss" scoped>

</style>

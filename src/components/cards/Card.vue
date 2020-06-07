<template>
<a-card hoverable style="width: 100%;display:flex;"  :bodyStyle="bodyObj">
    <img slot="cover" alt="example" :src="img_url" style="width:200px;height:200px;object-fit:cover" />
    <a-card-meta :title="title">
        <template slot="description">
          {{content}}
            <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempora atque distinctio voluptatum error fugit vitae repudiandae non neque iure consequuntur amet rem illo assumenda, impedit molestias id quas exercitationem! -->
        </template>
    </a-card-meta>
    <a-button @click="test">Click Me!</a-button>
</a-card>
</template>

<script>
export default {
    props: {
        img_url: {
            type: String,
            default:()=>'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
        },
        title: {
            type: String,
            default: () => 'MyBlog'
        },
        content: {
            type: String
        }

    },
    data() {
        return {       
            bodyObj: {
                "minWidth": "200px",
                "fontSize": "1rem",
                "lineHeight":"2rem",
                "maxHeight":"12rem",
                "textOverflow": "ellipsis",
                "whiteSpace":"nowrap",
                "overflow":"hidden",
                "height":"10rem",               
            }
        }
    },
    methods: {
        test() {
            let a = 123
            // this.$http.get(`/api/${a}`,{
            //     params:{
            //         'abc':123
            //     }
            // }).then(res=>{
            //     console.log(res)
            // })
        }
    },
}
</script>

<style lang="less" scoped>
.ant-card-cover {
    display: inline !important;
}
/deep/ .ant-card-meta-title{
    font-size:1.5rem;
}
</style>

<template>
<a-form-model layout="vertical" :model="form" v-bind="formItemLayout">
    <a-form-model-item label="Title" required>
        <a-input v-model="form.title" placeholder="input placeholder" />
    </a-form-model-item>
    <a-form-model-item label="Content" required>
        <a-textarea placeholder="Autosize height with minimum and maximum number of lines" :auto-size="{ minRows: 2, maxRows: 6 }"  v-model="form.content" />
    </a-form-model-item>
    <a-form-model-item label="Categories">
        <a-input v-model="form.categories" placeholder="input placeholder" />
    </a-form-model-item>
    <a-form-model-item label="Image">
        <a-input v-model="form.img_url" placeholder="input placeholder" />
    </a-form-model-item>
    <a-form-model-item>
        <a-button type="primary" @click="post">
            Submit
        </a-button>
        <a-button @click="backward">
            Back
        </a-button>
    </a-form-model-item>
</a-form-model>
</template>

<script>
export default {
    data() {
        return {
            form: {
                title: '',
                content: '',
                categories: '',
                img_url:''
            },
        };
    },
    computed: {
        formItemLayout() {
            return {}
        },
        buttonItemLayout() {
            return {}
        },
    },
    methods: {
        post() {
            this.$store.commit('ADD_POST',this.form)
            this.$router.push('/')
        },
        backward(){
            this.$router.push('/')
        }
    },
}
</script>

<style scoped>

</style>

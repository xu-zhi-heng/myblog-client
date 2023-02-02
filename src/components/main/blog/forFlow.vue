<template>
    <div id="forFlow">
        <cards-list v-if="!isShowBlogContent"/>     <!--博客列表-->
        <post-detail v-else/>                       <!--博客内容-->
    </div>
</template>

<script>
    import CardsList from "./cardsList";
    import PostDetail from "./postDetail";
    import {mapGetters} from 'vuex'
    import {watchRoute} from "../../../mixins/watchRoute";
    export default {
        name: "forFlow",
        components: {PostDetail, CardsList},
        mixins: [watchRoute],
        data() {
            return {
                BlogIntroductions: ""
            }
        },
        computed: {
            ...mapGetters([
                'isShowBlogContent'
            ])
        },
        updated() {
            this.$nextTick(function() {
                let div = document.getElementById('mainContent');
                div.scrollTop = 0;
            });
        },
        mounted() {
            let div = document.getElementById('mainContent');
            div.scrollTop = 0;
        },
    }
</script>

<style scoped>
    #forFlow {
        z-index: 2;
    }

</style>
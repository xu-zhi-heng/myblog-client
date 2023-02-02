<template>
    <div id="blog-nav" class="side-wrapper">
        <h3>MENU</h3>
        <ul>
            <router-link :to="{path: '/partBlogs',query: {BlogType: item.name}}" v-for="item in allBlogType">
                <li>
                    <i class="iconfont" :class="item.icon"></i>
                    <span class="nav-item-text">{{item.name}}</span>
                </li>
            </router-link>
        </ul>
    </div>
</template>

<script>
    import {getAllBlogType} from "../../api/blogType";
    import {getAllBlogIntroduction,getBlogIntroductionByType} from "../../api/blogIntroduction";
    export default {
        name: "BlogNav",
        data() {
            return {
                allBlogType: []
            }
        },
        created() {
            getAllBlogType().then(res => {
                if(res.code === 1) {
                    if(res.data.length === 0) {
                        this.$message({
                            showClose: true,
                            type: 'warning',
                            message: res.msg
                        })
                    }else {
                        this.allBlogType = res.data
                    }
                }else {
                    this.$message({
                        showClose: true,
                        type: 'error',
                        message: res.msg
                    })
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }
</script>

<style scoped>
    .side-wrapper {
        padding: 30px;
    }
    #blog-nav ul a {
        margin-bottom: 20px;
        cursor: pointer;
        display: block;
    }
    .side-wrapper h3 {
        font-family: "DM Sans",sans-serif;
        color: #5c5e6e;
        font-size: 15px;
        font-weight: 600;
        margin-bottom: 20px;
    }
    .side-wrapper ul li {
        text-decoration: none;
        color: #777;
        display: flex;
        align-items: center;
    }
    .side-wrapper ul li i{
        text-decoration: none;
        color: #1296db;
        display: flex;
        align-items: center;
    }
    .nav-item-text:hover {
        color: var(--body-color);
    }
    #blog-nav i {
        margin-right: 8px;
    }
</style>
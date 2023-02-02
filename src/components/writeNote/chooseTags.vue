<template>
    <div class="choosetags">
        <h3 class="block-title">请选择标签</h3>
        <div class="tags">
            <ul class="tags-list">
                <li class="list-item">
                    <a class="class-block"></a>
                    <ul class="sub-list" style="display: none">
                        <li class="sub-item">
                            <span class="name"></span>
                        </li>
                    </ul>
                </li>
            </ul>
            <p class="position">
                <label>当前选择分类: </label>
                <span>动画 → 动漫杂谈</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "chooseTags"
    }
</script>

<style scoped>
    .choosetags h3.block-title {
        font-size: 14px;
        font-weight: 400;
        line-height: 1;
        margin-bottom: 16px;
    }
    .tags .tags-list {
        margin-top: -12px;
    }
    ol, ul {
        list-style: none;
    }
    .tags .tags-list .list-item {
        position: relative;
        display: inline-block;
        margin-right: 12px;
        margin-top: 12px;
    }
    .tags .tags-list .list-item .class-block {
        background-color: #f1f3f7;
        border: 1px solid #cbd0d8;
        color: #222;
        font-size: 14px;
        border-radius: 4px;
        min-width: 80px;
        padding: 0 10px;
        text-align: center;
        height: 32px;
        line-height: 32px;
        display: block;
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }
    .tags .sub-list {
        position: absolute;
        top: 120%;
        left: 1px;
        z-index: 1000;
        margin-top: 2px;
        border-radius: 4px;
        padding: 10px 0;
        white-space: nowrap;
        background: #fff;
        border: none;
        box-shadow: 0 3px 13px rgb(0 0 0 / 18%);
    }
    .tags .sub-list .sub-item {
        padding: 0 20px;
        cursor: pointer;
        line-height: 27px;
    }
    .tags .sub-list .sub-item .name {
        font-size: 14px;
    }
    .tags .sub-list .sub-item.active, .tags .sub-list .sub-item:hover {
        background-color: #f1f3f7;
        color: #00a1d6;
    }
    .tags .tags-list .list-item .class-block.active {
        background-color: #37c8f7;
        border-color: #37c8f7;
        color: #fff;
        transition-duration: .2s;
    }
    .tags .position {
        margin-top: 20px;
        color: #99a2aa;
    }
    .tags .position span {
        color: #00a1d6;
    }
</style>
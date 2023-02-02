<template>
    <div class="favourite side-wrapper">
        <h3>FAVOURITE</h3>
        <ul>
            <li>
                <a href="https://github.com/xu-zhi-heng?tab=repositories" title="github" target="_blank">🎯 Github</a>
            </li>
            <li>
                <a href="https://gitee.com/xu_zhiheng" title="gitee" target="_blank">🔥 Gitee</a>
            </li>
            <li>
                <a href="https://leetcode-cn.com/u/boomka/" title="力扣" target="_blank">🏆 LeetCode</a>
            </li>
            <li>
                <a href="https://blog.nowcoder.net/sweetfun666" title="牛客" target="_blank">🐂 牛客网</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Favourite"
    }
</script>

<style scoped>
    .side-wrapper.favourite {
        padding-top: 0;
    }
    .favourite {
        overflow-y: auto;
    }
    .side-wrapper {
        padding: 30px;
    }
    .favourite h3 {
        position: sticky;
        top: 0;
        background-color: var(--sidebar-bg);
    }
    .side-wrapper h3 {
        font-family: "DM Sans",sans-serif;
        color: #5c5e6e;
        font-size: 15px;
        font-weight: 600;
        margin-bottom: 20px;
    }
    .side-wrapper ul {
        display: flex;
        flex-direction: column;
        font-size: 15px;
        white-space: nowrap;
    }
    .side-wrapper ul li:not(:last-child) {
        margin-bottom: 20px;
    }
    .side-wrapper ul li {
        text-decoration: none;
        color: #777;
        display: flex;
        align-items: center;
    }
</style>
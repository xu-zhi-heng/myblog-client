<template>
    <div class="cover-box">
        <div class="cover-upload-box">
            <input type="file" accept="image/jpeg, image/jpg, image/png, image/bmp" class="uploadcoverInput" data-cover-retry/>
            <div class="no-img">
                <i class="iconfont icon-tubiaolunkuo-"></i>
                <h4>请添加专栏头图（选填）</h4>
                <p class="tips">支持8MB内的JPG／JPEG／BMP／PNG格式的高清图片</p>
                <p class="tips">（建议大于960*540像素）</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "chooseImage"
    }
</script>

<style scoped>
    .cover-box {
        border: 1px solid #00a1d6;
    }
    .cover-upload-box {
        /*margin: 0 -40px;*/
        background-color: #fafbfd;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        overflow: hidden;
    }
    .cover-upload-box .uploadcoverInput {
        display: none;
    }
    .cover-upload-box .no-img {
        text-align: center;
        color: #99a2aa;
        padding-top: 68px;
        height: 100%;
        position: relative;
        height: 240px;
        cursor: pointer;
    }
    .cover-upload-box .no-img h4 {
        font-size: 16px;
        font-weight: 400;
        line-height: 1;
        margin: 10px 0;
    }
</style>
<template>
    <div class="custom-toolbar">
        <div class="toolbar-item" @click.stop.prevent="giveLike">
            <i class="iconfont icon-dianzan1"></i>
            <div class="tooltip">
                点赞
            </div>
        </div>
        <div class="toolbar-item" @click.stop.prevent="toComments">
            <i class="iconfont icon-icon"></i>
            <div class="tooltip">
                评论
            </div>
        </div>
        <div class="toolbar-item mode-change" @click.stop.prevent="modeChange">
            <i class="iconfont icon-zhuti"></i>
            <div class="tooltip">
                主题
            </div>
        </div>
        <div class="toolbar-item" @click.stop.prevent="BackToTop">
            <i class="iconfont icon-huojian"></i>
            <div class="tooltip">
                回顶
            </div>
        </div>
        <div class="toolbar-item toolbar-item-toggle extend" @click.stop.prevent="extend($event)" ref="extend">
            <i class="iconfont icon-shouqi"></i>
            <div class="tooltip tooltip-toggle">
                收起
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: "customToolbar",
        methods: {
            extend(event) {
                let toolbarItem = document.getElementsByClassName("toolbar-item")
                if(this.$refs.extend.classList.contains("extend")) {
                    event.target.classList.replace("icon-shouqi","icon-zhankai")
                    this.$refs.extend.classList.remove("extend")
                    let y = 90;
                    for(let i = 0; i < toolbarItem.length - 1; i++) {
                        toolbarItem[i].style.transform = "translateY(" + y + "px)"
                        y = y + 50
                    }
                }else {
                    this.$refs.extend.classList.add("extend")
                    event.target.classList.replace("icon-zhankai","icon-shouqi")
                    let y = -50
                    for(let i = 0; i < toolbarItem.length - 1; i++) {
                        toolbarItem[i].style.transform = "translateY(" + y + "px)"
                        y = y - 90
                    }
                }
            },
            modeChange() {
                let icons = document.querySelectorAll(".toolbar-item .iconfont")
                if(document.getElementsByTagName("html")[0].getAttribute('theme') === 'dark') {
                    document.getElementsByTagName("html")[0].removeAttribute('theme')
                    for(let icon of icons) {
                        icon.style.color = "#000000"
                    }
                }else {
                    document.getElementsByTagName("html")[0].setAttribute('theme','dark')
                    for(let icon of icons) {
                        icon.style.color = "#f5f6f7"
                    }
                }
                window.localStorage.setItem('modeChange','1')
            },
            BackToTop() {
                $("#mainContent").animate({ scrollTop: 0},1000)
            },
            giveLike() {
                const h = this.$createElement;
                this.$notify({
                    message: h('i', { style: 'color: teal;'}, '点赞成功'),
                });
            },
            toComments() {
                let position = $("#comment_form").offset()
                position.top = position.top + $('#mainContent').scrollTop()
                $("#mainContent").animate({ scrollTop: position.top },1000)
            }
        },
        mounted() {
            let toolbarItem = document.getElementsByClassName("toolbar-item")
            let y = -50
            for(let i = 0; i < toolbarItem.length - 1; i++) {
                toolbarItem[i].style.transform = "translateY(" + y + "px)"
                y = y - 90
            }
        },
        destroyed() {
            window.localStorage.removeItem('modeChange')
        }
    }
</script>

<style scoped>
    .custom-toolbar {
        z-index: 9;
    }
    .custom-toolbar {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 40px;
        height: 40px;
    }
    .toolbar-item.toolbar-item-toggle {
        position: absolute;
        bottom: 0;
    }
    .toolbar-item {
        position: relative;
        width: 40px;
        height: 40px;
        background-color: var(--md-summary-bg);
        border-radius: 50%;
        text-align: center;
        font-size: 20px;
        line-height: 40px;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
        cursor: pointer;
    }
    .toolbar-item i {
        display: flex;
        justify-content: center;
        font-style: normal;
        outline: none;
    }
    .toolbar-item:hover .tooltip {
        visibility: visible;
        transform: translate(-50px, -31px);
        transition: transform .2s;
    }
    .toolbar-item .tooltip {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 24px;
        background-color: #333;
        color: #fff;
        text-align: center;
        border-radius: 2px;
        font-size: 12px;
        pointer-events: none;
        visibility: hidden;
        transform: translateY(-31px);
        z-index: 9;
    }
    .toolbar-item .tooltip:after {
        position: absolute;
        right: -5px;
        content: "";
        width: 0;
        height: 0;
        margin: 0;
        border-bottom: 6px solid transparent;
        border-top: 6px solid transparent;
        border-left: 6px solid #333;
        font-weight: 700;
    }
</style>
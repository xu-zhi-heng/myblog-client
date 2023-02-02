<template>
    <div id="catalog" v-show="isShowCataLog">
        <h3 class="catalog-title">目录</h3>
        <ul v-if="cataLog.length != 0">
            <li v-for="item in cataLog" :key="item.name" :class="[tagList(item.tag),{catalogActive:activeId === item.href}]">
                <a :href="item.href" v-html="item.name" @click.stop.prevent="clickToPosition(item.href)" :id="item.href"></a>
            </li>
        </ul>
        <h2 v-else>没有内容</h2>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import $ from 'jquery'
    export default {
        name: "cataLog",
        data() {
            return {
                activeId: "",
                offsetTops: [],
                isFirstTops: true,
            }
        },
        methods: {
            tagList(tagName) {
                let className = ""
                switch (tagName) {
                    case 'H1':
                        className = 'h1-list'
                        break
                    case 'H2':
                        className = 'h2-list'
                        break
                    case 'H3':
                        className = 'h3-list'
                        break
                    case 'H4':
                        className = 'h4-list'
                        break
                    case 'H5':
                        className = 'h5-list'
                        break
                }
                return className
            },
            clickToPosition(id) {
                let position = $(id).offset()
                position.top = position.top + $("#mainContent").scrollTop() - 50;
                $("#mainContent").animate({scrollTop: position.top}, 1000);
                this.activeId = id
            },
            scrollToPosition() {
                if(this.isFirstTops) {
                    for(let i = 0 ; i < this.cataLog.length; i++) {
                        let offsetTop = $(this.cataLog[i].href).offset().top
                        this.offsetTops.push({
                            offsetTop,
                            href: this.cataLog[i].href
                        })
                    }
                    this.isFirstTops = false
                }
                for(let i = 0; i < this.offsetTops.length; i++) {
                    if($("#mainContent").scrollTop() > this.offsetTops[i].offsetTop - 50) {
                        this.activeId = this.offsetTops[i].href
                    }
                }
            }
        },
        mounted() {
            $("#mainContent").scroll(this.scrollToPosition)
        },
        computed: {
            ...mapGetters([
                'cataLog',
                'isShowCataLog'
            ])
        }
    }
</script>

<style scoped>
    #catalog {
        padding: 25px;
        font-size: 14px;
        overflow-x: hidden;
        word-wrap: nowrap;
        text-overflow: ellipsis;
    }
    #catalog .catalog-title {
        display: flex;
        align-items: center;
        position: sticky;
        top: 0;
        font-family: DM Sans,sans-serif;
        color: #5c5e6e;
        font-size: 15px;
        font-weight: 600;
        margin-bottom: 20px;
    }
    #catalog ul {
        border-left: 1px solid var(--color-catalog-border);
        position: relative;
    }
    ol, ul {
        list-style: none;
    }
    #catalog ul li {
        color: var(--catalog-color);
        display: flex;
        align-items: center;
        line-height: 1.8;
    }
    #catalog ul .h1-list {
        font-weight: 700;
        font-size: 16px;
    }
    #catalog ul .h1-list~.h2-list {
        margin-left: 1em;
        font-size: 14px;
    }
    #catalog ul .h4-list~.h5-list {
        margin-left: 4em;
    }
    #catalog ul .h3-list, #catalog ul .h4-list, #catalog ul .h5-list, #catalog ul .h6-list {
        font-size: 12px;
    }
    #catalog ul .catalogActive {
        color: var(--themeColor);
        transition: all .3s;
    }
    #catalog ul .catalogActive::before {
        transform: scale(1) translateX(0);
        background-color: var(--themeColor);
    }
    #catalog ul li::before {
        position: relative;
        right: 5px;
        display: block;
        width: 7px;
        height: 7px;
        content: "";
        border-radius: 50%;
        border: 1px solid var(--themeColor);
        background-color: var(--sidebar-bg);
        margin-right: 4px;
        transition: transform .2s;
        font-weight: 700;
    }
</style>
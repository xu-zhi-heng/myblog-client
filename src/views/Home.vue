<template>
  <div id="home">
    <div id="main">
      <searchbar/>
      <main-content/>
      <Bottom/>
    </div>
    <div id="sideBar">
      <side-bar-main/>
    </div>
    <div id="left-side">
      <logo/>
      <BlogNav/>
      <Favourite/>
      <LeftSideBottom/>
    </div>
    <custom-toolbar/>
  </div>
</template>

<script>
import Searchbar from "../components/main/other/searchbar";
import MainContent from "../components/main/blog/mainContent";
import SideBarMain from "../components/sideBar/sideBarMain";
import Logo from "../components/left-side/Logo";
import BlogNav from "../components/left-side/BlogNav";
import LeftSideBottom from "../components/left-side/leftSideBottom";
import Favourite from "../components/left-side/Favourite";
import Bottom from "../components/main/other/Bottom";
import CustomToolbar from "../components/main/other/customToolbar";
export default {
  name: 'Home',
  components: {
    CustomToolbar,
    Bottom,
    Favourite,
    LeftSideBottom,
    BlogNav,
    Logo,
    SideBarMain,
    MainContent,
    Searchbar
  },
  methods: {
      notify() {
        const h = this.$createElement;
        this.$notify({
          message: h('i', { style: 'color: teal;'}, '😊 Welcome to my blog!'),
        });
      }
  },
  created() {
    let that = this
    setTimeout(function () {
      that.notify()
    },1500)

  }
}
</script>

<style scoped>
  #home {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 14vw 1fr 1fr 17.5vw;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
        "left main main right"
        "left main main right"
        "left main main right";
  }
  #main {
    grid-area: main;
    display: grid;
    grid-template-rows: 40px 1fr 30px;
    grid-template-columns: 1fr;
  }
  #sideBar {
    grid-area: right;
    background-color: var(--sidebar-bg);
    border-radius: 0 4px 0 0;
  }
  #sideBar, #left-side {
    overflow: auto;
  }
  #left-side {
    grid-area: left;
    border-right: 1px solid var(--sidebarBlock-border-color);
    display: flex;
    flex-direction: column;
    background-color: var(--sidebar-bg);
    flex-shrink: 0;
    border-radius: 4px 0 0 0;
  }
</style>

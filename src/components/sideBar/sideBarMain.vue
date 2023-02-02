<template>
    <div id="sideBarMain">
        <Account/>
        <cata-log/>
        <Calendar/>
        <LeftContentContainer/>
    </div>
</template>

<script>
    import Account from "./Account";
    import Calendar from "./Calendar";
    import LeftContentContainer from "./LeftContentContainer";
    import CataLog from "./cataLog";
    import {mapGetters} from 'vuex'
    export default {
        name: "sideBarMain",
        components: {CataLog, LeftContentContainer, Calendar, Account},
        computed: {
            ...mapGetters(
                ['isShowCataLog']
            )
        }
    }
</script>

<style scoped>

</style>
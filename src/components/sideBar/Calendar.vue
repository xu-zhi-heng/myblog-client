<template>
    <div id="custom-calendar" class="sidebar-block">
        <div class="event-wrapper">
            <img :src="currentImage" :alt="currentAlt">
            <div class="event-title">{{season}}</div>
            <div class="event-subtitle">{{date}}</div>
            <div class="event-date">
                <div class="event-month">{{month}}</div>
                <div class="event-day">{{day}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import autumn from '../../../src/assets/image/autumn.svg'
    import winter from '../../../src/assets/image/winter.svg'
    import summer from '../../../src/assets/image/summer.png'
    export default {
        name: "Calendar",
        data() {
            return {
                seasons: ['Spring Wonderland','Summer Wonderland','Autumn Wonderland','Winter Wonderland'],
                month: '',
                season: '',
                day: '',
                date: '',
                Images: ['',summer,autumn,winter],
                currentImage: '',
                Alts: ['春天','夏天','秋天','冬天'],
                currentAlt: []
            }
        },
        methods: {
            loadCalendar() {
                let that = this
                setInterval(function () {
                    that.getDate()
                    that.getSeason()
                    that.getMonth()
                    that.getDay()
                },1000)
            },
            getDate() {
                let date = new Date()
                let arr = (date + '').split(" ")
                this.date = arr[1] + ' ' + arr[2] + ',' + arr[3]
            },
            getSeason() {
                let date = new Date()
                let month = date.getMonth() + 1
                if(month >= 1 && month <= 3) {
                    this.season = this.seasons[0]
                    this.currentImage = this.Images[0]
                    this.currentAlt = this.Alts[0]
                }else if(month >= 4 && month <= 6) {
                    this.season = this.seasons[1]
                    this.currentImage = this.Images[1]
                    this.currentAlt = this.Alts[1]
                }else if(month >= 7 && month <= 9) {
                    this.season = this.seasons[2]
                    this.currentImage = this.Images[2]
                    this.currentAlt = this.Alts[2]
                }else {
                    this.season = this.seasons[3]
                    this.currentImage = this.Images[3]
                    this.currentAlt = this.Alts[3]
                }
            },
            getMonth() {
                let date = new Date()
                let arr = (date + '').split(" ")
                this.month = arr[2]
            },
            getDay() {
                let date = new Date()
                let arr = (date + '').split(" ")
                this.day = arr[1]
            }
        },
        created() {
            this.loadCalendar()
        }
    }
</script>

<style scoped>
    #custom-calendar {
        padding: 18px 18px 0 18px;
    }
    .sidebar-block {
        padding: 20px 20px 0;
    }
    .event-wrapper {
        position: relative;
        padding-bottom: 10px;
        border-radius: 0 0 2px 2px;
    }
    .event-wrapper, #blogCalendar {
        background-color: var(--calendar-bg);
    }
    .event-wrapper img {
        width: 90%;
        height: 149px;
        display: block;
        border-radius: 2px 2px 0 0;
        margin: 0 auto;
    }
    .event-wrapper .event-title {
        color: #c3c5d5;
        margin-bottom: 5px;
        font-family: "DM Sans",sans-serif;
        font-weight: 600;
        padding: 0 14px;
        font-size: 14px;
    }
    .event-wrapper .event-subtitle {
        color: #5c5e6e;
        font-family: "DM Sans",sans-serif;
        font-size: 12px;
        font-weight: 500;
        padding: 0 14px;
    }
    .event-wrapper .event-date {
        position: absolute;
        left: -10px;
        top: -10px;
    }
    .event-wrapper .event-date .event-month {
        background-color: #1687fa;
        padding: 1px 10px;
        font-weight: 600;
        font-size: 12px;
        font-family: "DM Sans",sans-serif;
        color: #fff;
        text-align: center;
        border-radius: 4px 4px 0 0;
    }
    .event-wrapper .event-date .event-day {
        width: 100%;
        -webkit-backdrop-filter: blur(4px);
        backdrop-filter: blur(4px);
        color: #fff;
        font-size: 12px;
        font-weight: 600;
        font-family: "DM Sans",sans-serif;
        background-color: rgba(0,0,0,.4);
        text-align: center;
    }
</style>
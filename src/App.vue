<template>
    <div id="app">
        <m-header></m-header>
        <tab></tab>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
import mHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'

export default {
    components: {
        mHeader,
        Tab
    }
}
</script>

<style lang="scss">
    @import "common/sass/index.scss";
    @import "common/sass/variable.scss";
    #app {
        color: $color-theme;
    }
</style>

<template>
    <div class="singer">
        <List-view :data="singers"></List-view>
    </div>
</template>

<script>
import { getSingerList } from 'api/singer'
import { ERR_OK } from 'api/config'
import ListView from 'base/listview/listview'

const HOT_NAME = '热门'
const HOT_SINGER_LEN = 10

export default {
    data() {
        return {
            singers: []
        }
    },
    created() {
        this._getSingerList()
    },
    methods: {
        _getSingerList() {
            getSingerList().then(res => {
                if (res.code === ERR_OK) {
                    this.singers = this._normailzeSinger(res.data.list)
                }
            })
        },
        _normailzeSinger(list) {
            let map = {
                hot: {
                    title: HOT_NAME,
                    items: []
                }
            }

            list.forEach((item, index) => {
                if (index < HOT_SINGER_LEN) {
                    map.hot.items.push({
                        id: item.Fsinger_id,
                        name: item.Fsinger_name,
                        avatar: `//y.gtimg.cn/music/photo_new/T001R150x150M000${item.Fsinger_mid}.jpg?max_age=2592000`
                    })
                }

                const key = item.Findex
                if (!map[key]) {
                    map[key] = {
                        title: key,
                        items: []
                    }
                }

                map[key].items.push({
                    id: item.Fsinger_id,
                    name: item.Fsinger_name,
                    avatar: `//y.gtimg.cn/music/photo_new/T001R150x150M000${item.Fsinger_mid}.jpg?max_age=2592000`
                })
            })

            // 获取有序列表，对map进行出来
            let hot = []
            let ret = []
            for (let key in map) {
                let val = map[key]
                if (val.title.match(/[a-zA-Z]/)) {
                    ret.push(val)
                } else if (val.title === HOT_NAME) {
                    hot.push(val)
                }
            }
            ret.sort((a, b) => {
                return a.title.charCodeAt(0) - b.title.charCodeAt(0)
            })

            return hot.concat(ret)
        }
    },
    components: {
        ListView
    }
}
</script>

<style lang="scss" scoped>
.singer {
    position: fixed;
    top: 88px;
    bottom: 0;
    width: 100%
}
</style>

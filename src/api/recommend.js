import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'

export function getRecommend() {
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

    const data = Object.assign({}, commonParams, {
        platform: 'h5',
        needNewCode: 1
    })

    return jsonp(url, data, options)
}

export function getDiscList() {
    // const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
    const url = '/api/getDiscList'

    const data = Object.assign({}, commonParams, {
        rnd: Math.random(),
        hostUin: 0,
        format: 'json',
        platform: 'yqq',
        needNewCode: 0,
        categoryId: 10000000,
        sortId: 5,
        sin: 0,
        ein: 29
    })

    return axios.get(url, {params: data}).then(res => {
        return Promise.resolve(res.data)
    })
}
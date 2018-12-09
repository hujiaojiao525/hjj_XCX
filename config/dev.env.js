var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    BASE_URL: '"https://uniapi.test.cheyipai.com"',
    MAPI_URL: '"https://mapi.test.cheyipai.com"',
    Monitor:'"https://monitor.test.cheyipai.com/"',
    SOUCHE_URL: '"https://wechat.proxy.dasouche.com"',
    IMG_PATH:'"https://i.test.268v.com/"',
    DSC_DIC_URL: '"https://bulbous.proxy.dasouche.net"',
    SOU_CHE_REQ_URL: '"https://athena.souche.com"',

})

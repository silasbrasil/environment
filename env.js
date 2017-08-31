'use strict'

const env = {
    get isCordova () { return typeof cordova === 'object' }
    get isAndroid () { return device ? ( device.platform === 'Android' ) : false }
    get isIOS () { return device ? ( device.platform === 'iOS' ) : false }
}

export default env

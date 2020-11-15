import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'
import appconfig from './appconfig'

Vue.use(Vuex)

/*
* If not building with SSR mode, you can
* directly export the Store instantiation;
*
* The function below can be async too; either use
* async/await or return a Promise which resolves
* with the Store instance.
*/

export default function (/* { ssrContext } */) {
    const Store = new Vuex.Store({
        modules: {
            // add store reference here
            appconfig
        },

        // enable strict mode (adds overhead!)
        // for dev mode and --debug builds only
        strict: process.env.DEBUGGING
    })

    if (process.env.DEV && module.hot) {
        module.hot.accept(['./app_config'], () => {
            const newAppConfig = require('./app_config').default
            Store.hotUpdate({ modules: { appconfig: newAppConfig } })
        })
    }
    return Store
}

<template>
    <q-page class="fit column no-wrap justify-center items-center content-center">
        <section
            class="q-ma-md q-pa-sm"
        >
            <h1>{{ current_weight }}</h1>
        </section>

        <q-btn
            rounded
            :icon="ws.readyState === ws.CONNECTED ? 'phonelink_off' : 'phonelink'"
            @click="reconnect()"
            label="reconnect"
            :disable="ws.readyState !== ws.CLOSED"
        >
            <template #loading>
                <q-spinner-gears />
            </template>
            <template #after>
                <q-icon
                    name="close"
                />
            </template>
        </q-btn>

        <LogView
            class="q-mt-md q-pa-sm"
            ref="mylog"
            :log.sync="log"
        />
        <section
            class="q-mt-md"
            style="min-width: 50vw"
        >
            <q-input
                filled
                label="Send Message"
                v-model="messagaeToSend"
                @keyup.enter="messageSend()"
            >
                <template #append>
                    <q-icon
                        :style="{opacity: (messagaeToSend !== '' ? 'inherit' : '0.1')}"
                        name="close"
                        @click="messagaeToSend = ''"
                        class="cursor-pointer"
                    />
                </template>
                <template #after>
                    <q-btn
                        round
                        v-ripple
                        dense
                        flat
                        icon="send"
                        @click="messageSend()"
                    />
                </template>
            </q-input>
        </section>
    </q-page>
</template>

<script>
// import { extend } from 'quasar'
import LogView from 'components/LogView.vue'

// :loading="ws.readyState === ws.CONNECTING || ws.readyState === ws.CLOSING"

export default {
    name: 'PageDev',
    data () {
        return {
            ws: new WebSocket('ws://127.0.0.1:8082/'),
            current_weight: '- - - -',
            messagaeToSend: 'Hello World :-)',
            log: undefined
        }
    },
    methods: {
        reconnect () {
            console.group('reconnect()')
            // https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/readyState
            console.log('ws.readyState:', this.ws.readyState)
            if (this.ws.readyState === WebSocket.CLOSED) {
                this.setup_ws_connection()
            }
            console.groupEnd()
        },
        messageSend () {
            console.group('messageSend')
            console.log('messagaeToSend:', this.messagaeToSend)
            this.ws.send(this.messagaeToSend)
            console.groupEnd()
        },
        messageReceive (event) {
            // const date = new Date().toISOString()
            // const value = date + ' ' + event.data
            const value = event.data
            this.current_weight = value
            // console.log(contentText)
            // this.$refs.mylog.addEntryIn(value)
        },
        onopen (event) {
            console.log('WebSocket is open now.', event)
            this.$refs.mylog.addEntryIn(event.type)
        },
        onclose (event) {
            console.log('WebSocket is closed now.', event)
            this.$refs.mylog.addEntryIn(event.type)
            this.current_weight = '- - - -'
        },
        onerror (event) {
            console.log('WebSocket error:', event)
            this.$refs.mylog.addEntryIn(event.type)
            this.current_weight = '- - - -'
        },
        setup_ws_connection () {
            this.ws = null
            this.ws = new WebSocket('ws://127.0.0.1:8082/')
            console.log('created websocket server')
            this.ws.onmessage = this.messageReceive
            this.ws.onopen = this.onopen
            this.ws.onclose = this.onclose
            this.ws.onerror = this.onerror
        }
    },
    mounted: function () {
        console.group('mounted..')
        this.setup_ws_connection()
        console.groupEnd()
    },
    beforeDestroy: function () {
        console.group('beforeDestroy..')
        // this.deviceClose()
        console.groupEnd()
    },
    filters: {
    },
    components: {
        LogView
    }
}
</script>

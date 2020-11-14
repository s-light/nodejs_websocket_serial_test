<template>
    <q-page
        class="flex column"
        style="align-items: center;"
    >
        <img
            alt="App-Logo"
            src="~assets/logo_test3_splashscreen.svg"
        >
        <h3>Hello World :-)</h3>
        <p>
            Welcome to a bunch of tests -
            some tests with serial and websocket..
        </p>
        <p>
            for more information check the
            <a
                target="_blank"
                href="https://github.com/s-light/nodejs_websocket_serial_test"
            >
                repository 'nodejs_websocket_serial_test'
            </a>.
        </p>
        <pre style="font-size:0.6em;">{{ $q.platform }}</pre>
    </q-page>
</template>

<style>
</style>

<script>
export default {
    name: 'PageWelcome'
}
</script>

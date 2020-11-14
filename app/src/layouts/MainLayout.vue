<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar>
                <q-btn
                    flat
                    dense
                    round
                    icon="menu"
                    aria-label="Menu"
                    @click="leftDrawerOpen = !leftDrawerOpen"
                />

                <q-toolbar-title>
                    Serial Websocket Test
                </q-toolbar-title>

                <div>Quasar v{{ $q.version }}</div>
            </q-toolbar>
        </q-header>

        <q-drawer
            v-model="leftDrawerOpen"
            show-if-above
            bordered
            content-class="bg-grey-1"
        >
            <q-list>
                <q-item-label
                    header
                    class="text-grey-8"
                >
                    Essential Links
                </q-item-label>
                <EssentialLink
                    v-for="link in essentialLinks"
                    :key="link.title"
                    v-bind="link"
                />
            </q-list>
        </q-drawer>
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
    {
        title: 'Docs',
        caption: 'quasar.dev',
        icon: 'school',
        link: 'https://quasar.dev',
        target: '_blank'
    },
    {
        title: 'Welcome',
        icon: 'home',
        link: 'welcome'
    },
    {
        title: 'Test',
        icon: 'code',
        link: 'test'
    },
    // {
    //     title: 'Serial',
    //     icon: 'code',
    //     link: '#serial'
    // },
    {
        title: 'About',
        icon: 'help',
        link: 'about'
    }
]

export default {
    name: 'MainLayout',
    components: { EssentialLink },
    data () {
        return {
            leftDrawerOpen: false,
            essentialLinks: linksData
        }
    }
}
</script>

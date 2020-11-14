<template>
    <q-page class="flex flex-center">
        <h1>TODO: implement load and view and Selection of package options</h1>
        <q-btn-toggle
            v-model="model"
            push
            rounded
            glossy
            toggle-color="purple"
            :options="[
                {value: 'one', slot: 'one'},
                {value: 'two', slot: 'two'},
                {value: 'three', slot: 'three'}
            ]"
        >
        <template v-slot:one>
            <div class="row items-center no-wrap">
                <div class="text-center">
                    Pick<br>boat
                </div>
                <q-icon right name="directions_boat" />
            </div>
        </template>

        <template v-slot:two>
            <div class="row items-center no-wrap">
                <div class="text-center">
                    Pick<br>car
                </div>
                <q-icon right name="directions_car" />
            </div>
        </template>

        <template v-slot:three>
            <div class="row items-center no-wrap">
                <div class="text-center">
                    Pick<br>railway
                </div>
                <q-icon right name="directions_railway" />
            </div>
        </template>
    </q-btn-toggle>
</q-page>
</template>

<script>
export default {
    name: 'PageSelectPackage',
    data () {
    return {
            model: 'three'
        }
    }
}
</script>

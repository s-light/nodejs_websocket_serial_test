<template>
    <q-page class="flex flex-center">
        <h3>TODO: implement load and view and Selection of package options</h3>
        <br>
        <br>
        <q-btn-toggle
            v-model="model"
            push
            rounded
            stack
            size="20mm"
            toggle-color="purple"
            :options="btn_list"
        />
</q-page>
</template>

<script>
export default {
    name: 'PageSelectPackage',
    data () {
        return {
            model: 'three',
            btn_list: [
                {
                    label: 'boat',
                    value: 'boat',
                    icon: 'directions_boat',
                    slot: 'one'
                },
                {
                    label: 'car',
                    value: 'car',
                    icon: 'directions_car',
                    slot: 'one'
                },
                {
                    label: 'railway',
                    value: 'railway',
                    icon: 'directions_railway',
                    slot: 'one'
                },
                {
                    label: 'world',
                    value: 'world',
                    icon: 'pets',
                    slot: 'one'
                },
                {
                    label: 'car',
                    value: 'car',
                    icon: 'directions_car',
                    slot: 'one'
                },
                {
                    label: 'railway',
                    value: 'railway',
                    icon: 'directions_railway',
                    slot: 'one'
                },
                {
                    label: 'world',
                    value: 'world',
                    icon: 'pets',
                    slot: 'one'
                },
                {
                    label: 'car',
                    value: 'car',
                    icon: 'directions_car',
                    slot: 'one'
                },
                {
                    label: 'railway',
                    value: 'railway',
                    icon: 'directions_railway',
                    slot: 'one'
                },
                {
                    label: 'world',
                    value: 'world',
                    icon: 'pets',
                    slot: 'one'
                },
                {
                    label: 'test',
                    value: 'test',
                    icon: 'directions_boat',
                    slot: 'one'
                }
            ]
        }
    },
    filters: {
    },
    components: {
    }
}

</script>

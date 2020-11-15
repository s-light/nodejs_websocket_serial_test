<template>
    <q-page class="flex flex-center">
        <h3>TODO: implement load and view and Selection of package options</h3>
        <h1>TODO: implement load and view and Selection of Place options</h1>
        <br>
        <p>
            model: {{ selectedValue }}
        </p>
        <br>
        <q-btn-toggle-grid
            v-model="selectedValue"
            :options="btn_list"
            active-class="background-orange"
            push
            rounded
            stack
            size="20mm"
        />
</q-page>
</template>

<script>
import QBtnToggleGrid from 'components/QBtnToggleGrid.vue'

export default {
    name: 'PageSelectPlace',
    data () {
        return {
            selectedValue: 'car',
            btn_list: [
                {
                    label: 'boat',
                    value: 'boat',
                    icon: 'directions_boat'
                },
                {
                    label: 'car',
                    value: 'car',
                    icon: 'directions_car'
                },
                {
                    label: 'railway',
                    value: 'railway',
                    icon: 'directions_railway'
                },
                {
                    label: 'world',
                    value: 'world',
                    icon: 'pets'
                },
                {
                    label: 'sun',
                    value: 'sun',
                    icon: 'sun'
                },
                {
                    label: 'rain',
                    value: 'rain',
                    icon: 'rain'
                },
                {
                    label: 'cloud',
                    value: 'cloud',
                    icon: 'cloud'
                },
                {
                    label: 'wind',
                    value: 'wind',
                    icon: 'wind'
                },
                {
                    label: 'railway',
                    value: 'railway',
                    icon: 'directions_railway'
                },
                {
                    label: 'world',
                    value: 'world',
                    icon: 'pets'
                },
                {
                    label: 'test',
                    value: 'test',
                    icon: 'directions_boat'
                }
            ]
        }
    },
    filters: {
    },
    components: {
        QBtnToggleGrid
    }
}

</script>

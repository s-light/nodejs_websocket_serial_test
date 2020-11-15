<template>
    <q-page class="flex flex-center col">
        <div class="shadow-10">
            selectedValue '{{ selectedValue }}' <br>
            btnList '{{ btnList }}' <br>
        </div>
        <btn-test
            v-model="selectedValue"
            :options="btnList"
        />
</q-page>
</template>

<!-- v-bind:value.sync="selectedValue" -->
<!-- v-model="selectedValue" -->
<script>
import BtnTest from 'components/BtnTest.vue'

export default {
    name: 'PageSelectPackage',
    data () {
        return {
            selectedValue: 'car',
            btnList: [
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
                }
            ]
        }
    },
    components: {
        BtnTest
    }
}
</script>

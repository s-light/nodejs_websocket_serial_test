<template>
    <q-page class="">
        <section class="center">
            <p>TODO: implement load and view and Selection of package options</p>
            <br>
            <p>
                selectedValue: {{ selectedValue }}
            </p>
            <br>
        </section>
        <q-btn-toggle-grid
            v-model="package_selected"
            :options="package_options"
            active-class="bg-orange"
            push
            rounded
            stack
            size="40mm"
        />
</q-page>
</template>

<script>
import QBtnToggleGrid from 'components/QBtnToggleGrid.vue'

export default {
    name: 'PageSelectPackage',
    data () {
        return {
            selectedValue: 'car',
            btn_list: []
        }
    },
    filters: {
    },
    computed: {
        localComputedExample () { return 0 }
        // mix this into the outer object with the object spread operator
        // ...mapState([
        //     // https://vuex.vuejs.org/guide/state.html#the-mapstate-helper
        //     // map this.count to store.state.count
        //     'package_selected',
        //     'package_options'
        // ])
    },
    components: {
        QBtnToggleGrid
    }
}

</script>

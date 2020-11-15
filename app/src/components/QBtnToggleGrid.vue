<template>
    <div class="fit row wrap justify-around items-center content-center">
        <div class="shadow-10">
            modelValue {{ modelValue }} <br>
            value {{ value }} <br>
            options {{ options }} <br>
            activeClass {{ activeClass }} <br>
        </div>
        <q-btn
            v-for="item in options"
            :key="item.title"
            @click="modelValue = item.value"
            :class="item.value === value ? activeClass : ''"
            stack
        >
            <q-icon
                v-if="item.icon"
                size="3em"
                :name="item.icon"
            />
            <q-img
                v-if="item.image_url"
                :src="item.image_url"
                spinner-color="white"
                style="height: 140px; max-width: 150px"
            />
            <div>{{ item.label }}</div>
        </q-btn>
    </div>
</template>

<!-- color="teal" -->
<!-- @input="$emit('update:value', $event.target.value)" -->
<!-- @input="$emit('update:value', item.value)" -->

<script>
export default {
    name: 'QBtnToggleGrid',
    data () {
        return {
            modelValue: null
        }
    },
    methods: {

    },
    computed: {
        value: {
            get () {
                return this.modelValue
            },
            set (value) {
                this.$emit('update:modelValue', value)
            }
        }
    },
    props: {
        // modelValue: {
        //     type: String,
        //     required: true
        // },
        // value: {
        //     type: String,
        //     required: true
        // },
        options: {
            type: Array,
            required: true
        },
        activeClass: {
            type: String,
            required: false,
            default: 'text-orange'
        }
        // preSelected: {
        //     type: Object,
        //     required: false,
        //     default: null
        // }
    }
}
</script>

<template>
    <div class="fit row wrap justify-around items-center content-center">
        <!-- <div class="shadow-10">
            value {{ value }} <br>
            options {{ options }} <br>
            activeClass {{ activeClass }} <br>
        </div> -->
        <q-btn
            v-for="item in options"
            :key="item.title"
            @click="$emit('input', item.value)"
            :class="item.value === value ? activeClass : ''"
            stack
        >
            <q-icon
                v-if="item.icon"
                :size="size"
                :name="item.icon"
            />
            <q-img
                v-else-if="item.image_url"
                :src="item.image_url"
                spinner-color="white"
                :style="img_style"
            />
            <div>{{ item.label }}</div>
        </q-btn>
    </div>
</template>

<script>
export default {
    name: 'QBtnToggleGrid',
    data () {
        return {
            // things
        }
    },
    methods: {
        //
    },
    computed: {
        img_style: function () {
            // `this` points to the vm instance
            return 'width:' + this.size + '; height:' + this.size + ';'
        }
    },
    props: {
        value: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            required: true
        },
        size: {
            type: String,
            required: false,
            default: 'text-orange'
        },
        activeClass: {
            type: String,
            required: false,
            default: 'text-orange'
        }
    }
}
</script>

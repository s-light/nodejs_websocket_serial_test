<template>
    <div class="fit row wrap justify-around items-center content-center">
        <q-btn
            v-for="item in options"
            :key="item.value"
            @click="$emit('input', item.value)"
        >
            <q-icon :name="item.icon" />
            <div>{{ item.label }}</div>
        </q-btn>
    </div>
</template>

<script>
export default {
    name: 'BtnTest',
    props: {
        value: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            required: true
        }
    }
}
</script>

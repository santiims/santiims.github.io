<template>
    <select @change="onSelect($event)">
        <option value="All">
            <span>All {{ title }}</span>
        </option>
        <option v-for="option in options" :value="option">
            <span>{{ option }}</span>
        </option>
    </select>
</template>

<script>
export default {
    name: "Selector",
    props: {
        title: {
            type: String,
            required: true,
        },
        options: {
            type: Array,
            required: true,
        },
    },
    methods: {
        onSelect(event) {
            this.$emit('on-selected', event.target.value);
        },
    },
}
</script>
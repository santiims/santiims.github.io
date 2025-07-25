<template>
    <div class="content">
        <div class="image-container">
            <video width="768" height="432" style="display: block; justify-content: center;" controls="">
                <source :src="clipInfo.image"></source>
            </video>
        </div>
        <div class="description">
            <div class="title-container">
                <div class="title">
                    <h2 class="map-title">{{ clipInfo.map }}</h2>
                    <span :class="iconClass" :title="clipInfo.grenade"></span>
                </div>
                <span :class="difficultyClass">{{ clipInfo.difficulty }}</span>
            </div>
            <p>{{ clipInfo.additionalNotes }}</p>
            <div class="label-container">
                <div v-for="movement in movements" class="label" :class="{ 'active': clipInfo[movement] }">
                    <label>{{ movement }}</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { MOVEMENTS } from '../data/consts';

export default {
    name: "Clip",
    props: {
        clipInfo: {
            type: Object,
            required: true,
        },
        filter: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            movements: MOVEMENTS,
        };
    },
    computed: {
        difficultyClass() {
            return this.clipInfo.difficulty.toLowerCase() + " difficulty";
        },
        iconClass() {
            return "icon " + this.clipInfo.grenade.toLowerCase();
        },
    },
}
</script>
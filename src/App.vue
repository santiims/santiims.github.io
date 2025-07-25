<template>
  <div style="display: flex; flex-direction: column; align-items: center; padding: 10px;">
    <div class="selector-container">
        <selector
            title="maps"
            :options="maps"
            @on-selected="setFilterMap"
        />
        <selector
            title="grenades"
            :options="grenades"
            @on-selected="setFilterGrenade"
        />
        <selector
            title="difficulties"
            :options="difficulties"
            @on-selected="setFilterDifficulty"
        />
    </div>
    <div v-for="item in visibleData" :key="item.image">
        <clip
            :clip-info="item"
        />
    </div>
  </div>
</template>

<script>
import { MAPS, GRENADES, DIFFICULTIES } from './data/consts';
import data from './data/data';
import Clip from './components/Clip.vue';
import Selector from './components/Selector.vue';

export default {
    name: 'App',
    components: {
        Clip,
        Selector,
    },
    data() {
        return {
            data,
            maps: MAPS,
            grenades: GRENADES,
            difficulties: DIFFICULTIES,
            filter: {
                map: 'All',
                grenade: 'All',
                difficulty: 'All',
            },
            itemsToShow: 3,
        };
    },
    computed: {
        filteredData() {
            return data.filter(item => {
                const mapValid = this.filter.map === 'All' || this.filter.map === item.map;
                const grenadeValid = this.filter.grenade === 'All' || this.filter.grenade === item.grenade;
                const difficultyValid = this.filter.difficulty === 'All' || this.filter.difficulty === item.difficulty;

                return mapValid && grenadeValid && difficultyValid;
            });
        },
        visibleData() {
            return this.filteredData.slice(0, this.itemsToShow);
        },
    },
    mounted() {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            if (scrollTop + windowHeight >= docHeight - 100) {
                this.itemsToShow += 3;
            }
        });
    },
    methods: {
        setFilterMap(map) {
            this.filter.map = map;
            this.itemsToShow = 3;
        },
        setFilterGrenade(grenade) {
            this.filter.grenade = grenade;
            this.itemsToShow = 3;
        },
        setFilterDifficulty(difficulty) {
            this.filter.difficulty = difficulty;
            this.itemsToShow = 3;
        },
    },
}
</script>

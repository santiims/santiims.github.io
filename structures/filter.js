class Filter {
    map = null;
    grenade = null;
    difficulty = null;

    constructor(maps, grenades, difficulties) {
        this.maps = maps;
        this.grenades = grenades;
        this.difficulties = difficulties;
    }

    buildSelector(name, options, shouldCreateEmptyOption) {
        const selector = document.createElement('select');

        if (shouldCreateEmptyOption) {
            const emptyOption = document.createElement('option');
            emptyOption.value = 'All';
            const span = document.createElement('span');
            span.innerHTML = texts[name];
            emptyOption.appendChild(span)
            selector.appendChild(emptyOption);
        }

        options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option;
            const span = document.createElement('span');
            span.innerHTML = option;
            optionElement.appendChild(span)
            selector.appendChild(optionElement);
        })

        if (this[name] && this[name] !== 'null') {
            const index = options.indexOf(this[name]);

            selector.selectedIndex = index + 1;
        }

        return selector;
    }

    buildMapSelector() {
        return this.buildSelector('map', this.maps, true);
    };

    buildGrenadeSelector() {
        return this.buildSelector('grenade', this.grenades, true);
    };

    buildDifficultySelector() {
        return this.buildSelector('difficulty', this.difficulties, true);
    };
}
const clear = (element) => {
    element.innerHTML = '';
};

const buildCheckbox = (index, value) => {
    const div = document.createElement('div');
    div.className = "label";
    div.classList.toggle('active', value);
    const label = document.createElement('label');
    label.innerHTML = MOVEMENTS[index];
    div.appendChild(label);

    return div;
};

const buildVideoNode = (item) => {
    const imageDiv = document.createElement('div');
    imageDiv.className = "content";
    const imageContainer = document.createElement('div');
    imageContainer.className = "image-container";
    const videoElement = document.createElement('video');
    const sourceElement = document.createElement('source');
    sourceElement.src = item.image;
    videoElement.width = 768;
    videoElement.height = 432;
    videoElement.style.display = 'block';
    videoElement.style.justifyContent = 'center';
    videoElement.controls = true;
    videoElement.appendChild(sourceElement);
    imageContainer.appendChild(videoElement);
    imageDiv.appendChild(imageContainer);

    const detailsDiv = document.createElement('div');
    detailsDiv.className = "description";
    const mapDifficultyContainer = document.createElement('div');
    mapDifficultyContainer.className = "title-container";
    const iconTitleContainer = document.createElement('div');
    iconTitleContainer.className = "title";
    const mapTitle = document.createElement('h2');
    mapTitle.className = "map-title";
    mapTitle.innerHTML = item.map;
    const iconSpan = document.createElement('span');
    iconSpan.title = item.grenade.toLowerCase();
    iconSpan.className = 'icon ' + item.grenade.toLowerCase();
    iconTitleContainer.appendChild(mapTitle);
    iconTitleContainer.appendChild(iconSpan);
    const difficultyTitle = document.createElement('span');
    difficultyTitle.className = item.difficulty.toLocaleLowerCase() + " difficulty";
    difficultyTitle.innerHTML = item.difficulty;
    mapDifficultyContainer.appendChild(iconTitleContainer);
    mapDifficultyContainer.appendChild(difficultyTitle);
    detailsDiv.appendChild(mapDifficultyContainer);

    if (item.additionalNotes) {
        const textElement = document.createElement('p');
        textElement.innerHTML = item.additionalNotes;
        detailsDiv.appendChild(textElement);
    }

    const checkboxContainer = document.createElement('div');
    checkboxContainer.className = "label-container";

    for (index in MOVEMENTS) {
        const checkbox = buildCheckbox(index, item[MOVEMENTS[index]]);
        checkboxContainer.appendChild(checkbox);
    }

    detailsDiv.appendChild(checkboxContainer);
    imageDiv.appendChild(detailsDiv);

    return imageDiv;
}
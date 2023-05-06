/* выпадающий список этажей */

let floors = [];
for (let i = 3; i <= 27; i++) {
    floors.push(i);
}

function dropdown_list(arr) {
    const dropSelect = document.querySelector('.form-select-floor');
    const selectDiv = document.querySelector('.select-dropdowns__floor');

    for (let floor of arr) {
        let option = document.createElement('option');
        option.value = floor - 2;
        option.innerHTML = floor;
        dropSelect.appendChild(option);
    }
    selectDiv.append(dropSelect);
}
dropdown_list(floors);

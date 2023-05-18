/* выпадающие списки этажей */

let floors = [];

for (let i = 3; i <= 27; i++) {
    floors.push(i);
}

function dropdownListsInit() {
    const dropSelectFloor = document.querySelector('.form-select-floor');
    const selectDivFloor = document.querySelector('.select-dropdowns__floor');
    const dropSelectRoom = document.querySelector('.form-select-room');
    const selectDivRoom = document.querySelector('.select-dropdowns__meeting-room');

    for (let floor of floors) {
        let option = document.createElement('option');
        option.value = floor;
        option.innerHTML = floor;
        dropSelectFloor.appendChild(option);
    }

    // заполнение для 3 этажа при загрузке страницы
    for (let i = 1; i <= 10; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = i;
        dropSelectRoom.appendChild(option);
    }

    document.addEventListener("DOMContentLoaded", function() {
        dropSelectFloor.addEventListener('click', addRooms);
        dropSelectFloor.addEventListener('touchend', addRooms);
    });

    function addRooms() {
        clearSelectRooms();
            
        const selectedFloor = parseInt(dropSelectFloor.value);
        let rooms = getNumbersOfRooms(selectedFloor);

        for (let room of rooms) {
            let option = document.createElement('option');
            option.value = room;
            option.innerHTML = room;
            dropSelectRoom.appendChild(option);
        }
    }

    function clearSelectRooms() {
        while (dropSelectRoom.childNodes.length) {
            if (dropSelectRoom.firstChild.tagName == 'OPTGROUP') {
                while (dropSelectRoom.firstChild.childNodes.length) {
                    dropSelectRoom.firstChild.removeChild(dropSelectRoom.firstChild.firstChild);
                }
            }
            dropSelectRoom.removeChild(dropSelectRoom.firstChild);
        }
    }

    selectDivFloor.append(dropSelectFloor);
    selectDivRoom.append(dropSelectRoom);
}


function getNumbersOfRooms(floor) {
    let diff = floor - 3;
    let firstOnFloor = diff * 10;
    let mass_rooms = []; // массив для комнат теперь локальная переменная

    for (let i = firstOnFloor + 1; i <= firstOnFloor + 10; i++) {
        mass_rooms.push(i);
    }

    return mass_rooms;
}

dropdownListsInit();



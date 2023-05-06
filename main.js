/* выпадающие списки этажей */
let floors = [];
let rooms = [];

for (let i = 3; i <= 27; i++) {
    floors.push(i);
}

function dropdownLists(arr) {
    const dropSelectFloor = document.querySelector('.form-select-floor');
    const selectDivFloor = document.querySelector('.select-dropdowns__floor');
    const dropSelectRoom = document.querySelector('.form-select-room');
    const selectDivRoom = document.querySelector('.select-dropdowns__meeting-room');

    for (let floor of arr) {
        let option = document.createElement('option');
        option.value = floor - 2;
        option.innerHTML = floor;
        dropSelectFloor.appendChild(option);
    }
    

    dropSelectFloor.addEventListener('change', function() {
        const selectedFloor = parseInt(dropSelectFloor.value) + 2;
        // alert(selectedFloor);

        let rooms = getNumbersOfRooms(selectedFloor);

        for (let room of rooms) {
            let option = document.createElement('option');
            option.value = room;
            option.innerHTML = room;
            dropSelectRoom.appendChild(option);
        }
    });
    
    selectDivFloor.append(dropSelectFloor);
    selectDivRoom.append(dropSelectRoom);
}

function getNumbersOfRooms(floor) {
    let diff = floor - 3;
    let firstOnFloor = diff * 10;

    for (let i = firstOnFloor + 1; i <= firstOnFloor + 10; i++) {
        rooms.push(i);
    }
    return rooms;
}

dropdownLists(floors);

// console.log(getNumbersOfRooms(5));


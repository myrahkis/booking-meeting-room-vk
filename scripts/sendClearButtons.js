/* кнопка отправить */

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('formBooking').addEventListener('submit', (e) => {
        e.preventDefault();
    
        const form = document.getElementById("formBooking");
        const submitter = document.querySelector("button[type=submit]");
        const formData = new FormData(form, submitter);
    
        console.log(JSON.stringify(Object.fromEntries(formData)));
    });
});


/* кнопка очистить */

document.addEventListener('DOMContentLoaded', () => {
    const clearButton = document.querySelector('.button__clear-btn');
    const dropSelectRoom = document.querySelector('.form-select-room');

    clearButton.addEventListener('reset', (e) => {
        e.preventDefault();
    })
    clearButton.addEventListener('click', () => {
        while (dropSelectRoom.childNodes.length) {
            if (dropSelectRoom.firstChild.tagName == 'OPTGROUP') {
                while (dropSelectRoom.firstChild.childNodes.length) {
                    dropSelectRoom.firstChild.removeChild(dropSelectRoom.firstChild.firstChild);
                }
            }
            dropSelectRoom.removeChild(dropSelectRoom.firstChild);
        }
    })
})



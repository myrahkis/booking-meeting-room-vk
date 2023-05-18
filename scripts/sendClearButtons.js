/* валидация даты */
function validateForm(form) {
    let object = Object.fromEntries(form);
    if (object.date == "" || object.date == null || !Date.parse(object.date)) return false;
    else return true;
}


/* кнопка отправить */
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('formBooking').addEventListener('submit', (e) => {
        e.preventDefault();
    
        const form = document.getElementById("formBooking");
        const submitter = document.querySelector("button[type=submit]");
        const labelValid = document.getElementById("validator");
        const formData = new FormData(form, submitter);

        if (validateForm(formData)) {
            console.log(JSON.stringify(Object.fromEntries(formData)));
            labelValid.innerHTML = "";
        } else {
            labelValid.innerHTML = "Дата введена не верна, повторите ввод";
        }
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



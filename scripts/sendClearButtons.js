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
    clearButton = document.querySelector('.button__clear-btn');

    clearButton.addEventListener('reset', (e) => {
        e.preventDefault();
    })
})



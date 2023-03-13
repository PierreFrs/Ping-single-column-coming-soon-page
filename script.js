const email = document.getElementById('email');
const submitButton = document.getElementById('submit');
const errorMessage = document.getElementById('error-message')



document.addEventListener('click', (e) => {
    if (e.target.closest(submitButton)) {

        // submit event
        submitButton.addEventListener('click', (e) => {
            e.preventDefault;
        
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
            if (email.value === '') {
                errorMessage.innerHTML = 'Please enter an email address';
                errorMessage.style.display = 'inline';
                email.classList.add('error');
            } else if (!pattern.test(email.value)) {
                errorMessage.innerHTML = 'Please enter a valid email address';
                errorMessage.style.display = 'inline';
                email.classList.add('error');
            } else {
                errorMessage.innerHTML = '';
                errorMessage.style.display = 'none';
                email.classList.remove('error');
            }
            });
        // Hide error when click elsewhere on the document
        } else {
        errorMessage.innerHTML = '';
        errorMessage.style.display = 'none';
        email.classList.remove('error');
    }            
});
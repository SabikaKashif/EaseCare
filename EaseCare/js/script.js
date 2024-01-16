let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


    
    function validateForm() {
        var name = document.getElementById('name').value;
        var number = document.getElementById('number').value;
        var email = document.getElementById('email').value;
        var appointmentDate = document.getElementById('appointmentDate').value;

        // Reset error messages
        document.getElementById('nameError').innerHTML = '';
        document.getElementById('numberError').innerHTML = '';
        document.getElementById('emailError').innerHTML = '';
        document.getElementById('dateError').innerHTML = '';

        var valid = true;

        if (name.trim() === '') {
            document.getElementById('nameError').innerHTML = 'Please enter your name';
            valid = false;
        }

        if (number.trim() === '' || isNaN(number)) {
            document.getElementById('numberError').innerHTML = 'Please enter a valid number';
            valid = false;
        }

        if (email.trim() === '' || !validateEmail(email)) {
            document.getElementById('emailError').innerHTML = 'Please enter a valid email address';
            valid = false;
        }

        if (appointmentDate.trim() === '') {
            document.getElementById('dateError').innerHTML = 'Please select an appointment date';
            valid = false;
        }

        return valid;
    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/; // regex => patten
        return re.test(email);
    }

    // Add event listener after the document is loaded
    document.getElementById('bookForm').addEventListener('submit', function (event) {
        // Prevent the form from submitting by default
        event.preventDefault();

        // Perform your validation
        if (validateForm()) {
            alert('Form submitted successfully!');
    
            document.getElementById('bookForm').reset();
        }
    });

   
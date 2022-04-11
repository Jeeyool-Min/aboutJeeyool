window.onload = function() {
    let form = document.querySelector('#contact-form');
    form.onsubmit = function (event){
        // Trim values before submitting
        form.name.value = form.name.value.trim();
        form.email.value = form.email.value.trim();
        form.address.value = form.address.value.trim();
        form.city.value = form.city.value.trim();
        form.querySelector('#feedback-message').value = form.querySelector('#feedback-message').value.trim();
        
        // Extra Validation for legacy browsers
        // Check if the form is valid according to attributes constraints 
        if(!form.checkValidity()){
            // Add class to invalid fields
            form.classList.add('validated');
            
            // If it is invalid, stop the submission
            event.preventDefault();
            return false;
        }
        // If everything is good, allow this form to be submitted
        return true;
    }
    form.querySelectorAll("input[name='feedback-type']").forEach(input => input.addEventListener('change', showHourlyRate));
}


/*
    // adding hourly rate input when the type of message is selected as hiring
    <div class="form-control"><label for="hourly-rate">HOURLY RATE($)</label><input id="hourly-rate" name="hourly-rate" type="number" step="0.1" required min=0></div>
*/
function showHourlyRate(e){
    if(e.target.id === 'feedback-hiring') {
        let div = document.createElement('div');
        div.className = 'form-control';
        div.id = 'hourly-rate-wrapper'
        let label = document.createElement('label');
        label.setAttribute('for','hourly-rate');
        label.innerHTML = 'HOURLY RATE($)';
        let span = document.createElement('span');
        span.className = 'required';
        span.innerHTML='*';
        label.appendChild(span);
        div.appendChild(label);
        let input = document.createElement('input');
        input.id = 'hourly-rate';
        input.name = 'hourly-rate';
        input.type = 'number';
        input.step = '0.1';
        input.required = true;
        input.min = 0;
        div.appendChild(input);
        document.querySelector('div.shorts').after(div);
    } else {
        document.querySelector('#hourly-rate-wrapper').remove();
    }
        
}

/*************************************************************
  ****** Extra Customized Validation *********
**************************************************************
https://developer.mozilla.org/en-US/docs/learn/forms/form_validation

if(!validateName(form.name.value)){
        form.name.oninput = function () {
            if(!validateName(form.name.value)){
                form.name.setCustomValidity('Name must contain only letters and optionally spaces');
        } else {
            form.name.setCustomValidity('');
            form.name.oninput = null;
        }
    }
}
function validateName(name) {
    if((/[a-zA-Z ]+/).test(name))
        return true;
    return false;
}
form.phone.setCustomValidity('Phone must consist of only 10 digits (no space, hyphens, etc.)');
form.city.setCustomValidity('City must consist only letters and optionally spaces');
function validatePhone(phone) {
    if((/[0-9]{10}/).test(phone))
        return true;
    return false;
}
function validateCity(city) {
    if((/[a-zA-Z ]/).test(city))
        return true;
    return false;
}
*/
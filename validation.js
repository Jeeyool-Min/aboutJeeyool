window.onload = function() {
    let form = document.querySelector('#contact-form');
    form.onsubmit = function (event){
        // just-in-case of browser not supporting validation,
        // Check if the form is valid according to attributes constraints 
        if(!form.checkValidity()){
            form.classList.add('validated');
            
            // If it is invalid, stop the submission
            event.preventDefault();
            return false;
        }

        // if everything is good, allow this form to be submitted
        return true;
    }
}
/*https://developer.mozilla.org/en-US/docs/learn/forms/form_validation */

/* adding hourly rate input when the type of message is selected as hiring*/
/*  
    <div class="form-control">
        <label for="hourly-rate">HOURLY RATE($)</label>
        <input id="hourly-rate" name="hourly-rate" type="number" step="0.1" required min=0>
    </div>
*/


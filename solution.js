window.addEventListener('DOMContentLoaded', function() {
    // when form is submitted
    const form = document.getElementById('orderForm');
    form.addEventListener('submit', function(event) {
      // stop the form from submitted just yet
    event.preventDefault();

      // find all checkboxes for toppings
    let checkedBoxes = 0;
    for (let index = 0; index < form.toppings.length; index++) {
        const checkbox = form.toppings[index];
        // if the current checkbox is checked, increase the count
        if (checkbox.checked) {
        checkedBoxes++;
        }
    }

      // check if at least one is checked
    if (checkedBoxes > 0) {
        // continue with the form submission
        form.submit();
    } else {
        // display some message
        alert('pick some toppings you weirdo')
    }
    })

})
const form = document.getElementById('form-availability');
	const checkInField = document.getElementById('form-availability-from');
	const checkOutField = document.getElementById('form-availability-to');
	const guestsField = document.getElementById('form-availability-guests');
	const emailField = document.getElementById('form-availability-email');
	const submitButton = document.getElementById('form-availability-submit');
	const checkInErrorElements = document.querySelectorAll('#check-in-error');
	const checkOutErrorElements = document.querySelectorAll('#check-out-error');
	const guestsErrorElements = document.querySelectorAll('#dog-number-error');
	const emailErrorElements = document.querySelectorAll('#e-mail-error');
	const invalidGuestsErrorElements = document.querySelectorAll('#dog-invalid-number-error');
	const invalidEmailErrorElements = document.querySelectorAll('#e-mail-invalid-error');
	const confirmReservationDiv = document.getElementById('form-confirm-reservation');
	const formLoader = document.querySelector('.form-availability-loader'); // Get the form loader element
	
	// Function to check if all required fields are filled
	function areRequiredFieldsFilled() {
	  return (
		checkInField.value.trim() !== '' &&
		checkOutField.value.trim() !== '' &&
		guestsField.value.trim() !== '' &&
		emailField.value.trim() !== ''
	  );
	}
	
	// Function to check if guest number is valid
	function isGuestNumberValid() {
	  const guestNumber = parseInt(guestsField.value.trim(), 10);
	  return !isNaN(guestNumber) && [1, 2, 3].includes(guestNumber);
	}
	
	// Function to check if email is valid
	function isEmailValid() {
	  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value.trim());
	}
	
	// Function to check if form is valid
	function isFormValid() {
	  return areRequiredFieldsFilled() && isGuestNumberValid() && isEmailValid();
	}
	
	// Initial button state
	submitButton.disabled = !isFormValid();
	
	// Event listener for input changes
	form.addEventListener('input', function() {
	  submitButton.disabled = !isFormValid();
	
	  // Guests number validation
	  for (const errorElement of invalidGuestsErrorElements) {
		if (!isGuestNumberValid() && guestsField.value.trim() !== '') {
		  errorElement.removeAttribute('hidden');
		} else {
		  errorElement.setAttribute('hidden', '');
		}
	  }
	
	  // Email validation
	  for (const errorElement of invalidEmailErrorElements) {
		if (!isEmailValid() && emailField.value.trim() !== '') {
		  errorElement.removeAttribute('hidden');
		} else {
		  errorElement.setAttribute('hidden', '');
		}
	  }
	});
	
	// Event listener for form submission
	form.addEventListener('submit', function(event) {
	  // Prevent default form submission
	  event.preventDefault();
	
	  // Check-in validation
	  if (checkInField.value.trim() === '') {
		for (const errorElement of checkInErrorElements) {
		  errorElement.removeAttribute('hidden');
		}
	  } else {
		for (const errorElement of checkInErrorElements) {
		  errorElement.setAttribute('hidden', '');
		}
	  }
	
	  // Check-out validation
	  if (checkOutField.value.trim() === '') {
		for (const errorElement of checkOutErrorElements) {
		  errorElement.removeAttribute('hidden');
		}
	  } else {
		for (const errorElement of checkOutErrorElements) {
		  errorElement.setAttribute('hidden', '');
		}
	  }
	
	  // Guests validation
	  if (guestsField.value.trim() === '') {
		for (const errorElement of guestsErrorElements) {
		  errorElement.removeAttribute('hidden');
		}
	  } else {
		for (const errorElement of guestsErrorElements) {
		  errorElement.setAttribute('hidden', '');
		}
	  }
	
	  // Email validation
	  if (emailField.value.trim() === '') {
		for (const errorElement of emailErrorElements) {
		  errorElement.removeAttribute('hidden');
		}
	  } else {
		for (const errorElement of emailErrorElements) {
		  errorElement.setAttribute('hidden', '');
		}
	  }
	
	  // Show confirmation div if form is valid
	  if (isFormValid()) {
		formLoader.style.display = 'block'; // Show the loader
		confirmReservationDiv.removeAttribute('hidden');
	
		// Hide loader and confirmation after a brief delay, reset form
		setTimeout(function() {
		  formLoader.style.display = 'none'; // Hide the loader
		  confirmReservationDiv.setAttribute('hidden', ''); // Hide the confirmation
	
		  // Reset form fields
		  checkInField.value = '';
		  checkOutField.value = '';
		  guestsField.value = '';
		  emailField.value = '';
	
		  // Reset error messages (if any)
		  for (const errorElement of checkInErrorElements) {
			errorElement.setAttribute('hidden', '');
		  }
		  for (const errorElement of checkOutErrorElements) {
			errorElement.setAttribute('hidden', '');
		  }
		  for (const errorElement of guestsErrorElements) {
			errorElement.setAttribute('hidden', '');
		  }
		  for (const errorElement of emailErrorElements) {
			errorElement.setAttribute('hidden', '');
		  }
		  for (const errorElement of invalidGuestsErrorElements) {
			errorElement.setAttribute('hidden', '');
		  }
		  for (const errorElement of invalidEmailErrorElements) {
			errorElement.setAttribute('hidden', '');
		  }
	
		  // Reset submit button state
		  submitButton.disabled = true;
		}, 4000); // Adjust the delay (in milliseconds) as needed
	  }
	});

    
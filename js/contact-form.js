const nameInput = document.getElementById('template-contactform-name');
const emailInput = document.getElementById('template-contactform-email');
const subjectInput = document.getElementById('template-contactform-subject');
const messageTextarea = document.getElementById('template-contactform-message');
const submitButton = document.getElementById('template-contactform-submit');
const emailErrorDiv = document.getElementById('e-mail-invalid-error');
const formSubmitedDiv = document.getElementById('form-submited');
const formSubmitDiv = document.getElementById('form-submit');

function checkFields() {
  const isNameEmpty = nameInput.value.trim() === '';
  const isEmailEmpty = emailInput.value.trim() === '';
  const isSubjectEmpty = subjectInput.value.trim() === '';
  const isMessageEmpty = messageTextarea.value.trim() === '';

  submitButton.disabled = isNameEmpty || isEmailEmpty || isSubjectEmpty || isMessageEmpty;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailRegex.test(emailInput.value);

  emailErrorDiv.hidden = isValidEmail || emailInput.value === '';
}

function handleSubmit(event) {
  event.preventDefault();

  formSubmitedDiv.hidden = false;
  formSubmitDiv.hidden = true;
}

// Attach event listeners directly to the elements
nameInput.addEventListener('input', checkFields);
emailInput.addEventListener('input', checkFields);
subjectInput.addEventListener('input', checkFields);
messageTextarea.addEventListener('input', checkFields);

// Attach submit event listener to the form
const form = document.getElementById('template-contactform');
if (form) {
  form.addEventListener('submit', handleSubmit);
} else {
  console.warn('Form element not found. Event listeners not attached.');
}

// Initial check on page load
checkFields();
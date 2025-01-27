const nameInput = document.getElementById('template-contactform-name');
const emailInput = document.getElementById('template-contactform-email');
const subjectInput = document.getElementById('template-contactform-subject');
const messageTextarea = document.getElementById('template-contactform-message');
const submitButton = document.getElementById('template-contactform-submit');

function checkFields() {
  const isNameEmpty = nameInput.value.trim() === '';
  const isEmailEmpty = emailInput.value.trim() === '';
  const isSubjectEmpty = subjectInput.value.trim() === '';
  const isMessageEmpty = messageTextarea.value.trim() === '';

  submitButton.disabled = isNameEmpty || isEmailEmpty || isSubjectEmpty || isMessageEmpty;
}

nameInput.addEventListener('input', checkFields);
emailInput.addEventListener('input', checkFields);
subjectInput.addEventListener('input', checkFields);
messageTextarea.addEventListener('input', checkFields);

checkFields(); // Initial check on page load
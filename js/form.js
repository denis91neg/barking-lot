	const button = document.querySelector('#radix-\\:R1rqfafnkq\\:');
	const targetDiv = document.querySelector('#radix-\\:R9rqfafnkq\\:');
	const parentDiv = document.querySelector('.mf');
	const title = document.querySelector('.fm-title');
	
	if (!button || !targetDiv || !parentDiv || !title) {
	  console.error('One or more elements not found');
	} else {
	  let isOpen = false;
	  button.addEventListener('click', () => {
		isOpen = !isOpen;
		if (isOpen) {
		  parentDiv.setAttribute('data-state', 'open');
		  title.setAttribute('data-state', 'open');
		  button.setAttribute('data-state', 'open');
		  button.setAttribute('aria-expanded', 'true');
		  targetDiv.removeAttribute('hidden');
		} else {
		  parentDiv.setAttribute('data-state', 'closed');
		  title.setAttribute('data-state', 'closed');
		  button.setAttribute('data-state', 'closed');
		  button.setAttribute('aria-expanded', 'false');
		  targetDiv.setAttribute('hidden', 'true');
		}
	  });
	}

	const newButton = document.querySelector('#radix-\\:R2rqfafnkq\\:');
	const newTargetDiv = document.querySelector('#radix-\\:Rarqfafnkq\\:');
	const newParentDiv = document.querySelector('.mf');
	const newTitle = document.querySelector('.fm-title');
	
	if (!newButton || !newTargetDiv || !newParentDiv || !newTitle) {
	  console.error('One or more elements not found');
	} else {
	  let isNewOpen = false;
	  newButton.addEventListener('click', () => {
		isNewOpen = !isNewOpen;
		if (isNewOpen) {
		  newParentDiv.setAttribute('data-state', 'open');
		  newTitle.setAttribute('data-state', 'open');
		  newButton.setAttribute('data-state', 'open');
		  newButton.setAttribute('aria-expanded', 'true');
		  newTargetDiv.removeAttribute('hidden');
		} else {
		  newParentDiv.setAttribute('data-state', 'closed');
		  newTitle.setAttribute('data-state', 'closed');
		  newButton.setAttribute('data-state', 'closed');
		  newButton.setAttribute('aria-expanded', 'false');
		  newTargetDiv.setAttribute('hidden', 'true');
		}
	  });
	}
	
	function setupToggle() {
		const heightbutton = document.querySelector('#radix-\\3A R1rqfafnkq\\3A');
		const heightfooterContent = document.querySelector('.footer-content');
		const heighttargetDiv = document.querySelector('#radix-\\3A R9rqfafnkq\\3A');
	  
		if (!heightbutton || !heightfooterContent || !heighttargetDiv) {
		  console.error('One or more elements not found');
		  return;
		}
	  
		let isOpen = false;
		button.addEventListener('click', () => {
		  isOpen = !isOpen;
		  const accordionContentHeight = window.getComputedStyle(heighttargetDiv).getPropertyValue('--radix-accordion-content-height');
		  footerContent.style.setProperty('--radix-accordion-content-height', isOpen ? accordionContentHeight : '0px'); 
		  footerContent.style.transition = 'all 0.3s ease-in-out';
		  if (isOpen) {
			footerContent.classList.add('open');
			requestAnimationFrame(() => {
				footerContent.style.setProperty('--radix-accordion-content-height', accordionContentHeight);
			  });
		  } else {
			footerContent.classList.remove('open');
		  }
		});
	  }
	  
	  setupToggle();

	  function setupToggle() {
		const heightnewbutton = document.querySelector('#radix-\\:R2rqfafnkq\\:');
		const heightnewfooterContent = document.querySelector('.footer-content');
		const heightnewtargetDiv = document.querySelector('#radix-\\:Rarqfafnkq\\:');
	  
		if (!heightnewbutton || !heightnewfooterContent || !heightnewtargetDiv) {
		  console.error('One or more elements not found');
		  return;
		}
	  
		let isOpen = false;
		button.addEventListener('click', () => {
		  isOpen = !isOpen;
		  const accordionnewContentHeight = window.getComputedStyle(heightnewtargetDiv).getPropertyValue('--radix-accordion-content-height');
		  footerContent.style.transition = 'all 0.3s ease-in-out';
		  if (isOpen) {
			footerContent.classList.add('open');
			requestAnimationFrame(() => {
				footerContent.style.setProperty('--radix-accordion-content-height', accordionnewContentHeight);
			  });
		  } else {
			footerContent.classList.remove('open');
		  }
		});
	  }
	  
	  setupToggle();


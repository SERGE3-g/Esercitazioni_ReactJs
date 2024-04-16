const form = document.querySelector('form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log(data);
    });

    const switchButton = document.querySelector('button[role="switch"]');
    switchButton.addEventListener('click', () => {
        switchButton.setAttribute('aria-checked', switchButton.getAttribute('aria-checked') === 'true' ? 'false' : 'true');
        switchButton.querySelector('span').classList.toggle('translate-x-3.5');
    });

    const countrySelect = document.querySelector('select[name="country"]');
    countrySelect.addEventListener('change');

    const privacyPolicyLink = document.querySelector('a[href="#"]');
    privacyPolicyLink.addEventListener('click', (e) => {
        e.preventDefault();
    });

    const input = document.querySelector('input[name="first-name"]');
    input.addEventListener('input', () => {
    });

    const textarea = document.querySelector('textarea[name="message"]');
    textarea.addEventListener('input');

    const emailInput = document.querySelector('input[type="email"]');
    emailInput.addEventListener('input');

    const phoneInput = document.querySelector('input[type="tel"]');
    phoneInput.addEventListener('input');

    const companyInput = document.querySelector('input[name="company"]');
    companyInput.addEventListener('input');

    const lastNameInput = document.querySelector('input[name="last-name"]');
    lastNameInput.addEventListener('input');

    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.addEventListener('click', () => {
    });

    const goPostsButton = document.querySelector('button[type="goPosts"]');
    goPostsButton.addEventListener('click', () => {
    });

    const nav = document.querySelector('nav');
    nav.addEventListener('click', (e) => {
        e.preventDefault();
    });
    
    // const btn = document.getElementById('btn');
    // btn.addEventListener('click', async ())

    
    
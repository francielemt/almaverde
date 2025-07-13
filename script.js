document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    const navUL = document.querySelector('.navegation ul'); 
    if (menu && navUL) { 
        menu.addEventListener('click', () => {
            navUL.classList.toggle('active');
            menu.classList.toggle('active');
        });

        navUL.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) { 
                    navUL.classList.remove('active');
                    menu.classList.remove('active');
                }
            });
        });
    }

    function showError(element, message) {
        if (element) {
            element.textContent = message;
            element.style.display = 'block';
        }
    }

    function clearError(element) {
        if (element) {
            element.textContent = '';
            element.style.display = 'none';
        }
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isStrongPassword(password) {
        if (password.length < 6) return false;
        if (!/[a-zA-Z]/.test(password)) return false; 
        if (!/[0-9]/.test(password)) return false;    
        return true;
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            let isValid = true;

            const nameInput = document.getElementById('contactName');
            const emailInput = document.getElementById('contactEmail');
            const messageInput = document.getElementById('contactMessage');

            clearError(document.getElementById('contactNameError'));
            clearError(document.getElementById('contactEmailError'));
            clearError(document.getElementById('contactMessageError'));
            document.getElementById('contactSuccessMessage').style.display = 'none';

            if (nameInput.value.trim() === '') {
                showError(document.getElementById('contactNameError'), 'Por favor, digite seu nome.');
                isValid = false;
            }

            if (emailInput.value.trim() === '') {
                showError(document.getElementById('contactEmailError'), 'Por favor, digite seu email.');
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                showError(document.getElementById('contactEmailError'), 'Por favor, digite um email válido.');
                isValid = false;
            }

            if (messageInput.value.trim() === '') {
                showError(document.getElementById('contactMessageError'), 'Por favor, digite sua mensagem.');
                isValid = false;
            } else if (messageInput.value.trim().length < 10) {
                showError(document.getElementById('contactMessageError'), 'A mensagem deve ter pelo menos 10 caracteres.');
                isValid = false;
            }

            if (isValid == true) { 
                console.log('Dados do Contato:', {
                    nome: nameInput.value.trim(),
                    email: emailInput.value.trim(),
                    mensagem: messageInput.value.trim()
                });
                
                setTimeout(() => {
                    showError(document.getElementById('contactSuccessMessage'), 'Mensagem enviada com sucesso! Em breve entraremos em contato.');
                    contactForm.reset();
                }, 500);
            }
        });
    }

    const suggestionsForm = document.getElementById('suggestionsForm');
    if (suggestionsForm) {
        suggestionsForm.addEventListener('submit', (event) => {
            event.preventDefault();
            let isValid = true;

            const suggestionEmailInput = document.getElementById('suggestionEmail');
            const suggestionMessageInput = document.getElementById('suggestionMessage');

            clearError(document.getElementById('suggestionEmailError'));
            clearError(document.getElementById('suggestionMessageError'));
            document.getElementById('suggestionSuccessMessage').style.display = 'none';

            if (suggestionEmailInput.value.trim() !== '' && !isValidEmail(suggestionEmailInput.value.trim())) {
                showError(document.getElementById('suggestionEmailError'), 'Por favor, digite um email válido (ou deixe em branco).');
                isValid = false;
            }

            if (suggestionMessageInput.value.trim() === '') {
                showError(document.getElementById('suggestionMessageError'), 'Por favor, digite sua sugestão.');
                isValid = false;
            } else if (suggestionMessageInput.value.trim().length < 20) {
                showError(document.getElementById('suggestionMessageError'), 'A sugestão deve ter pelo menos 20 caracteres.');
                isValid = false;
            }

            if (isValid) {
                console.log('Dados da Sugestão:', {
                    nome: document.getElementById('suggestionName').value.trim(),
                    email: suggestionEmailInput.value.trim(),
                    sugestao: suggestionMessageInput.value.trim()
                });
                
                setTimeout(() => {
                    showError(document.getElementById('suggestionSuccessMessage'), 'Obrigado por sua sugestão! Valorizamos sua opinião.');
                    suggestionsForm.reset();
                }, 500);
            }
        });
    }

    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (event) => {
            event.preventDefault();
            let isValid = true;

            const newsletterEmailInput = document.getElementById('newsletterEmail');

            clearError(document.getElementById('newsletterEmailError'));
            document.getElementById('newsletterSuccessMessage').style.display = 'none';

            if (newsletterEmailInput.value.trim() === '') {
                showError(document.getElementById('newsletterEmailError'), 'Por favor, digite seu email.');
                isValid = false;
            } else if (!isValidEmail(newsletterEmailInput.value.trim())) {
                showError(document.getElementById('newsletterEmailError'), 'Por favor, digite um email válido.');
                isValid = false;
            }

            if (isValid) {
                console.log('Email para Newsletter:', newsletterEmailInput.value.trim());
                
                setTimeout(() => {
                    showError(document.getElementById('newsletterSuccessMessage'), 'Inscrição na newsletter realizada com sucesso!');
                    newsletterForm.reset();
                }, 500);
            }
        });
    }

    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            let isValid = true;

            const signupNameInput = document.getElementById('signupName');
            const signupEmailInput = document.getElementById('signupEmail');
            const signupPasswordInput = document.getElementById('signupPassword');
            const signupConfirmPasswordInput = document.getElementById('signupConfirmPassword');
            const termsAcceptedCheckbox = document.getElementById('termsAccepted');

            clearError(document.getElementById('signupNameError'));
            clearError(document.getElementById('signupEmailError'));
            clearError(document.getElementById('signupPasswordError'));
            clearError(document.getElementById('signupConfirmPasswordError'));
            clearError(document.getElementById('termsAcceptedError'));
            document.getElementById('signupSuccessMessage').style.display = 'none';

            if (signupNameInput.value.trim() === '') {
                showError(document.getElementById('signupNameError'), 'Por favor, digite seu nome completo.');
                isValid = false;
            }

            if (signupEmailInput.value.trim() === '') {
                showError(document.getElementById('signupEmailError'), 'Por favor, digite seu email.');
                isValid = false;
            } else if (!isValidEmail(signupEmailInput.value.trim())) {
                showError(document.getElementById('signupEmailError'), 'Por favor, digite um email válido.');
                isValid = false;
            }

            if (signupPasswordInput.value.trim() === '') {
                showError(document.getElementById('signupPasswordError'), 'Por favor, digite uma senha.');
                isValid = false;
            } else if (!isStrongPassword(signupPasswordInput.value.trim())) {
                showError(document.getElementById('signupPasswordError'), 'A senha deve ter pelo menos 6 caracteres, incluindo letras e números.');
                isValid = false;
            }

            if (signupConfirmPasswordInput.value.trim() === '') {
                showError(document.getElementById('signupConfirmPasswordError'), 'Por favor, confirme sua senha.');
                isValid = false;
            } else if (signupPasswordInput.value.trim() !== signupConfirmPasswordInput.value.trim()) {
                showError(document.getElementById('signupConfirmPasswordError'), 'As senhas não coincidem.');
                isValid = false;
            }
            
            if (!termsAcceptedCheckbox.checked) {
                showError(document.getElementById('termsAcceptedError'), 'Você deve aceitar os Termos de Uso.');
                isValid = false;
            }

            if (isValid) {
                console.log('Dados do Cadastro: tudo certinho!'); 
                
                setTimeout(() => {
                    showError(document.getElementById('signupSuccessMessage'), 'Cadastro realizado com sucesso! Bem-vindo à Alma Verde!');
                    signupForm.reset();
                }, 500);
            }
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const socialIcons = document.querySelector('.social-icons');
    if (socialIcons) {
        const observerOptions = {
            root: null, 
            rootMargin: '0px',
            threshold: 0.1 
        };

        const socialIconsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up-active'); 
                    observer.unobserve(entry.target); 
                }
            });
        }, observerOptions);

        socialIconsObserver.observe(socialIcons);
    }

    const emeraldImg = document.querySelector('.boxImg .img');
    if (emeraldImg) {
        emeraldImg.addEventListener('mouseover', () => {
            emeraldImg.style.transform = 'scale(1.05)';
            emeraldImg.style.transition = 'transform 0.3s ease-in-out';
        });

        emeraldImg.addEventListener('mouseout', () => {
            emeraldImg.style.transform = 'scale(1)';
        });
    }

    let cartItemCount = 0;
    const cartButtons = document.querySelectorAll('.add-to-cart-btn');

    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartItemCount++;
            alert(`Item adicionado ao carrinho! Total de itens: ${cartItemCount}`);
            console.log(`Carrinho agora tem ${cartItemCount} itens.`);
        });
    });

});
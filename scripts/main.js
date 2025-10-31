(function () {
    'use strict';

    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const header = document.querySelector('.header');
    const desktopMediaQuery = window.matchMedia('(min-width: 768px)');

    if (!navToggle || !navMenu) {
        console.warn('Navigation elements not found');
        return;
    }

    const navLinks = navMenu.querySelectorAll('.nav__link');

    function setMenuState(isOpen, { desktop = false } = {}) {
        navMenu.setAttribute('data-open', String(isOpen));
        navMenu.setAttribute('aria-hidden', String(!isOpen));
        navToggle.setAttribute('aria-expanded', desktop ? 'false' : String(isOpen));
    }

    function closeMenu(options) {
        setMenuState(false, options);
    }

    function openMenu(options) {
        setMenuState(true, options);
    }

    const handleBreakpointChange = (mediaQuery) => {
        if (mediaQuery.matches) {
            openMenu({ desktop: true });
        } else {
            closeMenu();
        }
    };

    handleBreakpointChange(desktopMediaQuery);

    if (typeof desktopMediaQuery.addEventListener === 'function') {
        desktopMediaQuery.addEventListener('change', handleBreakpointChange);
    } else if (typeof desktopMediaQuery.addListener === 'function') {
        desktopMediaQuery.addListener(handleBreakpointChange);
    }

    navToggle.addEventListener('click', () => {
        if (desktopMediaQuery.matches) {
            return;
        }

        const isOpen = navMenu.getAttribute('data-open') === 'true';
        setMenuState(!isOpen);
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (!desktopMediaQuery.matches) {
                closeMenu();
            }
        });
    });

    document.addEventListener('click', (event) => {
        if (desktopMediaQuery.matches) {
            return;
        }

        const target = event.target;
        if (!(target instanceof Node)) {
            return;
        }

        const isClickInsideNav = navMenu.contains(target) || navToggle.contains(target);
        const isMenuOpen = navMenu.getAttribute('data-open') === 'true';

        if (!isClickInsideNav && isMenuOpen) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape' || desktopMediaQuery.matches) {
            return;
        }

        const isMenuOpen = navMenu.getAttribute('data-open') === 'true';
        if (isMenuOpen) {
            closeMenu();
            navToggle.focus();
        }
    });

    const form = document.querySelector('.contact__form');
    if (form instanceof HTMLFormElement) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            console.log('Form submitted with data:', data);

            alert('Thank you for your message! (This is a demo - no actual email was sent)');

            form.reset();
        });
    }

    function handleSmoothScroll() {
        const anchors = document.querySelectorAll('a[href^="#"]');
        anchors.forEach((anchor) => {
            anchor.addEventListener('click', (event) => {
                const href = anchor.getAttribute('href');

                if (!href || href === '#') {
                    return;
                }

                const target = document.querySelector(href);
                if (!target) {
                    return;
                }

                event.preventDefault();

                const navHeight = header?.offsetHeight ?? 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            });
        });
    }

    handleSmoothScroll();

    function observeSections() {
        const sections = document.querySelectorAll('section[id]');
        if (!('IntersectionObserver' in window)) {
            return;
        }

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -80% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                const id = entry.target.getAttribute('id');
                if (!id) {
                    return;
                }

                navLinks.forEach((link) => {
                    const href = link.getAttribute('href');
                    if (href === `#${id}`) {
                        link.setAttribute('aria-current', 'page');
                    } else {
                        link.removeAttribute('aria-current');
                    }
                });
            });
        }, observerOptions);

        sections.forEach((section) => observer.observe(section));
    }

    observeSections();

    if (header) {
        let lastScroll = window.pageYOffset;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            const isMobileMenuOpen = navMenu.getAttribute('data-open') === 'true' && !desktopMediaQuery.matches;

            if (isMobileMenuOpen) {
                header.style.transform = 'translateY(0)';
                lastScroll = currentScroll;
                return;
            }

            if (currentScroll > lastScroll && currentScroll > 120) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }

            lastScroll = currentScroll;
        }, { passive: true });
    }
})();

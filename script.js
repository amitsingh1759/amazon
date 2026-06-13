document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle 
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        if(nav.style.display === 'flex') {
            nav.style.flexDirection = 'column';
            nav.style.position = 'absolute';
            nav.style.top = '70px';
            nav.style.left = '0';
            nav.style.width = '100%';
            nav.style.backgroundColor = '#0f172a';
            nav.style.padding = '2rem';
        }
    });

    // 2. Interactive Lightbox Gallery
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const lightboxClose = document.querySelector('.lightbox-close');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgPath = item.querySelector('img').src;
            const title = item.getAttribute('data-title');
            const desc = item.getAttribute('data-desc');

            lightboxImg.src = imgPath;
            lightboxTitle.innerText = title;
            lightboxDesc.innerText = desc;
            lightbox.style.display = 'flex';
        });
    });

    lightboxClose.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // 3. Join Us Modal System
    const joinModal = document.getElementById('joinModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.querySelector('.close-modal');

    openModalBtn.addEventListener('click', () => {
        joinModal.style.display = 'flex';
    });

    closeModalBtn.addEventListener('click', () => {
        joinModal.style.display = 'none';
    });

    // Close windows if outside area clicked
    window.addEventListener('click', (e) => {
        if (e.target === joinModal) joinModal.style.display = 'none';
        if (e.target === lightbox) lightbox.style.display = 'none';
    });

    // 4. Dynamic Architecture/Project Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.classList.remove('hide');
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });

    // 5. Contact Form Simulation
    const form = document.getElementById('contact-form');
    const responseDiv = document.getElementById('form-response');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        responseDiv.innerText = "Sending ICMP packets... (Processing Request)";
        
        setTimeout(() => {
            responseDiv.innerText = "Connection established! HTTP 200 OK. Message received.";
            form.reset();
        }, 2000);
    });
});

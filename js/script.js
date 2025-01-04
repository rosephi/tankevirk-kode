
function showSidebar () {
    const sidebar = document.querySelector ('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar () {
    const sidebar = document.querySelector ('.sidebar')
    sidebar.style.display = 'none'
}

document.addEventListener('DOMContentLoaded', () => {
    const dropdownLink = document.getElementById('dropdownLink');
    const dropdownMenu = document.querySelector('.dropdown-menu');


dropdownLink.addEventListener('click', (e) => {
    e.preventDefault(); 
     const isVisible = dropdownMenu.style.display === 'block';
     dropdownMenu.style.display = isVisible ? 'none' : 'block';
});

   
document.addEventListener('click', (e) => {
if (!dropdownMenu.contains(e.target) && !dropdownLink.contains(e.target)) {
            dropdownMenu.style.display = 'none';
    }
});
});

document.addEventListener('DOMContentLoaded', () => {
    const sidebarDropdownLink = document.getElementById('sidebarDropdownLink');
    const sidebarDropdown = sidebarDropdownLink.closest('.dropdown');

    // Toggle dropdown on link click
    sidebarDropdownLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior

        // Check if the dropdown is open
        const isOpen = sidebarDropdown.classList.contains('open');

        // Toggle the "open" class
        if (isOpen) {
            sidebarDropdown.classList.remove('open');
        } else {
            sidebarDropdown.classList.add('open');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.carousel-card');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    const delay = 5000; 

    // Function to show a specific card
    function showCard(index) {
        cards.forEach((card, i) => {
            card.classList.remove('active');
            dots[i].classList.remove('active');
            if (i === index) {
                card.classList.add('active');
                dots[i].classList.add('active');
            }
        });
        currentIndex = index;
    }

    // Automatically switch cards
    function startCarousel() {
        setInterval(() => {
            let nextIndex = (currentIndex + 1) % cards.length;
            showCard(nextIndex);
        }, delay);
    }

    // Dot click event
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showCard(index);
        });
    });

    // Start the carousel
    startCarousel();
});

var swiper = new Swiper(".custom-slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },
  });
  
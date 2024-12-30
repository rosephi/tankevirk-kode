
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
    e.preventDefault(); // Prevent default link behavior
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

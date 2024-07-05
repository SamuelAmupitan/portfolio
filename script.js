document.addEventListener('DOMContentLoaded', () => {
    const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDay = document.querySelector('[data-testid="currentDay"]');

    function updateTime() {
        const now = new Date();

        const hours = String(now.getUTCHours()).padStart(2, '0');
        const minutes = String(now.getUTCMinutes()).padStart(2, '0');
        const seconds = String(now.getUTCSeconds()).padStart(2, '0');

        const utcTimeString = `${hours}:${minutes}:${seconds}`;

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const utcDay = days[now.getUTCDay() - 1]; 

        currentTimeUTC.textContent = utcTimeString; 
        currentDay.textContent = utcDay; 
    }

    setInterval(updateTime, 1000);
});


let isMenuOpen = false;

function toggleMenu() {
    const menuIconDiv = document.querySelector('.menu-icon');
    const navigationMenu = document.querySelector('.navigation-menu');

    isMenuOpen = !isMenuOpen; 

    if (isMenuOpen) {
        navigationMenu.style.display = 'flex';
        menuIconDiv.querySelector('.open-icon').style.display = 'none'; 
        menuIconDiv.querySelector('.close-icon').style.display = 'block';
    } else {
        navigationMenu.style.display = 'none';
        menuIconDiv.querySelector('.open-icon').style.display = 'block'; 
        menuIconDiv.querySelector('.close-icon').style.display = 'none';
    }
}

document.addEventListener('click', function(event) {
    const isClickInsideMenu = navigationMenu.contains(event.target);
    if (!isClickInsideMenu) {
        isMenuOpen = false;
        navigationMenu.style.display = 'none';
        document.querySelector('.open-icon').style.display = 'block';
        document.querySelector('.close-icon').style.display = 'none';
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const facilities = document.querySelectorAll('.facility');

    facilities.forEach((facility, index) => {
        facility.addEventListener('mouseover', () => {
            facility.style.backgroundColor = '#f0fff0';
        });

        facility.addEventListener('mouseout', () => {
            facility.style.backgroundColor = 'white';
        });
    });
});

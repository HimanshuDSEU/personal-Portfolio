/*################## toggle icon navbar #############*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let width = screen.width;

if (width <= 768) {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



/*##################Script section active link#############*/
let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classlist.remove(".active");
                document.querySelector('header nav a[href*=' + id + ']').classlist.add('active');
            });
        };
    });
    /*################## Sticky navbar #############*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*####################### remove toggle icon and navbar when click navbar link(scroll) ############*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const nav_list = document.getElementById('navbar__list');
const sections = document.getElementsByTagName('section');
const topButton = document.getElementById('goToTop');
let sectionsList = nav_list.childNodes;


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createNavBarItem(s){
    let node = document.createElement('LI');
    //let anchor = document.createElement('A');
    let name = s.getAttribute('data-nav');
    node.innerText = name;
    return node;
}


// build the nav
for (let section of sections){
    console.log(typeof(section.getAttribute('data-nav')));
    nav_list.appendChild(createNavBarItem(section));
}


// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', topElement);
function topElement(){
    for (let i = 0; i < sections.length; i++){
    let distTop = sections[i].getBoundingClientRect().top;
    if (distTop < 100 && distTop > -600){
        sections[i].classList.add('active');
        sections[i].style.backgroundColor = 'black';
        sectionsList[i].style.backgroundColor = 'red'; 
    }
    else{
        sections[i].classList.remove('active');
        sections[i].style.backgroundColor = '';
        sectionsList[i].style.backgroundColor = ''; 
    }
}}


//scroll to top of the page when user clicks the goToTop button
topButton.addEventListener('click', function(){
    window.scrollTo({
        top: 0
    });
});


// Scroll to anchor ID using scrollTO event
const scroll_to = () =>{
    const links = document.querySelectorAll('.navbar__menu li');
    for (let l = 0; l < links.length; l++){
        links[l].addEventListener('click', () =>{
            sections[l].scrollIntoView();
        });
    }
}
scroll_to();



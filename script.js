function showSection(sectionId){

    let sections = document.querySelectorAll('.section');

    sections.forEach(section=>{
        section.classList.remove('active');
    });

    document.getElementById(sectionId)
    .classList.add('active');
}


/* Active Menu Highlight */

const menuItems = document.querySelectorAll('.menu li');

menuItems.forEach(item=>{

    item.addEventListener('click',function(){

        menuItems.forEach(btn=>{
            btn.style.background='#1e293b';
            btn.style.color='white';
        });

        this.style.background='#38bdf8';
        this.style.color='black';

    });

});


/* Typing Effect */

const title = document.querySelector("#home h1");

const text = "Hello, I'm Babar Akram";

let i = 0;

title.innerHTML = "";

function typing(){

    if(i < text.length){

        title.innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,80);

    }

}

window.onload = typing;


/* Scroll Animation */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

});

document.querySelectorAll('.card,.project-card,.timeline-item').forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(30px)";
    el.style.transition="0.6s";

    observer.observe(el);

});

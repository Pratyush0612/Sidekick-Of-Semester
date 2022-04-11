//  =======================navbar========================== //
let nav =document.getElementById("navbar");
let  opennav=document.getElementById("openNav");
let  closenav=document.getElementById("closeNav");
function openNav(){
    nav.style.right="0"; 
}
function closeNav(){
    nav.style.right="-50vw"; 
}
// =================helps in======================//
const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener(
        'mouseenter', () => {
            panels.forEach(panel => {
                panel.classList.remove('active');
            })
            panel.classList.add('active')
        }
    )
})
// ============================on scroll animation==============
let lh = document.querySelectorAll('.lefthide');
let rh = document.querySelectorAll('.righthide');
let th = document.querySelectorAll('.tophide');

window.addEventListener('scroll',toshow);
toshow();
function toshow() {
    let bottom = window.innerHeight/6*5;
    lh.forEach((show) => {
        const boxtop = show.getBoundingClientRect().top;
        if(boxtop < bottom){
            show.classList.add('show');
        }
        else
        show.classList.remove('show');
    })
    rh.forEach((show) => {
        const boxtop = show.getBoundingClientRect().top;
        if(boxtop < bottom){
            show.classList.add('show');
        }
        else
        show.classList.remove('show');
    })
    th.forEach((show) => {
        const boxtop = show.getBoundingClientRect().top;
        if(boxtop < bottom){
            show.classList.add('show');
        }
        else
        show.classList.remove('show');
    })
    
}

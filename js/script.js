const header = document.querySelector("header");
window.addEventListener ("scroll" , function() {
    header.classList.toggle("sticky" , window.scrollY > 100);
})

function team(){
    document.getElementById('teams').style.color="#ff4d05"
    document.getElementById('homes').style.color='#ccc'
    document.getElementById('abouts').style.color='#ccc'
}

function home(){
    document.getElementById('teams').style.color="#ccc"
    document.getElementById('homes').style.color='#ff4d05'
    document.getElementById('abouts').style.color='#ccc'
}

function about(){
    document.getElementById('teams').style.color="#ccc"
    document.getElementById('homes').style.color='#ccc'
    document.getElementById('abouts').style.color='#ff4d05'
}
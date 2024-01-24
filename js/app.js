// counter
let counters = document.querySelectorAll('.counter');
counters.forEach(counter => {

    let ending = counter.dataset.ending;
    let count = 0;
    let duration =  ending / 10000
    let counting = setInterval(()=>{
        count++;
        counter.innerHTML  = count

        if(count >= ending){
            clearInterval(counting)
        }

    }, duration)


})

// counter end

//  darkmode  

let body = document.querySelector('body');
let darkmodeBtn = document.querySelector('.darkmodeBtn');

darkmodeBtn.addEventListener(`click`, () =>{
    body.classList.toggle(`darkMode`);
})





//  darkmode ends 
// back to top
let backToTop = document.querySelector(`.backToTop_btn`);

window.addEventListener(`scroll`, (event) => {
    
    let bodyHeight = body.clientHeight - window.innerHeight;
    let scrollTop = Math.round(window.scrollY);
    let percentage = Math.round((100 / bodyHeight) * scrollTop);
    

    backToTop.style.backgroundImage = `conic-gradient(green 0% ${percentage}%,white 0% ${percentage}% )`;



});


backToTop.addEventListener(`click`, () => {
    scroll({
        top: 0,
        behavior: `smooth`
    })
});

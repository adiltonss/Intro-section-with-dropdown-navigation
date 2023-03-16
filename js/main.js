function qs(selector, parent = document){
    return parent.querySelector(selector)
}

function qsAll(selector, parent = document){
    return parent.querySelectorAll(selector)
}

qsAll('.show-hidden-els').forEach(btn => {
    btn.addEventListener('click', (e)=>{
        let el = e.target.nextElementSibling 
        if(getDisplaStatus(el) === 'none'){
            el.style.display = 'flex'
            e.target.children[0].children[0].src = "images/icon-arrow-up.svg"
        }else{
            el.style.display = 'none'
            e.target.children[0].children[0].src = "images/icon-arrow-down.svg"
        }
    })
})

function getDisplaStatus(el){
    let data = window.getComputedStyle(el)
    return data.getPropertyValue('display')
}

qs('.menu-btn').addEventListener("click", (e)=>{
    qs('.menu-options').style.display = 'flex'
})

qs('.close-menu-btn').addEventListener("click", ()=>{
    qs('.menu-options').style.display = 'none'
})
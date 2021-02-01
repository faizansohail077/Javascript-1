const panels = document.querySelectorAll('.panel')
console.log(panels)

panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        RemoveClass()
        panel.classList.add('active')
    })
})

const RemoveClass=()=>{
    panels.forEach((panel)=>{
        panel.classList.remove('active')
    })
}
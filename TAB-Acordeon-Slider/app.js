
// -------- script para TAB  -------- 
const boton = document.querySelectorAll('.button')
const elemento = document.querySelectorAll('.element')

boton.forEach((cadaBoton, itemBoton) => {
    cadaBoton.addEventListener('click', () => {
        elemento.forEach((element, i) => {
            elemento[i].classList.remove('active')
            boton[i].classList.remove('active')
        })

        elemento[itemBoton].classList.add('active')
        boton[itemBoton].classList.add('active')
    })
}
)

// -------- script para ACORDEON  -------- 

const acordeonTitulos = document.querySelectorAll('.acordeonTitle')
const acordeonParrafos = document.querySelectorAll('.acordeonParrafo')

acordeonTitulos.forEach((cadaParrafo, itemParrafo) => {
    cadaParrafo.addEventListener('click', () => {
        acordeonParrafos.forEach((cada, i) => {
            acordeonParrafos[i].classList.remove('active')
            acordeonTitulos[i].classList.remove('active')
        })
        acordeonParrafos[itemParrafo].classList.add('active')

    })

})

// ------------ scrip para slider ----------------- 
const sliderButton = document.querySelectorAll('.sliderButton')
const imgSliderContainer = document.querySelector('.imgSliderContainer')

sliderButton.forEach((cada, iButton) => {
    let qImages = sliderButton.length
    let numBoton = iButton

    cada.addEventListener('click', () => {
        sliderButton.forEach((cadaB, ibutton) => {
            cadaB.classList.remove('active')
        })

        cada.classList.add('active')
        imgSliderContainer.style.transform= `translateX(calc((${numBoton}*(-100%/${qImages})))`;
    }


    )
})


let categorias = document.getElementsByClassName('nav-default-list__item')
let subcategoriaPadre = document.getElementsByClassName('popover')
let subcategorias = document.getElementsByClassName('nav-default-list--horizontal__subitem')
let popover = document.getElementById('popover-menu')

categorias[1].addEventListener('mouseenter', (e) => {
  popover.style = 'margin-left: 115px'   
})
categorias[2].addEventListener('mouseenter', (e) => {
  popover.style = 'margin-left: 237.94px'
})
categorias[3].addEventListener('mouseenter', (e) => {
  popover.style = 'margin-left: 336.49px'   
})

subcategoriaPadre[0].addEventListener('mouseenter', (e) => {
  subcategorias[2].classList.toggle('invisible')
  subcategorias[3].classList.toggle('invisible')
  subcategorias[4].classList.toggle('invisible')
  subcategorias[5].classList.toggle('invisible')
  subcategorias[6].classList.toggle('invisible')
})

subcategoriaPadre[1].addEventListener('mouseenter', (e) => {
  subcategorias[8].classList.toggle('invisible') 
  subcategorias[9].classList.toggle('invisible') 
  subcategorias[10].classList.toggle('invisible') 
  subcategorias[11].classList.toggle('invisible') 
})

subcategoriaPadre[2].addEventListener('mouseenter', (e) => {
  subcategorias[19].classList.toggle('invisible') 
  subcategorias[20].classList.toggle('invisible')
  subcategorias[21].classList.toggle('invisible')
})

subcategoriaPadre[0].addEventListener('mouseleave', (e) => {
  subcategorias[2].classList.toggle('invisible')
  subcategorias[3].classList.toggle('invisible')
  subcategorias[4].classList.toggle('invisible')
  subcategorias[5].classList.toggle('invisible')
  subcategorias[6].classList.toggle('invisible')
})

subcategoriaPadre[1].addEventListener('mouseleave', (e) => {
  subcategorias[8].classList.toggle('invisible') 
  subcategorias[9].classList.toggle('invisible') 
  subcategorias[10].classList.toggle('invisible') 
  subcategorias[11].classList.toggle('invisible')  
})

subcategoriaPadre[2].addEventListener('mouseleave', (e) => {
  subcategorias[19].classList.toggle('invisible') 
  subcategorias[20].classList.toggle('invisible')
  subcategorias[21].classList.toggle('invisible')
})

let meliIcon = document.getElementsByTagName('path')

for(let i = 5 ; i <= 17 ; i++){
  meliIcon[i].style.setProperty('fill','rgb(187,22,22)','important')
}

let categoriasFooter = document.getElementsByClassName('div-h6')
let subcategoriasFooter = document.getElementsByClassName('roboto')
let debug = document.getElementsByClassName('categoria-footer')
let subcategoriasDiv = document.getElementsByClassName('lista-footer')
let divIcons = document.getElementsByClassName('div-icons')

if(screen.width <= 800){
  for(let i = 0 ; i < subcategoriasFooter.length ; i++){
    subcategoriasFooter[i].classList.add('invisible')
  }

  categoriasFooter[0].innerHTML = '<h6>SOBRE MILLAM</h6><h6>˅</h6>'
  categoriasFooter[1].innerHTML = '<h6>ASISTENCIA</h6><h6>˅</h6>'
  categoriasFooter[2].innerHTML = '<h6>TIENDA BARRIO ITALIA</h6><h6>˅</h6>'

  debug[0].addEventListener('click', (e) => {
    subcategoriasFooter[0].classList.toggle('invisible')
    subcategoriasFooter[1].classList.toggle('invisible')
    subcategoriasFooter[2].classList.toggle('invisible')
    subcategoriasFooter[3].classList.toggle('invisible')
    subcategoriasFooter[4].classList.toggle('invisible')

    debug[0].classList.toggle('height')
  })
  debug[1].addEventListener('click', (e) => {
    subcategoriasFooter[5].classList.toggle('invisible')
    subcategoriasFooter[6].classList.toggle('invisible')
    subcategoriasFooter[7].classList.toggle('invisible')
    subcategoriasFooter[8].classList.toggle('invisible')
    subcategoriasFooter[9].classList.toggle('invisible')

    debug[1].classList.toggle('height')
  })
  debug[2].addEventListener('click', (e) => {
    subcategoriasFooter[10].classList.toggle('invisible')
    subcategoriasFooter[11].classList.toggle('invisible')
    subcategoriasFooter[12].classList.toggle('invisible')

    debug[2].classList.toggle('height')
  })

  divIcons[0].classList.toggle('invisible')
  divIcons[1].classList.toggle('invisible')
}

let hamburguesaIcon = document.getElementById('hamburguer-menu')
let menuHamburguesa = document.getElementsByClassName('menu-hamburguesa')

hamburguesaIcon.addEventListener('click',(e) => {
  menuHamburguesa[0].classList.toggle('invisible')
})

let itemHamburguesa = document.getElementsByClassName('item-hamburguesa')
let itemWithArrow = document.getElementsByClassName('item-with-arrow')

itemHamburguesa[0].addEventListener('click',(e) => {


  itemWithArrow[0].classList.toggle('footer-ms')
  itemWithArrow[1].classList.toggle('footer-ms')

  itemHamburguesa[1].classList.toggle('invisible')
  itemHamburguesa[2].classList.toggle('invisible')
  itemHamburguesa[3].classList.toggle('invisible')
  itemHamburguesa[4].classList.toggle('invisible')
  itemHamburguesa[5].classList.toggle('invisible')
  itemHamburguesa[6].classList.toggle('invisible')
  itemHamburguesa[7].classList.toggle('invisible')
  itemHamburguesa[8].classList.toggle('invisible')
  itemHamburguesa[9].classList.toggle('invisible')
  itemHamburguesa[10].classList.toggle('invisible')
  itemHamburguesa[11].classList.toggle('invisible')
  itemHamburguesa[12].classList.toggle('invisible')
  itemHamburguesa[13].classList.toggle('invisible')
  itemHamburguesa[14].classList.toggle('invisible')

})
itemHamburguesa[15].addEventListener('click',(e) => {
  
  itemWithArrow[8].classList.toggle('footer-ms')
  itemWithArrow[9].classList.toggle('footer-ms')


  itemHamburguesa[16].classList.toggle('invisible')
  itemHamburguesa[17].classList.toggle('invisible')
  itemHamburguesa[18].classList.toggle('invisible')

})
itemHamburguesa[19].addEventListener('click',(e) => {

  itemWithArrow[10].classList.toggle('footer-ms')
  itemWithArrow[11].classList.toggle('footer-ms')


  itemHamburguesa[20].classList.toggle('invisible')
  itemHamburguesa[21].classList.toggle('invisible')
  itemHamburguesa[22].classList.toggle('invisible')
  itemHamburguesa[23].classList.toggle('invisible')
  itemHamburguesa[24].classList.toggle('invisible')
  itemHamburguesa[25].classList.toggle('invisible')
  
})

let subitemHamburguesa = document.getElementsByClassName('subitem-hamburguesa')


itemHamburguesa[2].addEventListener('click', () => {

  itemWithArrow[2].classList.toggle('footer-ms')
  itemWithArrow[3].classList.toggle('footer-ms')


  subitemHamburguesa[0].classList.toggle('invisible')
  subitemHamburguesa[1].classList.toggle('invisible')
  subitemHamburguesa[2].classList.toggle('invisible')
  subitemHamburguesa[3].classList.toggle('invisible')
  subitemHamburguesa[4].classList.toggle('invisible')
})
itemHamburguesa[3].addEventListener('click', () => {

  itemWithArrow[4].classList.toggle('footer-ms')
  itemWithArrow[5].classList.toggle('footer-ms')


  subitemHamburguesa[5].classList.toggle('invisible')
  subitemHamburguesa[6].classList.toggle('invisible')
  subitemHamburguesa[7].classList.toggle('invisible')
  subitemHamburguesa[8].classList.toggle('invisible')
})
itemHamburguesa[12].addEventListener('click', () => {

  itemWithArrow[6].classList.toggle('footer-ms')
  itemWithArrow[7].classList.toggle('footer-ms')


  subitemHamburguesa[9].classList.toggle('invisible')
  subitemHamburguesa[10].classList.toggle('invisible')
  subitemHamburguesa[11].classList.toggle('invisible')
})
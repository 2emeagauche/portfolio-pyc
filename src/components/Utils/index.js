export const resetMenuItem=()=>{
  const menuItems = document.querySelectorAll('.menu-item')
  
  menuItems.forEach(element => {
    element.classList.remove('active-menu-item')
  })
}
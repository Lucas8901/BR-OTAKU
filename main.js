const COLOR_BTNS = document.querySelectorAll('.color');
COLOR_BTNS.forEach(color =>{
  color.addEventListener('click', () =>{
    let colorNameClass = color.className;
    if(!color.classList.contains('active-color')){
      let colorName = colorNameClass.slice(colorNameClass.
      indexOf('-') + 1, colorNameClass.length);
      resetActiveBtns();
      color.classList.add('active-color');
      setNewColor(colorName)
    }
  });
});

function resetActiveBtns(){
  COLOR_BTNS.forEach(color =>{
    color.classList.remove('active-color')
  });

};

function setNewColor(color){
  document.querySelector('.banner-right img'). src =`img/tshirt_${color}.png`;
}
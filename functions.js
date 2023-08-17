function keyPlay(event) {
  event.target.style.backgroundColor = 'yellow';
}
//Fonction qui renvoie la couleur de fond des touches à leur valeur par défaut lorsqu'elles sont relâchées avec une chaîne vide
function keyReturn(event) {
  event.target.style.backgroundColor = '';
}

module.exports = { keyPlay, keyReturn };
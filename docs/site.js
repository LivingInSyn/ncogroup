let phrases = [
    "Sophisticated predictive purpose built insights proactively protect against unknown/advanced threats",
    "Machine learning based proactive insight solutions",
    "Real time machine learning thwarts next-gen threats",
    "ML driven react data pipelines"
]

const setText = () => {
    const random = Math.floor(Math.random() * phrases.length);
    document.querySelector("#centered").innerHTML = phrases[random];
}

const hexString = "0123456789abcdef";
const randomColor = () => {
    let hexCode = "#";
    for( i=0; i<6; i++){
        hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
}

const generateGrad = () => {
    let colorOne = randomColor()
    let colorTwo = randomColor()
    let angle = Math.floor(Math.random() * 360)
    return `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo});`
}

function contrastYiq(color) {
  const r = (color >>> 16) & 0xff;
  const g = (color >>> 8) & 0xff;
  const b = color & 0xff;
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;  return yiq >= 128 ? 0x0 : 0xffffff;
};

document.onreadystatechange = function () {
    if (document.readyState === 'interactive') {
      document.body.setAttribute('style', `background: ${generateGrad()}`)
      let box = document.body.querySelector('.wrapper')
      let boxGrad = generateGrad()
      box.setAttribute('style', `background: ${boxGrad}`)
      let txt = box.querySelector('#centered')
      let color = boxGrad.split(',')[2].trim()
      txt.setAttribute('style', `color: ${color}`)
      setText()
    }
  }

phrases = [
    "Sophisticated predictive purpose built insights proactively protect against unknown/advanced threats",
    "Machine learning based proactive insight solutions",
    "Real time machine learning thwarts next-gen threats"
]

function setText(){
    const random = Math.floor(Math.random() * phrases.length);
    document.getElementById("centered").innerHTML = phrases[random];
}

document.onreadystatechange = function () {
    if (document.readyState === 'interactive') {
      setText()
    }
  }

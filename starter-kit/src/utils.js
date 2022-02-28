export function sum(a, b) {
  return a + b;
}

// makes sure we can drag and drop pieces onto placeholders
export function makePlaceholderDropable(pieceDiv, templateArea, timer) {
  pieceDiv.addEventListener("dragover", function(evt) { 
      evt.preventDefault();
      evt.dataTransfer.dropEffect = "move";
  });
  pieceDiv.addEventListener("drop", function(evt) {
      evt.preventDefault();
      if (evt.target.tagName === "DIV") {                      // check if the placeholder is free
        const data = evt.dataTransfer.getData("img");
        evt.target.appendChild(document.getElementById(data));

        let Placeholders = Array.from(templateArea.children);  // check if the player winns
        if (playerWins(Placeholders)) {
          clearInterval(timer);
          window.alert("You win!")
        }
      }
  });
}

// makes the piece dragable
export function makePieceDragable(pieceImg) {
  pieceImg.draggable = true
  pieceImg.addEventListener("dragstart", {
    handleEvent: function (evt) {
      evt.dataTransfer.setData("img", evt.target.id);
      evt.dataTransfer.effectAllowed = "move";
    }
  });
}

// function for shuffling an array
export function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
} 

// checks if all placeholder contains correct piece
function playerWins(placeholders) {
  for(let i = 0; i < placeholders.length; i++) {
    if(placeholders[i].firstChild == null || placeholders[i].attributes.index.value != placeholders[i].firstChild.id) 
      return false
  }
  return true;
}

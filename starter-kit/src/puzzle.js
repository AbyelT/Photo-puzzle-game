
import { shuffle, makePlaceholderDropable } from "./utils"
import Piece from "./piece.js"

// pieces and height configuraiton for each difficulty
const dimensionConfig = {"easy": [4,2], "medium": [5,3], "hard": [6,4]} 
const lengthConfig = {"easy": 140, "medium": 54, "hard": 45}

/**
 * PhotoPuzzleGame represents the photo puzzle game
 */
export class PhotoPuzzleGame {
    constructor(startDiv, templateDiv, width, height, imgsrc) {
        this.startArea = startDiv
        this.templateArea = templateDiv
        this.imgsrc = imgsrc
        this.Width = width
        this.Height = height
        this.diff = "easy"  // default 
        this.pieces = []    // array of pieces
        this.dim = dimensionConfig[this.diff]
        this.piecelength = lengthConfig[this.diff]
    }

    /**
     * Sets the current difficulty
     * @param {String} diff the given difficulty
     */
    setDifficulty(diff) {
        this.diff = diff
    }

    /**
     * Sets up the game
     */
    setup() {
        let nrPieces = this.dim.reduce((x,y) => x*y)
        let rndIdx = shuffle(Array.from(Array(nrPieces).keys()))   // Helps with shuffling the pieces
        for (let i = 0; i < rndIdx.length; i++) {

            // create placeholder in both containers
            let StartPlaceholder = this.createPlaceHolder(rndIdx[i], this.piecelength, this.startArea)         
            this.createPlaceHolder(i, this.piecelength, this.templateArea)                                     

            // cerate img and append it in start
            let piece = new Piece(rndIdx[i], this.piecelength, this)                                          
            this.pieces.push(piece.el)
            StartPlaceholder.appendChild(piece.el)
        }
    }

    /**
     * Creates placeholders in both start and template area
     * @param {*} id a numeric identifier
     * @param {*} length the size length of the placeholder
     * @param {*} appendTo the DOM element to append to
     */
    createPlaceHolder(id, length, puzzleContainer) {
        const placeholderDiv = document.createElement("div");
        placeholderDiv.className = "placeholder"           
        placeholderDiv.setAttribute("index", id) 
        placeholderDiv.style.width = placeholderDiv.style.height =  `${length}px`
        
        makePlaceholderDropable(placeholderDiv)      // makes the placeholder dropable
        puzzleContainer.appendChild(placeholderDiv)  

        return placeholderDiv
    }
}

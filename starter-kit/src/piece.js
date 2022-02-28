import { makePieceDragable } from "./utils"

/**
 * The Piece class represents a single puzzle piece 
 */
 export default class Piece {
    constructor(idx, length, photoPuzzle) {
        this.idx = idx 
        this.length = length
        this.photoPuzzle = photoPuzzle
        this.dim = photoPuzzle.dim // dont know why one
        this.el = this.createPiece()
    }

    /**
     * Creates a puzzle piece represented as an img element
     * @returns 
     */
    createPiece() {
        const img = document.createElement("img");
        img.className = "puzzle-piece"                          
        img.id = this.idx;

        // coordinates for placing pieces in puzzle container
        const left = this.length * (this.idx % 4)               
        const top = this.length * Math.floor((this.idx / 4))

        img.style.backgroundImage = `url(${this.photoPuzzle.imgsrc})`
        img.style.backgroundSize =  `${this.photoPuzzle.Width}px ${this.photoPuzzle.Height}px`
        img.style.width = img.style.height = `100%`
        img.style.backgroundPosition = `-${left}px -${top}px`

        // makes the piece dragable
        makePieceDragable(img)
        return img;
    }
}

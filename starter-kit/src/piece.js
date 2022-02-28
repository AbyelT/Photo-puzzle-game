import { makePieceDragable } from "./utils"

/**
 * The Piece class represents a single puzzle piece.
 * Each piece contains a part of an image, which when
 * combined in correct order forms a full image
 */
 export default class Piece {
    constructor(idx, length, photoPuzzle) {
        this.idx = idx 
        this.length = length
        this.photoPuzzle = photoPuzzle
        this.dim = photoPuzzle.dim
        this.el = this.createPiece()
    }

    /**
     * Creates a puzzle piece represented as an div element
     * @returns {img} the image element
     */
    createPiece() {
        const piece = document.createElement("div");
        piece.className = "puzzle-piece"                          
        piece.id = this.idx;

        // coordinates used for taking a port of the image
        const left = this.length * (this.idx % 4)               
        const top = this.length * Math.floor((this.idx / 4))

        piece.style.backgroundImage = `url(${this.photoPuzzle.imgsrc})`
        piece.style.backgroundSize =  `${this.photoPuzzle.Width}px ${this.photoPuzzle.Height}px`
        piece.style.width = piece.style.height = `100%`
        piece.style.backgroundPosition = `-${left}px -${top}px`               

        makePieceDragable(piece)
        return piece;
    }
}

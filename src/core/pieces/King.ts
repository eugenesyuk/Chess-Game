import { Color, PieceType } from "../Globals";
import { Piece } from "../Piece";
import { Cell } from "../Cell";

export class King extends Piece {
  closePositions: Array<number[]> = [];

  constructor(color: Color, cell: Cell) {
    super(color, cell, PieceType.King);
    this.setClosePositions();
  }


  move(target: Cell): void {
    super.move(target);
    this.setClosePositions();
  }

  setClosePositions() {
    const x = this.cell.x;
    const y = this.cell.y;
    this.closePositions = [
      [y, x - 1],
      [y, x + 1],
      [y - 1, x],
      [y + 1, x],
      [y + 1, x - 1],
      [y + 1, x + 1],
      [y - 1, x - 1],
      [y - 1, x + 1],
    ]
  }

  canMoveTo(target: Cell) {
    return this.isClosePosition(target) && !this.wouldUnderAttackAt(target)
  }

  isClosePosition(target: Cell) {
    return this.closePositions.some(
      (position) => position[0] === target.y && position[1] === target.x
    )
  }
}

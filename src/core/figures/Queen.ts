import { Color, FigureName } from '../Enums';
import { Figure } from '../Figure';
import { Cell } from '../Cell';

export class Queen extends Figure {
  constructor(color: Color, cell: Cell) {
    super(color, cell, FigureName.Queen)
  }
}
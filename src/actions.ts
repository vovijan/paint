import { Point } from "./type";

export const BEGIN_STROKE = "BEGIN_STROKE"
export const UPDATE_STROKE = "UPDATE_STROKE"
export const END_STROKE = "END_STROKE"

export type Action =
  | {
  type: typeof BEGIN_STROKE,
  payload: Point
    }
  | {
  type: typeof UPDATE_STROKE
  payload: Point
    }
  | {
  type: typeof END_STROKE
    }

export const beginStroke = (x: number, y: number) => ({ type: BEGIN_STROKE, payload: { x, y } })
export const updateStroke = (x: number, y: number) => ({ type: UPDATE_STROKE, payload: { x, y } })
export const endStroke = () => ({ type: END_STROKE })
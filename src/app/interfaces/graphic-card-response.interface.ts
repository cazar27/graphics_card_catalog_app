import { GraphicCard } from "../models/graphic-card.model";

export interface GraphicCardsResponse {
  data: GraphicCard []
}

export interface GraphicCardResponse {
  ok: boolean,
  graphic_card?: GraphicCard,
  msg?: string
  count?: number,
}

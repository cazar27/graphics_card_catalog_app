export class GraphicCard {
  public id: number;
  public name: string;
  public manufacturer: string;
  public model: string;
  public price: number;
  public image: string;

  constructor(id: number, name: string, manufacturer: string, model: string, price: number, image: string) {
    this.id = id;
    this.name = name;
    this.manufacturer = manufacturer;
    this.model = model;
    this.price = price;
    this.image = image;
  }
}

export default class Product {
    public id: number;
    public name: string;
    public description: string;
    public photo: string;
    public photo2: string;
    public price: number;
    public hasPromotion: boolean;
    public category: string;
  
    constructor(id: number, name: string, photo: string, photo2: string, price: number, category: string, description : string = '',
     hasPromotion: boolean = false ) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.photo = photo;
      this.photo2 = photo2
      this.price = price;
      this.hasPromotion = hasPromotion;
      this.category = category;
    }
  

  }
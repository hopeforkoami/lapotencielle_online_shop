export default class StoreArticle {
    public product: any;
    public qty: number;
    public contentLine?: number
    constructor(product: any, qty: number, contentLine?: number ) {
      this.product = product;
      this.qty = qty; 
      this.contentLine = contentLine;
    }
  

  }
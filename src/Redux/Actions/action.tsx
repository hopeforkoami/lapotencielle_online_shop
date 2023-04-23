export class Action {
    public  type: string;
    public message: string;
    public payload: string;
  
    constructor(type: string, message: string, payload: string) {
      this.type = type;
      this.message = message;
      this.payload = payload;
    }
  

}
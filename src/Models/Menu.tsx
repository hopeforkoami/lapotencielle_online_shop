export class MenuItem {
    public  id: number;
    public name: string;
    public icon: string;
    public link: string;
    public subMenu: Array<MenuItem>;
  
    constructor(id: number, name: string, icon: string, link: string, subMenu: Array<MenuItem> = []) {
      this.id = id;
      this.name = name;
      this.icon = icon;
      this.link = link;
      this.subMenu = subMenu;
    }
  

}

export class Menu {
    public  menu: Array<MenuItem>;
  
    constructor(menu: Array<MenuItem>) {
      this.menu = menu;
    }
}

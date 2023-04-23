import {
  Menu, MenuItem
} from '../Models/Menu';

const menu: Menu = new Menu([
    // new MenuItem(
    //   1,
    //   "Home",
    //   "",
    //   "home"
    // ),
    new MenuItem(
      2,
      "OUR COLLECTIONS",
      "",
      "shop",
      [
        new MenuItem(
          2,
          "OUR ORANGE AND VANILLA PRODUCTS",
          "",
          ""
        ),
        new MenuItem(
          2,
          "OUR LILY AND LAVENDER PRODUCTS",
          "",
          ""
        ),
        new MenuItem(
          2,
          "OUR AGE GRACEFULLY PRODUCTS",
          "",
          ""
        ),
        new MenuItem(
          2,
          "IN PARIS BODY CRÉME SOUFFLÉ PRODUCTS",
          "",
          ""
        ),
        new MenuItem(
          2,
          "OUR BELLE COMME LE JOUR PRODUCTS",
          "",
          ""
        ),
        new MenuItem(
          2,
          "ACCESSORIES & TOOLS",
          "",
          ""
        )
      ]
    ),
    new MenuItem(
      3,
      "BATH AND BODY",
      "",
      "shop",
      [
        new MenuItem(
          3,
          "OUR DUO COLLECTIONS",
          "",
          ""
        ) 
      ]
    ),
    new MenuItem(
      4,
      "HOME SPA",
      "",
      "shop",
      [
        new MenuItem(
          4,
          "BODY POLISH",
          "",
          ""
        ) 
      ]
    ),
    new MenuItem(
      5,
      "GIFTS & SETS",
      "",
      "shop",
      [
        new MenuItem(
          5,
          "OUR GIFTS & SETS COLLECTION",
          "",
          ""
        ) 
      ]
    ),
    new MenuItem(
      6,
      "BODY CARE",
      "",
      "shop",
      [
        new MenuItem(
          6,
          "BODY LOTION",
          "",
          ""
        ),
        new MenuItem(
          6,
          "BODY CREAM",
          "",
          ""
        ),
        new MenuItem(
          6,
          "BODY CREAM BUTTER",
          "",
          ""
        ),
        new MenuItem(
          6,
          "BODY OIL",
          "",
          ""
        ),
        new MenuItem(
          6,
          "BODY SCRUB",
          "",
          ""
        ),
        new MenuItem(
          6,
          "BODY BALM",
          "",
          ""
        ),
        new MenuItem(
          6,
          "WHIPPED BODY BUTTE",
          "",
          ""
        )
      ]
    ),
    new MenuItem(
      7,
      "FACIAL CARE",
      "",
      "shop",
      [
        new MenuItem(
          7,
          "FACIAL CLEANSER",
          "",
          ""
        ),
        new MenuItem(
          7,
          "FACIAL CREAM",
          "",
          ""
        ),
        new MenuItem(
          7,
          "FACIAL MASK",
          "",
          ""
        ),
        new MenuItem(
          7,
          "FACIAL OIL",
          "",
          ""
        ),
        new MenuItem(
          7,
          "FACIAL TONER",
          "",
          ""
        )
      ]
    ),
    new MenuItem(
      8,
      "HAIR CARE",
      "",
      "shop/HAIR CARE"
    ),
    new MenuItem(
      9,
      "ABOUT US",
      "",
      "#"
    ),
    new MenuItem(
      9,
      "CONTACT",
      "",
      "#"
    ),
  ]);

export default menu
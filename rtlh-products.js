import { IMG } from "./rtlh-assets";

/* =======================================================================
   RTLH PRODUCT CATALOG  —  THE ONLY FILE YOU NEED FOR DAY-TO-DAY EDITS
   =======================================================================

   HOW TO EDIT (no coding needed, just change the text):

   • CHANGE A PRICE ........ edit  startingPrice: 45
   • RENAME A PRODUCT ...... edit  name: "..."
   • HIDE A WHOLE PRODUCT .. set   hidden: true     (show again: hidden: false)
   • HIDE ONE COLOR ........ add   hidden: true     inside that color's line
   • ADD A COLOR ........... 1) add the color name once in COLORS below
                                (only if it isn't there already)
                             2) add the image in rtlh-assets.js
                             3) add a line to the product's colors list:
                                { id: "lavender", image: IMG.MagsafeLavender },
   • TURN OFF ENGRAVING .... set   engraving: false
   • TURN OFF PICTURE ENG. . set   pictureEngraving: false

   RULES:
   • Keep the commas at the end of lines and the quotation marks.
   • A hidden product disappears everywhere (home, shop, product page),
     and the shop's category buttons update automatically.
   • A product with no visible colors is hidden automatically.
   • Prices show on the site as "From AED <startingPrice>".
   ======================================================================= */


/* ---------------------------------------------------------------------- */
/* PICTURE GALLERY LINK                                                     */
/* Paste your online gallery address between the quotes. When a customer    */
/* picks "Picture engraving", a "View all pictures" button opens this link  */
/* in a new tab, and they type the picture's number in the box below it.    */
/* Leave it empty ("") and the button simply doesn't show.                  */
/* To remove picture engraving from a product, set  pictureEngraving: false */
/* ---------------------------------------------------------------------- */

export const PICTURE_GALLERY_URL = "";   // e.g. "https://rtlh.art/gallery"


/* ---------------------------------------------------------------------- */
/* COLORS:  id: ["Name shown on site", "swatch color"]                      */
/* ---------------------------------------------------------------------- */

export const COLORS = {
  black: ["Black", "#1C1A18"],
  blue: ["Blue", "#3C5A73"],
  brown: ["Brown", "#6B4A34"],
  green: ["Green", "#3F5A4C"],
  navy: ["Navy", "#232C3E"],
  pink: ["Pink", "#E3AAB8"],
  red: ["Red", "#8E2F2F"],
  white: ["White", "#EFEAE0"],
  gray: ["Gray", "#8A867E"],
  gold: ["Gold", "#B99456"],
  silver: ["Silver", "#B9BAB6"],
  natural: ["Natural", "#D8CBB4"],
  mint: ["Mint", "#AFC7BC"],
  cream: ["Cream", "#E9DFC9"],
  burgundy: ["Burgundy", "#5E1F2E"],
  teal: ["Teal", "#6E97A0"],
  rose: ["Rose", "#B76E79"],

  lightblue: ["Light Blue", "#A9C6DE"],
  darkblue: ["Dark Blue", "#1F3A5F"],
  maroon: ["Maroon", "#5A1F28"],
  berry: ["Berry", "#8A2E5C"],
  crimson: ["Crimson", "#A3202E"],
  desertgold: ["Desert Gold", "#C8A15E"],
  lavender: ["Lavender", "#B9A7D6"],
  lemon: ["Lemon", "#EAD84A"],
  lightbrown: ["Light Brown", "#A57C5B"],
  lightpink: ["Light Pink", "#F0CFD6"],
  orange: ["Orange", "#D9822B"],
  purple: ["Purple", "#6B4C8A"],
  rosegold: ["Rose Gold", "#C48A86"],
  yellow: ["Yellow", "#E3B93C"],
  beige: ["Beige", "#D9C7A8"],
  cherry: ["Cherry", "#A2152B"],
  gravel: ["Gravel", "#8D8A85"],
  navyblue: ["Navy Blue", "#1F2A44"],
  newblue: ["Blue", "#2F6FB5"],
  titaniumgray: ["Titanium Gray", "#7E8083"],
  wine: ["Wine", "#6B1F2F"],
};

export const COLOR_HEX = Object.fromEntries(Object.entries(COLORS).map(([k, v]) => [k, v[1]]));
export const COLOR_NAMES = Object.fromEntries(Object.entries(COLORS).map(([k, v]) => [k, v[0]]));


/* ---------------------------------------------------------------------- */
/* PRODUCTS                                                                 */
/* ---------------------------------------------------------------------- */

// Customization is engraving only. (Embossing and foiling are switched off
// for every product; the code for them is still there but never shows.)
const ENGRAVE_ONLY = { embossing: false, foiling: false, maxEmbossingChars: 0, maxFoilingChars: 0, foilColors: [] };

export const ALL_PRODUCTS = [
  /* ------------------------------ 1 ---------------------------------- */
  {
    id: "heart-charm", slug: "heart-charm", name: "The Heartpiece",
    hidden: false,
    category: "Charms", collection: "Accessories", startingPrice: 45,
    description: "A heart-shaped bag charm on a long leather strap — engraved to hold a name, a date, or a quiet inside joke.",
    mainImage: IMG.TheHeartpieceMain,
    colors: [
      { id: "black", image: IMG.TheHeartpieceBlack },
      { id: "blue", image: IMG.TheHeartpieceBlue },
      { id: "brown", image: IMG.TheHeartpieceBrown },
      { id: "green", image: IMG.TheHeartpieceGreen },
      { id: "navy", image: IMG.TheHeartpieceNavy },
      { id: "pink", image: IMG.TheHeartpiecePink },
      { id: "red", image: IMG.TheHeartpieceRed },
      { id: "gray", image: IMG.TheHeartpieceGray },
    ],
    customization: { engraving: true, pictureEngraving: true, maxEngravingChars: 24, ...ENGRAVE_ONLY },
  },

  /* ------------------------------ 2 ---------------------------------- */
  {
    id: "foldable-mirror", slug: "foldable-mirror", name: "The Foldable Mirror",
    hidden: false,
    category: "Vanity", collection: "Accessories", startingPrice: 40,
    description: "A stand-up travel mirror in soft leather, engraved on the cover — a small ceremony for an everyday object.",
    mainImage: IMG.FoldableMirrorMain,
    colors: [
      { id: "mint", image: IMG.FoldableMirrorGreen },
      { id: "pink", image: IMG.FoldableMirrorPink },
      { id: "white", image: IMG.FoldableMirrorWhite },
    ],
    customization: { engraving: true, pictureEngraving: true, maxEngravingChars: 20, ...ENGRAVE_ONLY },
  },

  /* ------------------------------ 3 ---------------------------------- */
  {
    id: "heart-mirror", slug: "heart-mirror", name: "The Heart Mirror",
    hidden: false,
    category: "Vanity", collection: "Accessories", startingPrice: 45,
    description: "The heart silhouette, reimagined as a compact mirror. Soft edges, a warm leather base, and room for an engraved line.",
    mainImage: IMG.HeartMirrorMain,
    colors: [
      { id: "mint", image: IMG.HeartMirrorBlue },
      { id: "pink", image: IMG.HeartMirrorPink },
      { id: "red", image: IMG.HeartMirrorRed },
      { id: "cream", image: IMG.HeartMirrorWhite },
    ],
    customization: { engraving: true, pictureEngraving: true, maxEngravingChars: 18, ...ENGRAVE_ONLY },
  },

  /* ------------------------------ 4 ---------------------------------- */
  {
    id: "voyage-tag", slug: "voyage-tag", name: "The Voyage Tag",
    hidden: false,
    category: "Travel", collection: "Travel", startingPrice: 45,
    description: "Full-grain leather, engraved with initials — a quiet marker of where a journey belongs.",
    mainImage: IMG.TheVoyageTagMain,
    colors: [
      { id: "blue", image: IMG.TheVoyageTagBlue },
      { id: "brown", image: IMG.TheVoyageTagBrown },
      { id: "pink", image: IMG.TheVoyageTagPink },
      { id: "red", image: IMG.TheVoyageTagRed },
      { id: "white", image: IMG.TheVoyageTagWhite },
    ],
    customization: { engraving: true, pictureEngraving: true, maxEngravingChars: 22, ...ENGRAVE_ONLY },
  },

  /* ------------------------------ 5 ---------------------------------- */
  {
    id: "magsafe-holder", slug: "magsafe-holder", name: "The Porte",
    hidden: false,
    category: "Tech", collection: "Everyday Carry", startingPrice: 75,
    description: "A leather MagSafe card holder for the essentials — cards, cash, and a name engraved quietly into the back.",
    mainImage: IMG.MagsafeMain,
    colors: [
      { id: "navy", image: IMG.MagsafeNavy },
      { id: "green", image: IMG.MagsafeGreen },
      { id: "pink", image: IMG.MagsafePink },
      { id: "berry", image: IMG.MagsafeBerry },
      { id: "black", image: IMG.MagsafeBlack },
      { id: "crimson", image: IMG.MagsafeCrimson },
      { id: "desertgold", image: IMG.MagsafeDesertGold },
      { id: "gray", image: IMG.MagsafeGray },
      { id: "lavender", image: IMG.MagsafeLavender },
      { id: "lemon", image: IMG.MagsafeLemon },
      { id: "lightblue", image: IMG.MagsafeLightBlue },
      { id: "lightbrown", image: IMG.MagsafeLightBrown },
      { id: "lightpink", image: IMG.MagsafeLightPink },
      { id: "orange", image: IMG.MagsafeOrange },
      { id: "purple", image: IMG.MagsafePurple },
      { id: "red", image: IMG.MagsafeRed },
      { id: "rosegold", image: IMG.MagsafeRoseGold },
      { id: "silver", image: IMG.MagsafeSilver },
      { id: "white", image: IMG.MagsafeWhite },
      { id: "yellow", image: IMG.MagsafeYellow },
    ],
    customization: { engraving: true, pictureEngraving: true, maxEngravingChars: 16, ...ENGRAVE_ONLY },
  },

  /* ------------------------------ 6 (NEW) ----------------------------- */
  {
    id: "magsafe-stand", slug: "magsafe-stand", name: "MagSafe With Stand",
    hidden: false,
    category: "Tech", collection: "Everyday Carry", startingPrice: 95,
    description: "A leather MagSafe card holder with a built-in foldable stand — carry your cards, and prop up your phone wherever you are.",
    mainImage: IMG.MagfoldMain,
    colors: [
      { id: "brown", image: IMG.MagfoldBrown },
      { id: "crimson", image: IMG.MagfoldCrimson },
      { id: "lightpink", image: IMG.MagfoldLightPink },
      { id: "navyblue", image: IMG.MagfoldNavyblue },
      { id: "newblue", image: IMG.MagfoldNewblue },
      { id: "titaniumgray", image: IMG.MagfoldTitaniumgray },
      { id: "white", image: IMG.MagfoldWhite },
      { id: "wine", image: IMG.MagfoldWine },
    ],
    customization: { engraving: true, pictureEngraving: true, maxEngravingChars: 16, ...ENGRAVE_ONLY },
  },

  /* ------------------------------ 7 ---------------------------------- */
  {
    id: "heart-necklace", slug: "heart-necklace", name: "The Heart Necklace",
    hidden: false,
    category: "Jewelry", collection: "Jewelry", startingPrice: 110,
    description: "A delicate gold heart pendant on a fine chain — the smallest gesture, made to be worn every day.",
    mainImage: IMG.NecklaceMain,
    colors: [{ id: "gold", image: IMG.NecklaceMain }],
    gallery: [IMG.Necklace1, IMG.Necklace2],
    customization: { engraving: true, pictureEngraving: true, maxEngravingChars: 1, ...ENGRAVE_ONLY },
  },

  /* ------------------------------ 8 ---------------------------------- */
  {
    id: "card-holder", slug: "card-holder", name: "The Card Holder",
    hidden: false,
    category: "Leather Goods", collection: "Everyday Carry", startingPrice: 180,
    description: "A slim, four-slot card holder in saffiano leather, personalized with initials where the hand naturally rests.",
    mainImage: IMG.RTLHCardHolderMain,
    colors: [
      { id: "black", image: IMG.RTLHCardHolderBlack },
      { id: "burgundy", image: IMG.RTLHCardHolderBurgendy },
      { id: "gray", image: IMG.RTLHCardHolderGray },
      { id: "navy", image: IMG.RTLHCardHolderNavy },
    ],
    gallery: [IMG.RTLHWallet],
    customization: { engraving: true, pictureEngraving: true, maxEngravingChars: 20, ...ENGRAVE_ONLY },
  },

  /* ------------------------------ 9 (HIDDEN, needs details) ----------- */
  // Photos "Cardholder*.png" from your kiosk folder. I wasn't sure if this is
  // a different card holder or extra colors of the one above, so it is hidden.
  // Before showing it: set the real name, price (startingPrice) and description.
  {
    id: "cardholder-2", slug: "cardholder-2", name: "The Cardholder",
    hidden: true,
    category: "Leather Goods", collection: "Everyday Carry", startingPrice: 0,   // <-- SET PRICE
    description: "A leather card holder, personalized with your initials.",       // <-- EDIT
    mainImage: IMG.CardholderMain,
    colors: [
      { id: "beige", image: IMG.CardholderBeige },
      { id: "blue", image: IMG.CardholderBlue },
      { id: "pink", image: IMG.CardholderPink },
    ],
    customization: { engraving: true, pictureEngraving: true, maxEngravingChars: 20, ...ENGRAVE_ONLY },
  },
];

// What the website actually uses: hidden products and hidden colors are removed here.
export const PRODUCTS = ALL_PRODUCTS
  .filter((p) => !p.hidden)
  .map((p) => ({ ...p, colors: p.colors.filter((c) => !c.hidden) }))
  .filter((p) => p.colors.length > 0);

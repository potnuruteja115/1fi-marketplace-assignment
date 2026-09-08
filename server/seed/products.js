const products = [
  // =========================================================
  // IPHONE 15
  // =========================================================
  {
    id: "iphone-15",
    name: "iPhone 15",
    brand: "Apple",

    description:
      "iPhone 15 with a powerful A16 Bionic chip and advanced camera system.",

    colors: ["Black", "Blue", "Pink"],

    storage: ["128GB", "256GB"],

    images: [
      "https://a.storyblok.com/f/113473/1000x1000/4322ee27b7/apple_iphone_15_black.png",
    ],

    basePrice: 69999,

    variants: [
      {
        color: "Black",
        storage: "128GB",
        price: 69999,
        mrp: 79900,
        image:
          "https://a.storyblok.com/f/113473/1000x1000/4322ee27b7/apple_iphone_15_black.png",
      },
      {
        color: "Black",
        storage: "256GB",
        price: 79999,
        mrp: 89900,
        image:
          "https://a.storyblok.com/f/113473/1000x1000/4322ee27b7/apple_iphone_15_black.png",
      },
      {
        color: "Blue",
        storage: "128GB",
        price: 70999,
        mrp: 80900,
        image:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692927227573",
      },
      {
        color: "Blue",
        storage: "256GB",
        price: 80999,
        mrp: 90900,
        image:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692927227573",
      },
      {
        color: "Pink",
        storage: "128GB",
        price: 69999,
        mrp: 79900,
        image:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692927228213",
      },
      {
        color: "Pink",
        storage: "256GB",
        price: 79999,
        mrp: 89900,
        image:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692927228213",
      },
    ],
  },

  // =========================================================
  // SAMSUNG GALAXY S24
  // =========================================================
  {
    id: "galaxy-s24",
    name: "Samsung Galaxy S24",
    brand: "Samsung",

    description:
      "Galaxy S24 with a premium AMOLED display, Galaxy AI and flagship performance.",

    colors: ["Black", "Violet"],

    storage: ["128GB", "256GB"],

    images: [
      "https://i5.walmartimages.ca/asr/1ddd4fc2-08c1-434c-87cf-51b4c5d4917f.b3cc28418833b470a86b2967c78c5a14.jpeg?odnBg=FFFFFF&odnHeight=2000&odnWidth=2000",
    ],

    basePrice: 74999,

    variants: [
      {
        color: "Black",
        storage: "128GB",
        price: 74999,
        mrp: 84999,
        image:
          "https://i5.walmartimages.ca/asr/1ddd4fc2-08c1-434c-87cf-51b4c5d4917f.b3cc28418833b470a86b2967c78c5a14.jpeg?odnBg=FFFFFF&odnHeight=2000&odnWidth=2000",
      },
      {
        color: "Black",
        storage: "256GB",
        price: 84999,
        mrp: 94999,
        image:
          "https://i5.walmartimages.ca/asr/1ddd4fc2-08c1-434c-87cf-51b4c5d4917f.b3cc28418833b470a86b2967c78c5a14.jpeg?odnBg=FFFFFF&odnHeight=2000&odnWidth=2000",
      },
      {
        color: "Violet",
        storage: "128GB",
        price: 74999,
        mrp: 84999,
        image:
          "https://images.samsung.com/is/image/samsung/p6pim/in/sm-s921ezviins/gallery/in-galaxy-s24-561746-561746-sm-s921ezviins-548791105?$1164_776_PNG$",
      },
      {
        color: "Violet",
        storage: "256GB",
        price: 84999,
        mrp: 94999,
        image:
          "https://images.samsung.com/is/image/samsung/p6pim/in/sm-s921ezviins/gallery/in-galaxy-s24-561746-561746-sm-s921ezviins-548791105?$1164_776_PNG$",
      },
    ],
  },

  // =========================================================
  // ONEPLUS 13
  // =========================================================
  {
    id: "oneplus-13",
    name: "OnePlus 13",
    brand: "OnePlus",

    description:
      "OnePlus 13 with flagship performance, a smooth display and advanced cameras.",

    colors: [
      "Black Eclipse",
      "Arctic Dawn",
      "Midnight Ocean",
    ],

    storage: ["128GB", "256GB"],

    images: [
      "https://lcdn.altex.ro/media/catalog/product/s/m/smtonep135be_1_6197ca3a.jpg",
    ],

    basePrice: 64999,

    variants: [
      // -------------------------------------------------------
      // BLACK ECLIPSE
      // -------------------------------------------------------
      {
        color: "Black Eclipse",
        storage: "128GB",
        price: 64999,
        mrp: 74999,
        image:
          "https://lcdn.altex.ro/media/catalog/product/s/m/smtonep135be_1_6197ca3a.jpg",
      },

      {
        color: "Black Eclipse",
        storage: "256GB",
        price: 69999,
        mrp: 79999,
        image:
          "https://lcdn.altex.ro/media/catalog/product/s/m/smtonep135be_1_6197ca3a.jpg",
      },

      // -------------------------------------------------------
      // ARCTIC DAWN
      // -------------------------------------------------------
      {
        color: "Arctic Dawn",
        storage: "128GB",
        price: 65999,
        mrp: 75999,
        image:
          "https://p.turbosquid.com/ts-thumb/1o/a9fRBP/j9/oneplus13arcticdawn/jpg/1735393615/1920x1080/fit_q87/821d5963a3dc8c8afbce56670525de3753ffc585/oneplus13arcticdawn.jpg",
      },

      {
        color: "Arctic Dawn",
        storage: "256GB",
        price: 70999,
        mrp: 80999,
        image:
          "https://p.turbosquid.com/ts-thumb/1o/a9fRBP/j9/oneplus13arcticdawn/jpg/1735393615/1920x1080/fit_q87/821d5963a3dc8c8afbce56670525de3753ffc585/oneplus13arcticdawn.jpg",
      },

      // -------------------------------------------------------
      // MIDNIGHT OCEAN
      // -------------------------------------------------------
      {
        color: "Midnight Ocean",
        storage: "128GB",
        price: 66999,
        mrp: 76999,
        image:
          "https://p.turbosquid.com/ts-thumb/5X/HIkZVh/3T/midnightocean0000/jpg/1735393036/1920x1080/fit_q87/c8e565ba1f96b7f2bec28c3ea8f8e373010a1ece/midnightocean0000.jpg",
      },

      {
        color: "Midnight Ocean",
        storage: "256GB",
        price: 71999,
        mrp: 81999,
        image:
          "https://p.turbosquid.com/ts-thumb/5X/HIkZVh/3T/midnightocean0000/jpg/1735393036/1920x1080/fit_q87/c8e565ba1f96b7f2bec28c3ea8f8e373010a1ece/midnightocean0000.jpg",
      },
    ],
  },
];

module.exports = products;
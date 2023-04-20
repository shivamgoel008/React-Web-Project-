import React from "react";
import ReactDOM from "react-dom/client";

/*
Headers
  - logo
  - NavItems

Body
  - Search
  - Restaunrant Conatiner
    - Restaurant card
      - Image
      - Name of Res, Star Rating, Cuisines, delery tie

Footer
  - Coptright
  - Link 
  - Address
  - Contacts

*/

const resList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "284340",
      name: "Feels Home",
      uuid: "6a99cb54-8c6c-4fc9-a59a-8290b2919113",
      city: "10459",
      area: "Sector 45",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "dhi0paongymuqypnmvdf",
      cuisines: ["Thalis"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 42,
      minDeliveryTime: 42,
      maxDeliveryTime: 42,
      slaString: "42 MINS",
      lastMileTravel: 9.899999618530273,
      slugs: {
        restaurant: "feelz-home-golf-course-golf-course",
        city: "noida-1",
      },
      cityState: "10459",
      address:
        "Khara No 1091 Behind Adarsh bal Vikas Public School Sadarpur, Sector 45  Noida",
      locality: "Golf Course",
      parentId: 314266,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "Flat ₹125 off",
        shortDescriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 10600,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 10600,
        message: "",
        title: "Delivery Charge",
        amount: "10600",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6528112~p=1~eid=00000187-9fed-713d-2e8a-419c00b10125",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "9.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "284340",
        deliveryTime: 42,
        minDeliveryTime: 42,
        maxDeliveryTime: 42,
        lastMileTravel: 9.899999618530273,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.8",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "528839",
      name: "Bowls & Meals Co.",
      uuid: "ab92c6b4-d261-45c3-9a8b-aa690048a9d8",
      city: "10459",
      area: "Sector 72",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "eqfatpiuyzvrl7zgtblo",
      cuisines: [
        "North Indian",
        "Chinese",
        "Biryani",
        "Punjabi",
        "Thalis",
        "Indian",
      ],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 36,
      minDeliveryTime: 36,
      maxDeliveryTime: 36,
      slaString: "36 MINS",
      lastMileTravel: 9.600000381469727,
      slugs: {
        restaurant: "troho---bowls-&-combos-sector-18-sector-18",
        city: "noida-1",
      },
      cityState: "10459",
      address:
        "Plot Number SP-05 Sector-116, Noida, NOIDA CITY ZONE-4, Gautam Buddha Nagar (Uttar Pradesh), - 201306",
      locality: "Sector 116",
      parentId: 377212,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 10600,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 10600,
        message: "",
        title: "Delivery Charge",
        amount: "10600",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "Closes soon",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6465567~p=4~eid=00000187-9fed-713d-2e8a-419d00b10432",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "9.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "528839",
        deliveryTime: 36,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        lastMileTravel: 9.600000381469727,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.9",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "561297",
      name: "Subway",
      uuid: "669df7a9-a27b-4d1c-806c-0d33ae2bf1fe",
      city: "10459",
      area: "Shahdara",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "0bf19a82b109b40c2f5c56d00f071a33",
      cuisines: ["Fast Food", "Snacks", "Beverages"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 16,
      minDeliveryTime: 16,
      maxDeliveryTime: 16,
      slaString: "16 MINS",
      lastMileTravel: 0.8999999761581421,
      slugs: {
        restaurant:
          "subway(a-unit-of-mander-hospitality-private-limite-noida-expressway-noida-expressway",
        city: "noida-1",
      },
      cityState: "10459",
      address:
        "GF SHOP NUM-6,TOWER-C,N OIDA WORLD ONE PLOT NUM-1,SECTOR-90 NOIDA, NOIDA CITY ZONE-5, Gautam Buddha Nagar , Uttar Pradesh-201305",
      locality: "Sector 1",
      parentId: 2,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 4000,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4000,
        message: "",
        title: "Delivery Charge",
        amount: "4000",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "561297",
        deliveryTime: 16,
        minDeliveryTime: 16,
        maxDeliveryTime: 16,
        lastMileTravel: 0.8999999761581421,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "400159",
      name: "Grameen Kulfi",
      uuid: "29aaeccd-a04a-4d41-a714-bba9ba2f109a",
      city: "10459",
      area: "Sector 141",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "zx1gzp8u2pdhqijodosv",
      cuisines: ["Ice Cream", "Desserts"],
      tags: [],
      costForTwo: 12000,
      costForTwoString: "₹120 FOR TWO",
      deliveryTime: 16,
      minDeliveryTime: 16,
      maxDeliveryTime: 16,
      slaString: "16 MINS",
      lastMileTravel: 1.2999999523162842,
      slugs: {
        restaurant: "grameen-kulfi-sector-141-noida-expressway",
        city: "noida-1",
      },
      cityState: "10459",
      address:
        "Shop No-2, Khashra No-254, Ghari Shahdara, Sector 141, Noida-201304",
      locality: "Ghari Shahdara",
      parentId: 12175,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 4000,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4000,
        message: "",
        title: "Delivery Charge",
        amount: "4000",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "400159",
        deliveryTime: 16,
        minDeliveryTime: 16,
        maxDeliveryTime: 16,
        lastMileTravel: 1.2999999523162842,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.6",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "191407",
      name: "La Pino'z Pizza",
      uuid: "cfaafd6a-c3be-4754-8b72-21f6cd4058ef",
      city: "10459",
      area: "Sector 135",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "ftq8nmz1a2bzfzulmkis",
      cuisines: ["Italian", "Pizzas", "Mexican", "Desserts", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 29,
      minDeliveryTime: 29,
      maxDeliveryTime: 29,
      slaString: "29 MINS",
      lastMileTravel: 3.5,
      slugs: {
        restaurant: "la-pino'z-pizza-noida-expressway-noida-expressway",
        city: "noida-1",
      },
      cityState: "10459",
      address: "ABC tower shop no 63 ground floor  sector 135",
      locality: "ABC tower",
      parentId: 4961,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "Flat ₹125 off",
        shortDescriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 4800,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4800,
        message: "",
        title: "Delivery Charge",
        amount: "4800",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6514356~p=25~eid=00000187-9fed-713d-2e8a-41a400b11901",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "191407",
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        lastMileTravel: 3.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.6",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "422439",
      name: "The Dessert Zone",
      uuid: "b5b1abe9-20e7-41a9-b12e-26ac51af50c4",
      city: "10459",
      area: "Shahdara",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "c447c9ce7d0bbe78e46141e866236762",
      cuisines: ["Bakery", "Desserts", "Ice Cream", "Beverages"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 17,
      minDeliveryTime: 17,
      maxDeliveryTime: 17,
      slaString: "17 MINS",
      lastMileTravel: 0.8999999761581421,
      slugs: {
        restaurant: "the-dessert-zone-noida-expressway-noida-expressway",
        city: "noida-1",
      },
      cityState: "10459",
      address:
        "Shop Number SH 002, 2nd Floor, Sec-141, Shahdra, Surajpur, Noida, GautamBudh Nagar Tahsil-I, Gautam Buddha Nagar, Uttar Pradesh, 201305",
      locality: "Shahdra Road",
      parentId: 10414,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "Flat ₹125 off",
        shortDescriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 4000,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4000,
        message: "",
        title: "Delivery Charge",
        amount: "4000",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "422439",
        deliveryTime: 17,
        minDeliveryTime: 17,
        maxDeliveryTime: 17,
        lastMileTravel: 0.8999999761581421,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "421527",
      name: "WarmOven Cake & Desserts",
      uuid: "473b87a7-5aa8-4844-bcd4-347b6b97e392",
      city: "10459",
      area: "Shahdara",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "e938fb5f416cc2c28b4b519cf27b04cc",
      cuisines: ["Bakery", "Desserts", "Ice Cream", "Beverages"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 17,
      minDeliveryTime: 17,
      maxDeliveryTime: 17,
      slaString: "17 MINS",
      lastMileTravel: 0.8999999761581421,
      slugs: {
        restaurant:
          "warmoven-cake-&-desserts-noida-expressway-noida-expressway",
        city: "noida-1",
      },
      cityState: "10459",
      address:
        "Shop Number SH 002, 2nd Floor, Sec-141, Shahdra, Surajpur, Noida, GautamBudh Nagar Tahsil-I, Gautam Buddha Nagar, Uttar Pradesh, 201305",
      locality: "Shahdra Road",
      parentId: 9696,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "Flat ₹125 off",
        shortDescriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 4000,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4000,
        message: "",
        title: "Delivery Charge",
        amount: "4000",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "421527",
        deliveryTime: 17,
        minDeliveryTime: 17,
        maxDeliveryTime: 17,
        lastMileTravel: 0.8999999761581421,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "562781",
      name: "The Burger Club",
      uuid: "b54c250a-a23d-418c-992c-158d92d72e32",
      city: "10459",
      area: "Sector 141",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "h4ppdoav5fdi0gsswpab",
      cuisines: ["American", "Desserts", "Beverages"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 20,
      minDeliveryTime: 20,
      maxDeliveryTime: 20,
      slaString: "20 MINS",
      lastMileTravel: 1.2999999523162842,
      slugs: {
        restaurant: "the-burger-club-noida-expressway-noida-expressway",
        city: "noida-1",
      },
      cityState: "10459",
      address:
        "KPMG, GROUND FLOOR, KHASARA NO 254, Ch Nitin Khari Marg, Sector 141, Noida, Gautam Buddha Nagar, Uttar Pradesh, 201305",
      locality: "Ch Nitin Khari Marg",
      parentId: 2285,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "Flat ₹125 off",
        shortDescriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 4000,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4000,
        message: "",
        title: "Delivery Charge",
        amount: "4000",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6411079~p=10~eid=00000187-9fed-713d-2e8a-419f00b10a27",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "562781",
        deliveryTime: 20,
        minDeliveryTime: 20,
        maxDeliveryTime: 20,
        lastMileTravel: 1.2999999523162842,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.9",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
];

const Header = () => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://img.freepik.com/premium-vector/tray-food-gourmet-address-location-pin-logo-design-app-icon-vector-template-concept-idea_537522-60.jpg?w=2000"
          />
        </div>
        <div className="nav-items-container">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

const RestaurantCard = (props) => {
  return (
    <React.Fragment>
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            props.resData.data.cloudinaryImageId
          }
        />
        <h3>{props.resData.data.name}</h3>
        <h4>popular cuisines {props.resData.data.cuisines[1]}</h4>
        <h4>Avg Rating {props.resData.data.avgRating}</h4>
        <h4>Delivery Time {props.resData.data.sla.deliveryTime}</h4>
      </div>
    </React.Fragment>
  );
};

const Body = () => {

  const steps =[];
  for(let i=0;i<8;i++){
    steps.push(<RestaurantCard resData={resList[i]}/>);
  }
  return (
    <React.Fragment>
      <div className="body">
        <div className="search">
          {/* todo */}
          search
        </div>

        <div className="res-container">
          {steps}
        </div>
      </div>
    </React.Fragment>
  );
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <div className="app">
        <Header />
        <Body />
      </div>
    </React.Fragment>
  );
};

console.log(<Header />);
console.log(<AppLayout />);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

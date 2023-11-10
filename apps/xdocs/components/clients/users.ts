import { CSSProperties } from "react";

export type XStackUser = {
  caption: string;
  image: string;
  infoLink: string;
  pinned?: boolean;
  style?: CSSProperties;
};

export const users: Array<XStackUser> = [
  {
    caption: "Infura",
    image: "/images/logos/infura.svg",
    infoLink: "https://www.infura.io",
    pinned: true,
    style: {
      width: 150,
    },
  },
  {
    caption: "AWS",
    image: "/images/logos/aws.svg",
    infoLink: "https://aws.amazon.com/",
    pinned: true,
    style: {
      width: 75,
    },
  },
  {
    caption: "QuickNode",
    image: "/images/logos/quicknode.svg",
    infoLink: "https://www.quicknode.com/",
    pinned: true,
    style: {
      width: 125,
    },
  },
  {
    caption: "MongoDB",
    image: "/images/logos/mongodb.svg",
    infoLink: "https://mongodb.com/",
    pinned: true,
    style: {
      width: 125,
    },
  },
  {
    caption: "Vercel",
    image: "/images/logos/vercel.svg",
    infoLink: "https://www.vercel.com/",
    pinned: true,
    style: {
      width: 125,
    },
  },
  {
    caption: "Github",
    image: "/images/logos/github.svg",
    infoLink: "https://www.github.com/",
    pinned: true,
    style: {
      width: 110,
    },
  },
  {
    caption: "Alibaba",
    image: "/images/logos/alibaba.svg",
    infoLink: "https://www.alibaba.com/",
    pinned: true,
    style: {
      width: 125,
    },
  },
  {
    caption: "Ant Group",
    image: "/images/logos/ant.svg",
    infoLink: "https://antgroup.com/",
    pinned: true,
    style: {
      width: 125,
    },
  },
  {
    caption: "Adobe",
    image: "/images/logos/adobe.svg",
    infoLink: "https://www.adobe.com/",
    pinned: true,
  },
  {
    caption: "PayPal",
    image: "/images/logos/paypal.svg",
    infoLink: "https://www.paypal.com/",
    pinned: true,
  },

  {
    caption: "Snap",
    image: "/images/logos/snap.svg",
    infoLink: "https://snap.com/",
    pinned: true,
  },
  {
    caption: "SAP",
    image: "/images/logos/sap.svg",
    infoLink: "https://www.sap.com/",
    pinned: true,
    style: {
      width: 75,
    },
  },

  {
    caption: "Shopify",
    image: "/images/logos/shopify.svg",
    infoLink: "https://www.shopify.com/",
    pinned: true,
    style: {
      width: 125,
    },
  },

  {
    caption: "Datadog",
    image: "/images/logos/datadog.svg",
    infoLink: "https://www.datadoghq.com/",
    pinned: true,
    style: {
      width: 125,
    },
  },
  {
    caption: "Twilio",
    image: "/images/logos/twilio.svg",
    infoLink: "https://www.twilio.com/",
    pinned: true,
  },
  {
    caption: "Segment",
    image: "/images/logos/segment.svg",
    infoLink: "https://segment.com/",
    pinned: true,
    style: {
      width: 125,
    },
  },
  {
    caption: "Twitch",
    image: "/images/logos/twitch.svg",
    infoLink: "https://www.twitch.tv/",
    pinned: true,
    style: {
      width: 125,
    },
  },
  {
    caption: "Xiaomi",
    image: "/images/logos/xiaomi.svg",
    infoLink: "https://www.mi.com/",
    pinned: true,
    style: {
      width: 50,
    },
  },
  {
    caption: "Line",
    image: "/images/logos/line.svg",
    infoLink: "https://line.me/",
    pinned: true,
    style: {
      width: 75,
    },
  },
  {
    caption: "ESPN",
    image: "/images/logos/espn.svg",
    infoLink: "https://www.espn.com/",
    pinned: true,
    style: {
      width: 125,
    },
  },
  {
    caption: "Volvo",
    image: "/images/logos/volvo.svg",
    infoLink: "https://www.volvo.com/",
    pinned: true,
    style: {
      width: 60,
    },
  },
  {
    caption: "Hearst",
    image: "/images/logos/hearst.svg",
    infoLink: "https://www.hearst.com/",
    pinned: true,
    style: {
      width: 175,
    },
  },
  {
    caption: "The Washington Post",
    image: "/images/logos/washingtonpost.svg",
    infoLink: "https://www.washingtonpost.com/",
    pinned: true,
    style: {
      width: 175,
    },
  },
  {
    caption: "Wayfair",
    image: "/images/logos/wayfair.svg",
    infoLink: "https://www.wayfair.com/",
    pinned: true,
    style: {
      width: 125,
    },
  },
  {
    caption: "Hulu",
    image: "/images/logos/hulu.svg",
    infoLink: "https://www.hulu.com/",
    pinned: true,
  },
  {
    caption: "CrowdStrike",
    image: "/images/logos/crowdstrike.svg",
    infoLink: "https://www.crowdstrike.com/",
    pinned: true,
    style: {
      width: 150,
      marginTop: 20,
    },
  },
  {
    caption: "Binance",
    image: "/images/logos/binance.svg",
    infoLink: "https://www.binance.com/",
    pinned: true,
    style: {
      width: 150,
    },
  },
];

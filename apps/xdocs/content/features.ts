import type Image from "next/image";
import EcosystemIconDark from "../public/images/docs/shared/feature-icons/ecosystem-dark.svg";
import EcosystemIconLight from "../public/images/docs/shared/feature-icons/ecosystem-light.svg";
import SalesIconDark from "../public/images/docs/shared/feature-icons/sales-dark.svg";
import SalesIconLight from "../public/images/docs/shared/feature-icons/sales-light.svg";
import SupportIconDark from "../public/images/docs/shared/feature-icons/support-dark.svg";
import SupportIconLight from "../public/images/docs/shared/feature-icons/support-light.svg";
import LightningIconDark from "../public/images/docs/shared/feature-icons/lightning-dark.svg";
import LightningIconLight from "../public/images/docs/shared/feature-icons/lightning-light.svg";
import DragIconDark from "../public/images/docs/shared/feature-icons/drag-dark.svg";
import DragIconLight from "../public/images/docs/shared/feature-icons/drag-light.svg";
import BarsIconDark from "../public/images/docs/shared/feature-icons/bars-dark.svg";
import BarsIconLight from "../public/images/docs/shared/feature-icons/bars-light.svg";
import MultiEnvTargetsIconDark from "../public/images/docs/shared/feature-icons/multi-env-targets-dark.svg";
import MultiEnvTargetsIconLight from "../public/images/docs/shared/feature-icons/multi-env-targets-light.svg";
import NextJSIconDark from "../public/images/docs/shared/feature-icons/nextjs-dark.svg";
import NextJSIconLight from "../public/images/docs/shared/feature-icons/nextjs-light.svg";
import ServerComponentsIconDark from "../public/images/docs/shared/feature-icons/server-components-dark.svg";
import ServerComponentsIconLight from "../public/images/docs/shared/feature-icons/server-components-light.svg";
import FingerprintIconDark from "../public/images/docs/shared/feature-icons/fingerprint-dark.svg";
import FingerprintIconLight from "../public/images/docs/shared/feature-icons/fingerprint-light.svg";
import CloudIconDark from "../public/images/docs/shared/feature-icons/cloud-dark.svg";
import CloudIconLight from "../public/images/docs/shared/feature-icons/cloud-light.svg";
import CpuIconDark from "../public/images/docs/shared/feature-icons/cpu-dark.svg";
import CpuIconLight from "../public/images/docs/shared/feature-icons/cpu-light.svg";
import PieconDark from "../public/images/docs/shared/feature-icons/piecon-dark.svg";
import PieconLight from "../public/images/docs/shared/feature-icons/piecon-light.svg";
import RefreshIconDark from "../public/images/docs/shared/feature-icons/refresh-dark.svg";
import RefreshIconLight from "../public/images/docs/shared/feature-icons/refresh-light.svg";
import ArrowsExpandIconDark from "../public/images/docs/shared/feature-icons/arrows-expand-dark.svg";
import ArrowsExpandIconLight from "../public/images/docs/shared/feature-icons/arrows-expand-light.svg";
import BeakerIconDark from "../public/images/docs/shared/feature-icons/beaker-dark.svg";
import BeakerIconLight from "../public/images/docs/shared/feature-icons/beaker-light.svg";

type NextImageSrc = Parameters<typeof Image>[0]["src"];

export type Feature = {
  name: string;
  href?: any;
  title?: string;
  description: string;
  iconDark: NextImageSrc;
  iconLight: NextImageSrc;
  page: "all" | "home" | "docs";
};

export type Features = Array<Feature>;

const XBALLOT_FEATURES: Features = [
  {
    name: "On-Chain Operations",
    description: `All actions within XBallot are performed entirely on-chain, offering unmatched transparency, security, and efficiency for decentralized governance.`,
    iconDark: RefreshIconDark,
    iconLight: RefreshIconLight,
    page: "all",
  },
  {
    name: "Account Registrar",
    description: `Create unique profiles and DAO spaces with the integrated, on-chain Account Registrar, providing an all-encompassing platform for seamless DAO management.`,
    iconDark: FingerprintIconDark,
    iconLight: FingerprintIconLight,
    page: "home",
  },
  {
    name: "Community Forums",
    description: `On-chain Community Forums facilitate dynamic and interactive governance discussions, controlled by token-gated access for refined community management.`,
    iconDark: LightningIconDark,
    iconLight: LightningIconLight,
    page: "all",
  },
  {
    name: "Social Engagement",
    description: `Community forums allow for long-form posts and shorter tweet-style blasts, enabling likeable, shareable, and engaging content, all managed entirely on-chain.`,
    iconDark: CloudIconDark,
    iconLight: CloudIconLight,
    page: "all",
  },
  {
    name: "Strategic Partnerships",
    description: `Collaborations with industry leaders like Infura, QuickNode, SubQuery, MongoDB, and AWS Activate ensure a robust, reliable, and efficient DAO management platform.`,
    iconDark: CpuIconDark,
    iconLight: CpuIconLight,
    page: "all",
  },
  {
    name: "Decentralization Catalyst",
    description: `XBallot is more than a tool—it's a call to action, inspiring the community to shape the decentralized world with comprehensive on-chain solutions.`,
    iconDark: PieconDark,
    iconLight: PieconLight,
    page: "all",
  },
  {
    name: "Integration with Infura",
    description: `Partnership with Infura enhances IPFS integration, providing gateways, APIs, and pinning content to enrich on-chain community forums and profile registrars.`,
    iconDark: ArrowsExpandIconDark,
    iconLight: ArrowsExpandIconLight,
    page: "all",
  },
  {
    name: "Stable Blockchain Connectivity",
    description: `With QuickNode, XBallot maintains consistent and fast connectivity to blockchain networks for efficient DAO management.`,
    iconDark: BeakerIconDark,
    iconLight: BeakerIconLight,
    page: "home",
  },
  {
    name: "Reliable Data Management",
    description: `Through SubQuery, a leading decentralized data provider, XBallot ensures its users have access to reliable and relevant blockchain data.`,
    iconDark: BarsIconDark,
    iconLight: BarsIconLight,
    page: "home",
  },
];

const XSPACE_FEATURES: Features = [
  {
    name: "Drag-and-Drop Interface",
    description: `XSpace reduces friction by pioneering an intuitive no-code interface for app builders.`,
    iconDark: DragIconDark,
    iconLight: DragIconLight,
    page: "all",
  },
  {
    name: "Cross-Chain Compatibility",
    description: `With out-of-the-box support for blockchain L1s, L2s, and more, your web3 site is ready for the multi-chain future.`,
    iconDark: EcosystemIconDark,
    iconLight: EcosystemIconLight,
    page: "home",
  },
  {
    name: "Lightning-Fast Rendering",
    description: `With native hot-reload features, XSpace brings a new visual element to Web3 development.`,
    iconDark: LightningIconDark,
    iconLight: LightningIconLight,
    page: "all",
  },
  {
    name: "P2P Data Storage",
    description: `XSpace leverages enterprise-grade P2P storage solutions for the integrated CMS, making content retrieval seamless.`,
    iconDark: ServerComponentsIconDark,
    iconLight: ServerComponentsIconLight,
    page: "all",
  },
  {
    name: "Multi-Environment Optimization",
    description: `Build multi-tier decentralization concurrency directly into your website and application.`,
    iconDark: MultiEnvTargetsIconDark,
    iconLight: MultiEnvTargetsIconLight,
    page: "all",
  },
  {
    name: "Complete Interoperability",
    description: `With XSpace, build websites and Dapps that work seamlessly across legacy L1s and the latest chains to launch on Mainnet.`,
    iconDark: NextJSIconDark,
    iconLight: NextJSIconLight,
    page: "all",
  },
];

const CONTACT_FEATURES: Features = [
  {
    name: "Support",
    href: "/contact/support",
    title: `Get product support`,
    description: `Once XSpace builds a part of your website, it will be stored for future use, ensuring design consistency and reduced redundancy.`,
    iconDark: SupportIconDark,
    iconLight: SupportIconLight,
    page: "all",
  },
  {
    name: "Sales",
    href: "/contact/sales",
    title: `Contact our sales team`,
    description: `With out-of-the-box support for Algorand, your web3 site is ready for the multi-chain future.`,
    iconDark: SalesIconDark,
    iconLight: SalesIconLight,
    page: "home",
  },
];

export const REPO_DOCS_FEATURES = XBALLOT_FEATURES.filter(
  (f) => f.page === "docs" || f.page === "all"
);

export const REPO_HOME_FEATURES = XBALLOT_FEATURES.filter(
  (f) => f.page === "home" || f.page === "all"
);

export const PACK_HOME_FEATURES = XSPACE_FEATURES.filter(
  (f) => f.page === "home" || f.page === "all"
);

export const CONTACT_LANDING_FEATURES = CONTACT_FEATURES.filter(
  (f) => f.page === "home" || f.page === "all"
);

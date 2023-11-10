import {
  KeyIcon,
  ShieldCheckIcon,
  CodeIcon,
  QuestionMarkCircleIcon,
  ServerIcon,
  RefreshIcon,
  SupportIcon,
} from "@heroicons/react/outline";
import { DetailedFeatureLink } from "./Feature";

export const QuickStartArea = () => {
  return (
    <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: ServerIcon,
          description: `Learn how to make your first API calls using XBallot API.`,
          name: "Make your first API call",
        }}
        href="/xballot/docs/reference/configuration"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: KeyIcon,
          description: `Understand how to learn about your API keys.`,
          name: "Learn about API keys",
        }}
        href="/xballot/docs/reference/configuration#parameters-1"
      ></DetailedFeatureLink>
    </div>
  );
};

export const DAOsArea = () => {
  return (
    <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: QuestionMarkCircleIcon,
          description: `Get help with common issues and how to resolve them.`,
          name: "Common API issues",
        }}
        href="/xballot/docs/troubleshooting"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: RefreshIcon,
          description: `Learn how to effectively retry failed API requests.`,
          name: "Retrying failed requests",
        }}
        href="/xballot/docs/troubleshooting"
      ></DetailedFeatureLink>
    </div>
  );
};

export const LearnMoreArea = () => {
  return (
    <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: CodeIcon,
          description: `Navigate the XBallot Indexer API.`,
          name: "API Overview",
        }}
        href="https://indexer.mainnet.xballotapi.com/api-dev/v1"
      />
      <DetailedFeatureLink
        feature={{
          Icon: SupportIcon,
          description: `Get support and engage with the XBallot team.`,
          name: "Support and community",
        }}
        href="/contact"
      ></DetailedFeatureLink>
    </div>
  );
};

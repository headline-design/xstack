import {
    LightBulbIcon,
    QuestionMarkCircleIcon,
  } from "@heroicons/react/outline";
  import { DetailedFeatureLink } from "./Feature";

  export const XSpaceQuickstartArea = () => {
    return (
      <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:gap-x-8 lg:gap-y-12">
        <DetailedFeatureLink
          feature={{
            Icon: QuestionMarkCircleIcon,
            description: `Learn why we created XSpace, and why we think it’s the future of website building for the Web3 ecosystem.`,
            name: "Why XSpace?",
          }}
          href="/xspace/docs/why-xspace"
        ></DetailedFeatureLink>
        <DetailedFeatureLink
          feature={{
            Icon: LightBulbIcon,
            description: `Learn about the innovative architecture that powers XSpace’s adaptability and speed improvements.`,
            name: "Core Concepts",
          }}
          href="/xspace/docs/core-concepts"
        ></DetailedFeatureLink>
      </div>
    );
  };

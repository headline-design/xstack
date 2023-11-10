import { useState } from "react";
import { FadeIn } from "../home-shared/FadeIn";
import { SectionHeader, SectionSubtext } from "../home-shared/Headings";
import { BenchmarksGraph } from "./PackBenchmarksGraph";
import { PackBenchmarksPicker } from "./PackBenchmarksPicker";
import { PackBenchmarkTabs, ToolTip } from "./PackBenchmarkTabs";
import Link from "next/link";

export type BenchmarkNumberOfModules = "1000" | "5000" | "10000" | "30000";

export type BenchmarkCategory =
  | "speed"
  | "size"
  | "code_build"
  | "build_from_cache";
export interface BenchmarkData {
  xspace: number;
  squarespace: number;
  webflow: number;
  wordpress: number;
}

export interface BenchmarkBar {
  label: string;
  version: string;
  key: keyof BenchmarkData;
  turbo?: true;
  swc?: true;
}

export const DEFAULT_BARS: BenchmarkBar[] = [
  {
    key: "xspace",
    label: "XSpace",
    version: "13.4",
    turbo: true,
  },
  {
    key: "webflow",
    label: "WebFlow",
    version: "4.3.1",
    swc: true,
  },
  {
    key: "squarespace",
    label: "Squarespace",
    version: "12.3.4",
  },
  {
    key: "wordpress",
    label: "Wordpress",
    version: "11.1.4",
  },
];
export const HMR_BARS: BenchmarkBar[] = [
  {
    key: "xspace",
    label: "Next.js 13",
    version: "13.4",
    turbo: true,
  },
  {
    key: "webflow",
    label: "webflow",
    version: "4.3.1",
    swc: true,
  },
  {
    key: "squarespace",
    label: "Next.js 12",
    version: "12.3.4",
  },
  {
    key: "wordpress",
    label: "Next.js 11",
    version: "11.1.4",
  },
];

export function PackBenchmarks() {
  const [numberOfModules, setNumberOfModules] =
    useState<BenchmarkNumberOfModules>("1000");

  const [category, setCategory] = useState<BenchmarkCategory>("speed");

  const speedUrl = "/xspace/docs/benchmarks";
  const speedTitle = "First Contentful Paint";
  const sizeUrl = "/xspace/docs/benchmarks#metrics";
  const sizeTitle = "Largest Contentful Paint";

  return (
    <FadeIn className="relative flex flex-col items-center justify-center w-full gap-10 py-16 font-sans md:py-24 lg:py-32">
      <div className="flex flex-col items-center gap-5 md:gap-6">
        <SectionHeader>Lighter than light</SectionHeader>
        <SectionSubtext>
          Crafted by the creators of Pipeline-UI, XSpace delivers decentralized
          apps at scale.
        </SectionSubtext>
      </div>
      <div className="flex flex-col items-center w-full">
        <PackBenchmarkTabs onTabChange={setCategory} />
        <BenchmarksGraph
          category={category}
          numberOfModules={numberOfModules}
          bars={DEFAULT_BARS}
        />
      </div>

      <PackBenchmarksPicker
        setNumberOfModules={setNumberOfModules}
        href={category === "speed" ? speedUrl : sizeUrl}
        title={category === "speed" ? speedTitle : sizeTitle}
      />
    </FadeIn>
  );
}

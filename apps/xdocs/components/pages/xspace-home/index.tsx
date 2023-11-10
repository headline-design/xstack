import { PackBenchmarks } from "./PackBenchmarks";
import { XSpaceHero } from "./XSpaceHero";
import { PackLetter } from "./PackLetter";
import { PackFeatures } from "./PackFeatures";
import { GradientSectionBorder } from "../home-shared/GradientSectionBorder";
import { LandingPageGlobalStyles } from "../home-shared/GlobalStyles";

export default function XSpaceHome() {
  return (
    <>

      <LandingPageGlobalStyles />
      <main className="relative overflow-hidden">
        <XSpaceHero />
        <GradientSectionBorder>
          <PackBenchmarks />
          <PackFeatures />
        </GradientSectionBorder>
        <GradientSectionBorder>
          <PackLetter />
        </GradientSectionBorder>
      </main>
    </>
  );
}

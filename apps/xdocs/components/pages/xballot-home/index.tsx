import { XBallotHero } from "./XBallotHero";
import { RepoFeatures } from "./RepoFeatures";
import { RepoLetter } from "./RepoLetter";
import { GradientSectionBorder } from "../home-shared/GradientSectionBorder";
import { LandingPageGlobalStyles } from "../home-shared/GlobalStyles";

export default function XBallotHome() {
  return (
    <>

      <LandingPageGlobalStyles />
      <main className="relative overflow-hidden">
        <XBallotHero />
        <GradientSectionBorder>
          <RepoFeatures />
        </GradientSectionBorder>
        <GradientSectionBorder>
          <RepoLetter />
        </GradientSectionBorder>
      </main>
    </>
  );
}

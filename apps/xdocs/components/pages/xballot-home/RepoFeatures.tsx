import { REPO_HOME_FEATURES } from "../../../content/features";
import { FadeIn } from "../home-shared/FadeIn";
import { FeaturesBento } from "../home-shared/FeaturesBento";

export function RepoFeatures() {
  return (
    <FadeIn className="py-16 md:py-24 lg:py-32">
      <FeaturesBento
        header="Why XBallot?"
        body="Drawing from decentralized systems used by industry titans, XBallot integrates social feeds, governance, and domain registration into a unified DAO management solution, drastically reducing maintenance overhead."
        features={REPO_HOME_FEATURES}
      />
    </FadeIn>
  );
}

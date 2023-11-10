import { PACK_HOME_FEATURES } from "../../../content/features";
import { FeaturesBento } from "../home-shared/FeaturesBento";

export function PackFeatures() {
  return (
    <FeaturesBento
      header="Why XSpace?"
      body="XSpace reduces friction in app development, enabling swift, cross-chain compatible, and flexible solutions in the web3 ecosystem."
      features={PACK_HOME_FEATURES}
    />
  );
}

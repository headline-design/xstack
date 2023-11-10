import { FadeIn } from "../home-shared/FadeIn";
import { Container } from "../../Container";
import React from "react";
import { LandingPageGlobalStyles } from "../home-shared/GlobalStyles";
import cn from "classnames";
import { GradientSectionBorder } from "../home-shared/GradientSectionBorder";
import styles from "../landing/index.module.css";
import { CONTACT_LANDING_FEATURES } from "../../../content/features";
import { FeaturesLanding } from "../../LandingFeatures";


function ContactLanding() {
  return (
    <>
      <LandingPageGlobalStyles />
      <div >

        <FadeIn className="z-10 flex flex-col items-center justify-center w-full h-full">
          <GradientSectionBorder>
            <FadeIn>
              <div className="z-50 flex flex-col items-center justify-center ">
                <h1 className="mt-12 w-full h1-custom lg:!mt-12 md:!w-full font-bold text-5xl lg:text-6xl leading-tight xl:leading-snug text-center  bg-clip-text text-transparent bg-gradient-to-b from-black/80 to-black dark:from-white dark:to-[#AAAAAA]">
                  Contact Us
                </h1>
              </div>
            </FadeIn>
            <div className="flex w-full container items-center justify-center gap-6 sm:mx-0 md:mb-0 flex-col mlg:!flex-row z-10 lg:!translate-y-0">
              <FadeIn className="py-16 lg:py-18">
                <FeaturesLanding features={CONTACT_LANDING_FEATURES} />
              </FadeIn>
            </div>
          </GradientSectionBorder>
        </FadeIn>
      </div>
    </>
  );
}

export default ContactLanding;

import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import gradients from "../home-shared/gradients.module.css";
import { HeroText, SectionSubtext } from "../home-shared/Headings";
import { Gradient } from "../home-shared/Gradient";
import { FadeIn } from "../home-shared/FadeIn";
import { CTAButton } from "../home-shared/CTAButton";
import XBallotLogo from "../../logos/XBallotLogo";

export function XBallotHero() {
  return (
    <>
      <FadeIn
        noVertical
        className="font-sans w-auto pb-16 pt-[48px] md:pb-24 lg:pb-32 md:pt-16 lg:pt-20 flex justify-between gap-8 items-center flex-col relative z-0"
      >
        <FadeIn className="z-50 flex items-center justify-center w-full ">
          <div className="absolute min-w-[614px] min-h-[614px]">
            {/* TODO: On dark mode, there should be a "breathing" gradient inside the inner circle */}
            <Image
              alt="XBallot"
              src="/images/docs/xballot/xballot-hero-circles-dark.svg"
              width={614}
              height={614}
              className="hidden dark:block"
            />
            <Image
              alt="XBallot"
              src="/images/docs/xballot/xballot-hero-circles-light.svg"
              width={614}
              height={614}
              className="block dark:hidden"
            />
          </div>
          <div className="absolute z-50 flex items-center justify-center w-64 h-64">
            <Gradient
              small
              width={120}
              height={120}
              conic
              className="dark:opacity-100 opacity-40"
            />
          </div>

          <div className="w-[120px] h-[120px] z-50">
            <Image
              alt=""
              src={`/images/docs/xballot/xballot-hero-logo-dark.svg`}
              width={120}
              height={120}
              className="hidden dark:block"
            />
            <Image
              alt=""
              src={`/images/docs/xballot/xballot-hero-logo-light.svg`}
              width={120}
              height={120}
              className="block dark:hidden"
            />
          </div>
        </FadeIn>
        <Gradient
          width={1000}
          height={1000}
          className="top-[-500px] dark:opacity-20 opacity-[0.15]"
          conic
        />
        <div className="absolute top-0 z-10 w-full h-48 dark:from-black from-white to-transparent bg-gradient-to-b" />
        <FadeIn
          delay={0.15}
          className="z-50 flex flex-col items-center justify-center gap-5 px-6 text-center lg:gap-6"
        >
          <XBallotLogo
            alt="XBallot"
            width="200"
            className="w-[160px] md:w-[200px] fill-black dark:fill-white"
          />
          <HeroText h1>The governance solution that scales</HeroText>
          <SectionSubtext hero>
          XBallot is a chain-agnostic DAO-management platform, social feeds, and domain registrar for Web3 communities.
          </SectionSubtext>
        </FadeIn>
        <FadeIn
          delay={0.3}
          className="z-50 flex flex-col items-center w-full max-w-md gap-5 px-6"
        >
          <div className="flex flex-col w-full gap-3 md:!flex-row">
            <CTAButton>
              <Link href="/xballot/docs" className="block py-3">
                Get Started
              </Link>
            </CTAButton>
            <CTAButton outline>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://xballot.net"
                className="block py-3"
              >
                Go live
              </a>
            </CTAButton>
          </div>
          <p className="text-sm text-[#666666]">Deployed on mainnet</p>
        </FadeIn>
        <FadeIn delay={0.5} className="relative w-full">
          <div className="absolute bottom-0 w-full dark:from-black from-white to-transparent h-72 bg-gradient-to-t" />
        </FadeIn>
      </FadeIn>
    </>
  );
}

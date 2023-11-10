import { HeroText } from "../home-shared/Headings";
import Image from "next/image";
import cn from "classnames";
import gradients from "../home-shared/gradients.module.css";
import { FadeIn } from "../home-shared/FadeIn";
import { CTAButton } from "../home-shared/CTAButton";
import Link from "next/link";
import { Gradient } from "../home-shared/Gradient";

export function RepoLetter() {
  return (
    <section className="relative flex flex-col items-center px-6 py-16 font-sans md:py-24 lg:py-32 gap-14">
      <FadeIn>
        <HeroText className="lg:text-[65px]">
          Launching a DAO
          <br />
          shouldn&apos;t be this hard
        </HeroText>
      </FadeIn>
      <div className="flex flex-col max-w-xl leading-6 md:text-lg lg:text-lg">
        <FadeIn className="opacity-70">
          <p>
            "Decentralized communities are scaling across the globe. But with
            growth comes complexity. Governance voting, social feed management,
            domain registration - tasks once manageable, now escalating into
            significant challenges. Multiple platforms, confusion,
            inefficiencies, and costly mistakes - it's a narrative we're all too
            familiar with.
          </p>

          <br />
          <p>It's time for change.</p>
          <br />
          <p>
            The future calls for a unified, intuitive, and customizable system -
            an all-in-one platform that's primed to scale with your DAO. Picture
            a landscape with speedier on-chain governance, streamlined
            operations, and simplified domain registration, all minus the usual
            tech wizardry or an army of maintenance teams.{" "}
          </p>
          <br></br>
          <p>Enter XBallot.</p>
          <br />
          <p>
            XBallot is built to scale with your DAO and powered by innovative
            blockchain tech. XBallot packs a punch with on-chain operations,
            integrated account registrar, dynamic community forums, and social
            engagement tools. Through strategic partnerships with Infura,
            QuickNode, SubQuery, MongoDB, and AWS Activate, XBallot guarantees
            robust, reliable, and efficient operations. It's not just a
            platform; it's a catalyst for a decentralized revolution. Step into
            the future of DAO management with XBallot - it's comprehensive
            on-chain solutions without the headache.
          </p>
          <br />
          <p>
            Join us on this journey. Let's redefine the future of DAO management
            with XBallot."
          </p>
        </FadeIn>
        <FadeIn noVertical viewTriggerOffset className="relative h-2 md:h-12">
          <span
            className={cn(
              "w-full h-[1px] -bottom-8 md:-bottom-4 lg:-bottom-4 absolute",
              gradients.letterLine
            )}
          />
        </FadeIn>
        <FadeIn
          viewTriggerOffset
          noVertical
          className="flex items-end justify-center gap-3  md:self-start md:-ml-4 lg:self-start lg:-ml-4 min-w-[300px]"
        >
          <div className="w-24 h-24 min-w-[96px] min-h-[96px] rounded-full border dark:border-white/10 border-black/10 flex items-center justify-center ">
            <Image
              alt="Image of Aaron Martinez"
              src="/images/people/aaronmartinez.png"
              width={64}
              height={64}
              className="rounded-full grayscale"
            />
          </div>
          <div className="flex flex-col">
            <Image
              alt="Aaron Martinez's hand written signature"
              src="/images/docs/xballot/aaron-signature-light.svg"
              width={209}
              height={116}
              className="block -mt-2 mb-2 ml-3 dark:hidden"
            />
            <Image
              alt="Aaron Martinez's hand written signature"
              src="/images/docs/xballot/aaron-signature-dark.svg"
              width={209}
              height={116}
              className="hidden -mt-2 mb-2 ml-3 dark:block"
            />
            <div className="flex gap-2 flex-wrap text-sm leading-none text-[#888888] max-w-[156px] md:max-w-xl lg:max-w-xl">
              <p className="font-bold">Aaron Martinez</p>
              <p>Founder of XStack</p>
            </div>
          </div>
        </FadeIn>
      </div>
      <FadeIn noVertical className="relative flex justify-center w-full mt-16">
        <div className="max-w-[180px] w-full">
          <CTAButton>
            <Link href="/xballot/docs" className="block py-3 font-sans">
              Start Building
            </Link>
          </CTAButton>
        </div>
        <Gradient
          width={1200}
          height={300}
          className="bottom-[-200px] -z-10 opacity-20"
          conic
        />
      </FadeIn>
    </section>
  );
}

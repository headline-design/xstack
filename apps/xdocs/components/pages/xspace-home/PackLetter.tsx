import { HeroText } from "../home-shared/Headings";
import Image from "next/image";
import cn from "classnames";
import gradients from "../home-shared/gradients.module.css";
import { FadeIn } from "../home-shared/FadeIn";
import { CTAButton } from "../home-shared/CTAButton";
import Link from "next/link";
import { Gradient } from "../home-shared/Gradient";

export function PackLetter() {
  return (
    <section className="relative flex flex-col items-center px-6 py-16 font-sans md:py-24 lg:py-32 gap-14">
      <FadeIn>
        <HeroText>
          Lets rebuild
          <br />
          Web3 UX
        </HeroText>
      </FadeIn>
      <div className="flex flex-col max-w-xl leading-6 md:text-lg lg:text-lg">
        <FadeIn className="opacity-70">
          <p>
            It's time for a fresh chapter in the Web3 ecosystem. We've assembled
            a top-tier team at XSpace to reshape the Web3 website building
            landscape, with a focus on modern micro-services architecture and a
            departure from traditional monolithic CMS solutions.
          </p>
          <br />
          <p>
            Leveraging years of expertise and advanced computation
            breakthroughs, we've created a resilient architecture ready to lead
            the next decade.
          </p>
          <br />
          <p>
            We're thrilled to unveil XSpace: our chain-agnostic, open-source
            website builder crafted for the Web3 community. XSpace stands as the
            first CMS that combines a no-code environment with a drag-and-drop
            app builder, delivering a high-performance, decentralized tooling
            solution. This innovation shifts the paradigm of website building,
            making it more resilient and adaptable to the evolving digital
            space.
          </p>
          <br />
          <p>
            Step into this transformative Web3 era with us. Harness the power of
            efficient, seamless, and accessible web development, and let's
            reshape the future together.
          </p>
        </FadeIn>
        <FadeIn
          noVertical
          viewTriggerOffset
          className="relative h-2 md:h-12 lg:h-12"
        >
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
          className="flex items-end justify-center gap-3 md:self-start md:-ml-4 lg:self-start lg:-ml-4 min-w-[300px]"
        >
          <div className="w-24 h-24 min-w-[96px] min-h-[96px] rounded-full border dark:border-white/10 border-black/10 flex items-center justify-center ">
            <Image
              alt="Image of Aaron Martinez"
              src="/images/people/aaronmartinez.png"
              width={64}
              height={64}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col gap-3 pb-2">
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
              <p>Creator of XSpace</p>
            </div>
          </div>
        </FadeIn>
      </div>
      <FadeIn noVertical className="relative flex justify-center w-full mt-16">
        <div className="max-w-[180px] w-full">
          <CTAButton>
            <Link href="/xspace/docs" className="block py-3 font-sans">
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

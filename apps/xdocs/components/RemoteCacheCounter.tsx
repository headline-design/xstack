import cn from "classnames";
import { useState, useEffect } from "react";
import { animated, useSpring, config } from "@react-spring/web";
import Link from "next/link";

const counterFormatter = Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 7,
  maximumFractionDigits: 0,
});

export default function RemoteCacheCounter() {
  const [targetMinutes, setTargetMinutes] = useState(23);
  const timeSaved = 0;

  const spring = useSpring({
    from: { minutesSaved: 0 },
    minutesSaved: targetMinutes,
    config: config.molasses,
  });

  return (
    <Link
      href="https://xballot.net"
      className="group mt-4 rounded-lg border border-transparent overflow-hidden bg-origin-border bg-gradient-to-r from-gray-500 to-gray-500 dark:text-[#9ca3af] text-[#6b7280]"
    >
      <div className="p-4 dark:bg-[#111111] bg-white">
        <animated.p className="inline-block text-xl bg-gradient-to-r from-gray-500 to-gray-500 bg-clip-text text-transparent tabular-nums primary-text">
          {spring.minutesSaved.to((t) => counterFormatter.format(t))}
        </animated.p>
        <div className="text-xs">Total XBD domains on mainnet</div>

        <div className="text-xs mt-4 group-hover:underline">
          Get Started With XBallot Governance →
        </div>
      </div>
    </Link>
  );
}

import { BenchmarkNumberOfModules } from "./PackBenchmarks";
import Link from "next/link";

export function PackBenchmarksPicker(props: {
  setNumberOfModules: (num: BenchmarkNumberOfModules) => void;
  href: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <Link
        className="dark:text-[#888888]  hover:underline underline-offset-4 text-[#666666] text-sm"
        href={props.href}
      >
        {props.title}
      </Link>
    </div>
  );
}

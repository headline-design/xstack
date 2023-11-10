import benchmarkData from "./benchmark-data/data.json";

type StatFunc = (data: typeof benchmarkData) => string;

/**
 * Replace with satisfies keyword when TS 4.9 drops
 */
const satisfies =
  <T,>() =>
  <U extends T>(t: U) =>
    t;

const formatToSeconds = (seconds: number) => `${seconds.toFixed(1)}s`;
const formatPercentage = (percentage: number) => `${percentage.toFixed(1)}x`;

const stats = satisfies<Record<string, StatFunc>>()({
  "squarespace-speed-1000": (data) => formatToSeconds(data.speed[1000].squarespace),
  "xspace-speed-1000": (data) => formatToSeconds(data.speed[1000].xspace),
  "xspace-speed-vs-squarespace": (data) =>
    formatPercentage(data.speed[1000].squarespace / data.speed[1000].xspace),
  "xspace-speed-vs-squarespace-30000": (data) =>
    formatPercentage(data.speed[30000].squarespace / data.speed[30000].xspace),
  "xspace-update-vs-squarespace": (data) =>
    formatPercentage(
      data.size[1000].squarespace / data.size[1000].xspace
    ),
  "xspace-update-vs-squarespace-30000": (data) =>
    formatPercentage(
      data.size[30000].squarespace / data.size[30000].xspace
    ),
  "webflow-speed-1000": (data) => formatToSeconds(data.speed[1000].webflow),
  "xspace-speed-vs-webflow": (data) =>
    formatPercentage(data.speed[1000].webflow / data.speed[1000].xspace),
  "xspace-speed-vs-webflow-30000": (data) =>
    formatPercentage(data.speed[30000].webflow / data.speed[30000].xspace),
  "xspace-update-vs-webflow": (data) =>
    formatPercentage(
      data.size[1000].webflow / data.size[1000].xspace
    ),
  "xspace-update-vs-webflow-30000": (data) =>
    formatPercentage(
      data.size[30000].webflow / data.size[30000].xspace
    ),
});

type Stat = keyof typeof stats;

export function DocsBenchmarkStat(props: { stat: Stat }) {
  if (!stats[props.stat]) {
    throw new Error(`Invalid stat: ${props.stat}`);
  }
  return stats[props.stat](benchmarkData);
}

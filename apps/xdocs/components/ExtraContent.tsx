import RemoteCacheCounter from "./RemoteCacheCounter";
import { useXStack } from "./SiteSwitcher";

export default function ExtraContent() {
  const site = useXStack();

  if (site === "xballot") {
    return <RemoteCacheCounter />;
  }
}

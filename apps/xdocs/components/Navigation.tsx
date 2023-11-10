import { Navbar } from "nextra-theme-docs";
import { useXStack } from "./SiteSwitcher";

function Navigation(props) {
  const site = useXStack();

  /*
    Inject a dynamic docs link when NOT on root
    1. Points to /repo/docs when on /repo
    2. Points to /pack/docs when on /pack
  */
  const leadingItem = props.items[0];
  if (leadingItem?.id !== "contextual-docs" && site) {
    props.items.unshift({
      title: "Docs",
      type: "page",
      route: `/${site}/docs`,
      id: "contextual-docs",
      key: "contextual-docs",
    });
  }

  const lastItem = props.items[props.items.length - 1];
  if (lastItem?.id !== "contextual-enterprise") {
    props.items.push({
      title: "Enterprise",
      newWindow: true,
      // https://github.com/shuding/nextra/issues/1028
      route: "enterprise",
      href: `/${
        site === "xballot" ? "contact/sales" : "contact/sales"
      }`,
      id: "contextual-enterprise",
      key: "contextual-enterprise",
    });
  }

  // remove the top level repo and pack links
  const headerItems = props.items.filter((item) => {
    return item.name !== "xballot" && item.name !== "xspace";
  });

  // items last to override the default
  return <Navbar {...props} items={headerItems} />;
}

export default Navigation;

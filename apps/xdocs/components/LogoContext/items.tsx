import React from "react";
import {
  XBallotLogo,
  XSpaceLogo,
  IconType,
  XStackLogo,
} from "./icons";
import type { ContextItem, ContextList } from "./types";
import copy from "copy-to-clipboard";

export const PLATFORM_MENU_ITEMS = ({
  theme,
}: ContextList): Array<ContextItem> => [
  {
    name: "copy-logo",
    "aria-label": "Copy Logo as SVG to Clipboard",
    children: "Copy Logo as SVG",
    prefix: <XStackLogo className="mr-3 h-4 w-4" />,
    type: "copy",
    onClick: () => {
      copy(
        `<svg width="22" height="22" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234.92578 237.97844" fill="${
          theme === "dark" ? "#ffffff" : "#000000"
        }"><path d="m56.47833,161.05719h60.44681l-56.35727,76.92125H.12134l56.35699-76.92125h0Zm121.43112-83.2348h-60.44656l30.22583,41.24921,87.11578,118.90685h-60.44659l-56.35727-76.92125-.53775-.73163-30.22101-41.25397L0,0h60.44684l57.01605,77.82239L174.47894,0h60.44684l-57.01633,77.82239h0Z" fill-rule="evenodd"></path></svg>
        <path d="M37.5274 0L75.0548 65H0L37.5274 0Z"  />
      </svg>`
      );
    },
  },
  {
    name: "copy-wordmark",
    "aria-label": "Copy Wordmark as SVG to Clipboard",
    children: "Copy Wordmark as SVG",
    prefix: <IconType className="mr-3 h-4 w-4" />,
    type: "copy",
    onClick: () => {
      copy(
        // NOTE: We include `xmlns` as this is required when the SVG isn't inlined.
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 26"  width="120" height="24" viewBox="0 0 140 26"  fill="${
          theme === "dark" ? "#ffffff" : "#000000"
        }"><g class="z-0 relative" style="transform:none;transform-origin:85.1399px 13.9777px"><path d="m42.738 13.827 5.488 6.73h-4.228l-3.4-4.192-3.4 4.192h-4.003l5.47-6.673-5.35-6.486h4.228l3.28 4.023 3.261-4.023h4.021l-5.367 6.43Zm21.005 3.121c0 2.275-1.881 3.61-4.85 3.61h-9.336V7.397h8.646c2.97 0 4.85 1.297 4.85 3.403 0 1.485-.95 2.782-2.761 2.894 1.898.132 3.451 1.223 3.451 3.253Zm-10.7-4.305h4.574c1.173 0 1.95-.282 1.95-1.297 0-.996-.777-1.278-1.95-1.278h-4.573v2.575Zm7.093 3.854c0-1.072-.742-1.373-1.984-1.373h-5.108v2.764h5.108c1.242 0 1.984-.32 1.984-1.391Zm15.19 1.541H68.7l-1.139 2.52h-3.693l6.247-13.16h3.85l6.246 13.16h-3.744l-1.14-2.52Zm-1.225-2.725-2.088-4.662-2.106 4.662h4.194Zm19.089 2.161v3.083H81.543V7.398h3.52v10.076h8.129Zm13.36 0v3.083H94.903V7.398h3.52v10.076h8.129Zm.624-3.496c0-4.455 3.09-7.012 7.87-7.012s7.886 2.557 7.886 7.012-3.106 7.011-7.886 7.011-7.87-2.556-7.87-7.011Zm12.167 0c0-2.482-1.64-3.892-4.297-3.892-2.64 0-4.297 1.41-4.297 3.892s1.639 3.891 4.297 3.891 4.297-1.41 4.297-3.891Zm17.744-3.516h-5.022v10.095h-3.52V10.462h-4.988V7.398h13.53v3.064Z" class="z-10 relative header-logo_desktopLogo__zIjld"/></g><path d="M22.75 8.125h-4.875V3.25c0-.897-.728-1.624-1.625-1.625h-13c-.897 0-1.624.728-1.625 1.625v13c0 .897.728 1.624 1.625 1.625h4.875v4.875c0 .897.728 1.625 1.625 1.625h13c.897 0 1.625-.728 1.625-1.625v-13c0-.897-.728-1.625-1.625-1.625Zm-13 8.125v-6.5h6.5v6.5h-6.5Zm-6.5-13h13v4.875h-6.5c-.897 0-1.624.728-1.625 1.625v6.5H3.25v-13Z"/><path d="M0 0h26v26H0V0Z" fill="none"/></svg>`
      );
    },
  },
];

export const PRODUCT_MENU_ITEMS = ({
  site,
}: ContextList): Array<ContextItem> => [
  {
    name: "xballot",
    "aria-label": "Open XBallot Home in New Tab",
    disabled: site === "xballot",
    children: "XBallot",
    prefix: <XBallotLogo className="mr-3 h-4 w-4" />,
    type: "internal",
    href: "/xballot",
  },
  {
    name: "xspace",
    "aria-label": "Open XSpace Home in New Tab",
    disabled: site === "xspace",
    children: "XSpace",
    prefix: <XSpaceLogo className="mr-3 h-4 w-4" />,
    type: "internal",
    href: "/xspace",
  },
];

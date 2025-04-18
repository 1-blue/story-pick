import { Fingerprint, Pointer } from "lucide-react";
import route from "#client/constants/route";

import type { INav } from "#client/components/Layout/types";

const NAVS: INav[] = [
  {
    label: "인증",
    url: "#",
    icon: Fingerprint,
    subNavs: [
      {
        label: route.auth.login.label,
        url: route.auth.login.index,
      },
      {
        label: route.auth.register.label,
        url: route.auth.register.index,
      },
    ],
  },
  {
    label: "Pick",
    url: "#",
    icon: Pointer,
    defaultOpen: true,
    subNavs: [
      {
        label: route.pick.create.label,
        url: route.pick.create.index,
      },
      {
        label: route.pick.edit.label,
        url: route.pick.edit.index,
      },
    ],
  },
];

export { NAVS };

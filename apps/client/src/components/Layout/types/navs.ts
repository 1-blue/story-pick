import { LucideIcon } from "lucide-react";

export interface INav {
  label: string;
  url: string;
  icon?: LucideIcon;
  defaultOpen?: boolean;
  subNavs?: INav[];
}

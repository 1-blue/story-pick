"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";

const convertPathnameToKorean = (pathname: string) => {
  switch (pathname) {
    case "edit":
      return "수정";
    case "create":
      return "생성";
    case "pick":
      return "픽";
    default:
      return pathname;
  }
};

const HeaderBreadcrumb: React.FC = () => {
  const pathname = usePathname();
  const breadcrumbItems = useMemo(
    () =>
      pathname
        .split("/")
        .filter(Boolean)
        .map((item) => ({
          label: item,
          href: `/${item}`,
        })),
    [pathname],
  );

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={item.label}>
            <BreadcrumbItem key={item.label} className="hidden md:block">
              <BreadcrumbPage>
                {convertPathnameToKorean(item.label)}
              </BreadcrumbPage>
            </BreadcrumbItem>
            {index !== breadcrumbItems.length - 1 && (
              <BreadcrumbSeparator className="hidden md:block" />
            )}
          </React.Fragment>
        ))}

        <BreadcrumbItem className="block md:hidden">
          <BreadcrumbPage>
            {convertPathnameToKorean(breadcrumbItems.at(-1)?.label || "")}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default React.memo(HeaderBreadcrumb);

import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={352}
    height={470}
    viewBox="0 0 352 470"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="548" y="539" rx="3" ry="3" width="88" height="6" />
    <rect x="7" y="291" rx="3" ry="3" width="330" height="37" />
    <rect x="7" y="346" rx="3" ry="3" width="319" height="15" />
    <rect x="74" y="15" rx="0" ry="0" width="195" height="243" />
    <rect x="6" y="402" rx="0" ry="0" width="74" height="38" />
    <rect x="532" y="525" rx="50" ry="50" width="41" height="35" />
    <circle cx="591" cy="531" r="22" />
    <rect x="246" y="402" rx="0" ry="0" width="40" height="37" />
    <rect x="300" y="402" rx="0" ry="0" width="40" height="37" />
  </ContentLoader>
);

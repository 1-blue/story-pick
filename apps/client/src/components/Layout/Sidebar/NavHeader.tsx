import React from "react";

const NavHeader: React.FC = () => {
  return (
    <div className="flex items-center gap-2 p-2 text-lg font-bold">
      <figure>로고</figure>
      <h1>Pick</h1>
    </div>
  );
};

export default React.memo(NavHeader);

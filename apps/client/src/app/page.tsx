import type { NextPage } from "next";

import { Button } from "@sp/ui/components/button";

const Page: NextPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button size="lg">Button</Button>
      </div>
    </div>
  );
};

export default Page;

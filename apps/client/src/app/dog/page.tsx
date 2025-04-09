import type { NextPage } from "next";
import { Suspense } from "react";

import DogForm from "./_components/DogForm";
import DogTable from "./_components/DogTable";

const Page: NextPage = () => {
  return (
    <div className="p-10 flex flex-col gap-10">
      <DogForm />

      <Suspense fallback={<div>Loading...</div>}>
        <DogTable />
      </Suspense>
    </div>
  );
};

export default Page;

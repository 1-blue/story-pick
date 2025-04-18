"use client";

import { useTRPC } from "#client/utils/trpc";
import { useSuspenseQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@sp/ui/components/table";

const DogTable: React.FC = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.dog.getAllDogs.queryOptions());

  return (
    <Table>
      <TableCaption>테스트용 강아지들</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>이름</TableHead>
          <TableHead>생년월일</TableHead>
          <TableHead>가격</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((dog) => (
          <TableRow key={dog.id}>
            <TableCell className="font-medium">{dog.name}</TableCell>
            <TableCell>{dog.birth}</TableCell>
            <TableCell>{dog.price.toLocaleString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">
            {data.reduce((acc, dog) => acc + dog.price, 0).toLocaleString()}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default DogTable;

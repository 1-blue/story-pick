"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@workspace/ui/components/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { cn } from "@workspace/ui/lib";
import { useDogMutations } from "#src/app/dog/_hooks/useDogMutations";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "이름은 최소 2자 이상이어야 합니다.",
  }),
  birth: z.string(),
  price: z.string().min(0, {
    message: "가격은 0보다 큰 숫자여야 합니다.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const inputs = [
  {
    name: "name",
    label: "강아지 이름",
    placeholder: "멍멍이",
    type: "text",
  },
  {
    name: "birth",
    label: "생년월일",
    placeholder: "2025-01-01",
    type: "date",
  },
  {
    name: "price",
    label: "가격",
    placeholder: "100000",
    type: "number",
  },
];

interface IProps {
  initialValues?: Partial<FormValues>;
  submitButtonText?: string;
  className?: string;
}

const DogForm: React.FC<IProps> = ({
  initialValues = {},
  submitButtonText = "저장하기",
  className,
}) => {
  const { createDog } = useDogMutations();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      birth: "",
      price: "0",
      ...initialValues,
    },
  });

  const onSubmit = form.handleSubmit((formData) => {
    createDog.mutate({
      ...formData,
      birth: new Date(formData.birth),
      price: Number(formData.price),
    });
  });

  return (
    <Card className={cn("mx-auto w-full max-w-md shadow-lg", className)}>
      <CardHeader className="space-y-1">
        <CardTitle className="text-center text-2xl font-bold">
          강아지 정보
        </CardTitle>
        <CardDescription className="text-center">
          강아지의 정보를 입력해주세요
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-6">
            {inputs.map((input) => (
              <FormField
                key={input.name}
                control={form.control}
                name={input.name as keyof z.infer<typeof formSchema>}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium">{input.label}</FormLabel>
                    <FormControl>
                      <Input
                        type={input.type}
                        placeholder={input.placeholder}
                        className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-red-500" />
                  </FormItem>
                )}
              />
            ))}
            <Button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-blue-700"
            >
              {submitButtonText}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-center text-sm text-gray-500">
        <p>모든 필드는 필수 입력 항목입니다</p>
      </CardFooter>
    </Card>
  );
};

export default DogForm;

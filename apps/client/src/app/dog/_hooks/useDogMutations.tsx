import { useTRPC } from "#src/utils/trpc";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDogMutations = () => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();

  const createDog = useMutation({
    ...trpc.dog.createDog.mutationOptions(),
    onSuccess: (data) => {
      queryClient.setQueryData(trpc.dog.getAllDogs.queryKey(), (old) => {
        return [...(old ?? []), data];
      });
    },
  });
  const updateDog = useMutation({
    ...trpc.dog.updateDog.mutationOptions(),
    onSuccess: (data) => {
      queryClient.setQueryData(trpc.dog.getAllDogs.queryKey(), (old) => {
        return old?.map((dog) => (dog.id === data.id ? data : dog));
      });
    },
  });
  const deleteDog = useMutation({
    ...trpc.dog.deleteDog.mutationOptions(),
    onSuccess: (data) => {
      queryClient.setQueryData(trpc.dog.getAllDogs.queryKey(), (old) => {
        return old?.filter((dog) => dog.id !== data.id);
      });
    },
  });

  return { createDog, updateDog, deleteDog };
};

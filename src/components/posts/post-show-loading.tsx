import { Skeleton } from '@nextui-org/react';

export const PostShowLoading = () => {
  return (
    <div className="m-4">
      <div className="my-2">
        <Skeleton className="h-8 w-40" />
      </div>
      <div className="p-4 border rounded space-y-2">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-6 w-32" />
      </div>
    </div>
  );
};

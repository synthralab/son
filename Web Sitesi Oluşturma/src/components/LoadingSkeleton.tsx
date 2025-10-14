import { Skeleton } from "./ui/skeleton";
import { Card, CardContent, CardHeader } from "./ui/card";

export function BlogCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <Skeleton className="aspect-video w-full" />
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-3">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-6 w-full mb-3" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-3/4" />
      </CardContent>
    </Card>
  );
}

export function PortfolioCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <Skeleton className="aspect-[4/3] w-full" />
    </Card>
  );
}

export function ServiceCardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-12 w-12 rounded-lg mb-4" />
        <Skeleton className="h-6 w-3/4" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6" />
      </CardContent>
    </Card>
  );
}

export function PageHeaderSkeleton() {
  return (
    <section className="pt-32 pb-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Skeleton className="h-12 w-2/3 mb-6" />
          <Skeleton className="h-5 w-full mb-2" />
          <Skeleton className="h-5 w-4/5" />
        </div>
      </div>
    </section>
  );
}

export function DetailPageSkeleton() {
  return (
    <div className="pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Skeleton className="h-8 w-32 mb-6" />
        <Skeleton className="h-12 w-3/4 mb-4" />
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <Skeleton className="h-4 w-20 mb-2" />
            <Skeleton className="h-6 w-32" />
          </div>
          <div>
            <Skeleton className="h-4 w-16 mb-2" />
            <Skeleton className="h-6 w-24" />
          </div>
        </div>
        <Skeleton className="aspect-video w-full rounded-lg mb-8" />
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>
    </div>
  );
}

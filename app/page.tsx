import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center p-8">
      <div className="max-w-3xl space-y-8 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          Badge or Blemish: How Singapore Judges Scarred Skin
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          An ethnographic exploration of how scars shape identity, navigate gender,
          and reveal the social hierarchies written on our bodies.
        </p>
        <div className="pt-4">
          <Link
            href="/stories/b"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Explore the Stories
          </Link>
        </div>
        <p className="text-sm text-muted-foreground italic pt-8">
          Scars don't change meaning. We do.
        </p>
      </div>
    </div>
  );
}

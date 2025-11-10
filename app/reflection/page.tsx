import { Highlight } from "@/components/highlight"

export default function Reflection() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto px-8 py-12">
      <div className="not-prose mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Researcher's Reflection</h1>
        <p className="text-xl text-muted-foreground">Listening Beyond the Surface</p>
      </div>

      <h2>Stories Built to Survive</h2>
      <p>
        Conducting this ethnography taught me that people rarely see their scars as isolated injuries. They see them in mirrors, through others' eyes, and as part of stories they build to survive judgment.
      </p>

      <h2>Listening for Silence</h2>
      <p>
        Asking about a scar is asking for vulnerability. I learned to <Highlight>listen for what people didn't say</Highlight> as much as what they did. Laughter often hides pain. Acceptance sometimes masks resignation. Every conversation proved the same truth: scars aren't about broken skin. They're about how we rebuild meaning afterwards, how we negotiate between the bodies we have and the bodies the world expects.
      </p>

      <h2>The Question of Power</h2>
      <p>
        What surprised me most was how much scars reveal about <Highlight>power</Highlight>. Who gets to claim their scars proudly? Who has to explain them constantly? Who can turn them into conversation starters, and who spends energy trying to hide them? These questions aren't about individual confidence. They're about <Highlight>structural inequalities written on skin</Highlight>. Gender, location, origin, heritage—all of these determine whether a scar becomes a story worth telling or a flaw worth concealing.
      </p>

      <h2>Gaps in Our Language</h2>
      <p>
        This research also revealed gaps in how we talk about visible difference. We celebrate some scars while pathologizing others. We praise "acceptance" without acknowledging the work it takes to accept something society constantly judges. We assume everyone can simply embrace their flaws without recognizing that <Highlight>some flaws carry heavier social costs</Highlight> than others.
      </p>

      <div className="not-prose my-8 p-6 bg-muted/50 rounded-lg border">
        <p className="text-sm leading-relaxed">
          If this project shows anything, it's that <Highlight>scars don't change meaning on their own. We do.</Highlight> Through conversation, education, and deliberate choice, we can shift how society reads marked bodies. But that work requires honesty about the hierarchies we've created and commitment to dismantling them.
        </p>
      </div>

      <div className="not-prose mt-12 pt-8 border-t text-center">
        <p className="text-sm text-muted-foreground italic">
          Explore Beyond the Surface.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Scan the QR code to return to the full exhibition or share your thoughts.
        </p>
      </div>

      <div className="not-prose mt-8 text-center">
        <p className="text-base font-medium italic">
          Scars don't change meaning. We do.
        </p>
      </div>
    </article>
  )
}

import { Highlight } from "@/components/highlight"
import styles from "./page.module.css"

export default function StoryB() {
  return (
    <div className={styles.bPage}>
      <article className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto px-8 py-12">
        <div className="not-prose mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">B</h1>
          <p className="text-xl text-muted-foreground">Fire & Resilience</p>
        </div>

      <h2>Childhood Scars</h2>
      <p>
        B's scar traces back to a kitchen accident when he was seven.
      </p>

      <blockquote>
        "My mom was cooking and the pan of oil splattered on my face. It caused second to third degree burns that never really healed back."
      </blockquote>

      <p>
        At first, he didn't grasp the severity. But by primary five, classmates began teasing him, assuming the scar was <Highlight>contagious</Highlight>.
      </p>

      <blockquote>
        "I didn't feel like going to school. I didn't feel like socializing."
      </blockquote>

      <p>
        He recalled, describing those years as filled with "a lot of depressive state."
      </p>

      <h2>A Shift in Perspective</h2>
      <p>
        What happened next reveals something crucial about how scars evolve through <Highlight>time and maturity</Highlight>. As B grew older, his perspective shifted completely.
      </p>

      <blockquote>
        "When people see my face, they ask what happened. It's like a good conversation starter."
      </blockquote>

      <p>
        He explained. The mark that once isolated him became something he owned.
      </p>

      <blockquote>
        "It shaped who I am. It made me embrace what I am. If people don't want to talk to me because of it, it's their loss."
      </blockquote>

      <h2>Claiming Agency</h2>
      <p>
        This transformation wasn't just personal growth. It reflects how <Highlight>facial scars on men</Highlight> can move from stigma toward <Highlight>self-definition</Highlight> once the bearer claims agency over the narrative. B learned a harder lesson too:
      </p>

      <blockquote>
        "People tend to judge others based on first impressions and not really ask for what actually happened."
      </blockquote>

      <p>
        His scar taught him that physical healing is only the beginning. The real recovery happens when you stop waiting for others to understand and start deciding for yourself what your body means.
      </p>

      <div className="not-prose my-8 p-6 rounded-lg border border-orange-900/30 bg-orange-950/20">
        <p className="text-base font-medium leading-relaxed text-amber-200">
          B's journey illustrates a fundamental tension in visible difference: between the narratives others impose and the meanings we forge ourselves. His transformation from shame to self-definition demonstrates that healing extends beyond physical recovery—it requires reclaiming <span className="text-amber-400 font-semibold">authorship over one's own body and story</span>.
        </p>
      </div>
      </article>
    </div>
  )
}

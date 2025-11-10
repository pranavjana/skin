import { Highlight } from "@/components/highlight"
import styles from "./page.module.css"

export default function StoryV() {
  return (
    <div className={styles.vPage}>
      <article className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto px-8 py-12">
      <div className="not-prose mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-2">V</h1>
        <p className="text-xl text-muted-foreground">Scarred in Play</p>
      </div>

      <h2>A Childhood Memory</h2>
      <p>
        V's scar sits on his arm, a raised mark from a childhood accident involving a skateboard, a bicycle, and his brother.
      </p>

      <blockquote>
        "He hit a bump. The bicycle was fine, but I somersaulted into a tree."
      </blockquote>

      <p>
        He laughed. He was seven. The memory brought no shame, only warmth.
      </p>

      <blockquote>
        "It reminds me of a more carefree time in my life."
      </blockquote>

      <h2>Proof of Living Fearlessly</h2>
      <p>
        Unlike others who experienced scrutiny or judgment, V spoke of his scar with lightness.
      </p>

      <blockquote>
        "Every time I look back on that scar, it makes me reminisce back to the childlike times of my youth, where I was less mature and perhaps all the more happy for it."
      </blockquote>

      <p>
        For him, the mark wasn't disfigurement. It was <Highlight>proof of having lived fearlessly</Highlight>.
      </p>

      <blockquote>
        "Ignorance is bliss, and that scar somewhat rekindles in me a very childlike spirit."
      </blockquote>

      <h2>Location Matters</h2>
      <p>
        What V's story reveals is how <Highlight>location and origin</Highlight> completely transform meaning. His scar is hidden on his arm. It came from play, not disease or carelessness. People read it as a story worth hearing, not a flaw to question. This tells us something important: society doesn't judge scars objectively. It judges <Highlight>where they are, how they happened, and who bears them</Highlight>.
      </p>

      <h2>The Privilege of Nostalgia</h2>
      <p>
        In the broader study, his narrative balanced the pain with joy, showing how meaning transforms when scars connect to <Highlight>nostalgia rather than judgment</Highlight>. Healing can be memory. A scar can be visible proof that we once lived fearlessly enough to fall. But this privilege isn't universal. It depends on factors V didn't choose: his gender, the scar's location, the story behind it. Not everyone gets to turn their scars into fond memories. Some spend their lives explaining them.
      </p>
      </article>
    </div>
  )
}

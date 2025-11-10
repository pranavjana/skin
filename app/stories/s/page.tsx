import { Highlight } from "@/components/highlight"
import styles from "./page.module.css"

export default function StoryS() {
  return (
    <div className={styles.sPage}>
      <article className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto px-8 py-12">
        <div className="not-prose mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">S</h1>
          <p className="text-xl text-muted-foreground">Beneath the Beauty Line</p>
        </div>

      <h2>The Mark on the Mirror</h2>
      <p>
        S's scar runs diagonally down her nose, the result of a floorball accident in junior college that broke her nose and required surgery.
      </p>

      <blockquote>
        "Every time I see myself in the mirror, the scar is there."
      </blockquote>

      <p>
        The injury itself was straightforward, but the mark it left became inseparable from how others assessed her face.
      </p>

      <blockquote>
        "Maybe as a girl, the looks of my face are very important."
      </blockquote>

      <h2>The Better Side</h2>
      <p>
        The difference <Highlight>gender makes</Highlight> became starkly clear in small moments. Friends would ask her to pose from her "better side" for photos, the side where the scar was less visible.
      </p>

      <blockquote>
        "Does it also mean they view it the same way? Like they also think that I don't look as pretty on my left side?"
      </blockquote>

      <p>
        She wondered. These weren't cruel comments. They were reflections of an unspoken rule: <Highlight>feminine beauty should be smooth, symmetrical, unmarked</Highlight>.
      </p>

      <blockquote>
        "For guys, a scar can look cool, but for girls, it doesn't feel the same."
      </blockquote>

      <h2>Emotional Labor</h2>
      <p>
        What strikes me about S's account is how much <Highlight>emotional labor</Highlight> goes into managing a facial scar as a woman. She covers it with makeup before going out, not because she's ashamed, but because she knows the world will read her face as flawed otherwise.
      </p>

      <blockquote>
        "It makes me less pretty to other people."
      </blockquote>

      <p>
        She explained, articulating what society rarely says aloud but constantly enforces. The scar doesn't just sit on her skin. It carries the weight of <Highlight>beauty standards</Highlight> that measure women differently than men.
      </p>

      <h2>Internal Surveillance</h2>
      <p>
        Beauty standards in Singapore don't just shape how others perceive scars. They shape how women <Highlight>internalize those perceptions</Highlight>, turning external judgment into internal surveillance. S meets each day knowing the unease comes less from her body than from the ideals surrounding it. Her scar became a teacher, exposing the social lines that define what women are expected to conceal. This isn't about vanity. It's about <Highlight>navigating a world that ties worth to appearance</Highlight>, then blames women for caring.
      </p>
      </article>
    </div>
  )
}

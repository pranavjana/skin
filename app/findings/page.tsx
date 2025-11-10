import { Highlight } from "@/components/highlight"

export default function Findings() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto px-8 py-12">
      <div className="not-prose mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Overall Findings</h1>
        <p className="text-xl text-muted-foreground">Reading the Skin</p>
      </div>

      <p>
        Across these five narratives, similar ages and shared cultural contexts produced profoundly different meanings. Scars don't speak for themselves. Society speaks through them, and what it says depends on factors the scarred person rarely controls.
      </p>

      <h2>Location determines visibility and judgment</h2>
      <p>
        <Highlight>Facial scars become public property</Highlight>, subject to constant scrutiny. Scars on limbs fade into the background, noticed only when pointed out. The face carries social expectations that other body parts don't. It's the first thing people see, the primary site of identity. A mark there becomes unavoidable, demanding explanation or concealment in ways a hidden scar never does.
      </p>

      <h2>Origin shapes reaction</h2>
      <p>
        <Highlight>Sports injuries</Highlight> get admired as proof of an active life, even bravery. <Highlight>Burn scars</Highlight> invoke sympathy but also fear, as people wonder about contagion or disfigurement. <Highlight>Acne scars</Highlight> get pathologized, treated as medical failures or hygiene lapses. The scar itself is neutral. The story behind it determines whether it's celebrated, pitied, or judged.
      </p>

      <h2>Gender divides interpretation</h2>
      <p>
        Men's scars can signify <Highlight>toughness, lived experience, resilience</Highlight>. Women's scars invoke <Highlight>scrutiny, suggestions for concealment, concerns about beauty</Highlight>. S's experience made this brutally clear: the same mark that might make a man look "cool" makes a woman feel "less pretty." This isn't individual insecurity. It's structural inequality in how physical difference gets valued.
      </p>

      <h2>Heritage and generation compound perception</h2>
      <p>
        Older family members often equate scars with carelessness or trouble, reading them through <Highlight>traditional ideals of propriety and presentation</Highlight>. Younger peers tend to reframe them as individuality or proof of experience. Both H and K described how their mothers' reactions shaped their early relationships with their scars, adding layers of cultural expectation to personal experience.
      </p>

      <div className="not-prose my-8 p-6 bg-muted/50 rounded-lg border">
        <p className="text-sm leading-relaxed">
          Together, these factors create a clear <Highlight>hierarchy of acceptance</Highlight>. Sports scars suggest courage. Burn scars invite sympathy. Acne scars imply carelessness. Female facial scars become flaws to erase. This hierarchy isn't natural or inevitable. It's learned, enforced, and reproduced through daily interactions that treat some bodies as more acceptable than others.
        </p>
      </div>

      <p>
        Yet within that hierarchy, every participant reclaimed agency. Through humor, resilience, nostalgia, or discipline, each person redefined the space between mark and meaning. B transformed isolation into independence. S navigated beauty standards while recognizing their artificiality. V held onto childhood joy. H claimed his scar despite mixed messages. K turned shame into self-care. These aren't just survival strategies. They're <Highlight>acts of resistance</Highlight> against a world that tries to define bodies without consent.
      </p>

      <p className="font-medium">
        Scars are cultural texts. They record how societies read difference, how individuals rewrite that reading, and how healing is never only biological. It's social, emotional, and ongoing. The body remembers what happened. Society decides what it means. And somewhere between those two forces, each person finds their own answer.
      </p>
    </article>
  )
}

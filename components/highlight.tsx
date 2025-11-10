import { ReactNode } from "react"

export function Highlight({ children }: { children: ReactNode }) {
  return (
    <span className="font-medium text-foreground bg-accent/30 px-1 rounded">
      {children}
    </span>
  )
}

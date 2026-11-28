import clsx from "clsx";

type HeadingProps = {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  color?: "azul" | "rosa"  | "verde" | "violeta"
  className?: string
}

export default function Heading({ children, level = 1, color = "azul",  className}: HeadingProps) {
  const Tag: React.ElementType = `h${level}`

  const sizeMap: Record<number, string> = {
    1: "text-3xl sm:text-4xl",
    2: "text-2xl sm:text-3xl",
    3: "text-xl sm:text-2xl",
    4: "text-lg sm:text-xl",
    5: "text-base sm:text-lg",
    6: "text-sm",
  }
         
  const colorMap : Record<string, string> = {
    azul: "from-cyan-400 via-indigo-400 to-violet-400 drop-shadow-cyan-500/60",
    rosa: "from-pink-400 via-fuchsia-500 to-violet-500 drop-shadow-pink-500/60",
    verde: "from-emerald-400 via-cyan-400 to-indigo-500 drop-shadow-emerald-500/60",
    violeta: "from-violet-300 via-violet-500 to-pink-500 drop-shadow-violet-500/60",
  }

  return (
    <Tag
      className={clsx("font-heading font-bold tracking-tighter bg-linear-to-r bg-clip-text text-transparent drop-shadow-lg", sizeMap[level], colorMap[color] , className)}
    >
      {children}
    </Tag>
  )
}

import clsx from "clsx";

type HeadingProps = {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
}

export default function Heading({ children, level = 1, className}: HeadingProps) {
  const Tag: React.ElementType = `h${level}`

  const sizeMap: Record<number, string> = {
    1: "text-3xl sm:text-4xl",
    2: "text-2xl sm:text-3xl",
    3: "text-xl sm:text-2xl",
    4: "text-lg sm:text-xl",
    5: "text-base sm:text-lg",
    6: "text-sm",
  };

  return (
    <Tag
      className={clsx("font-semibold tracking-tight", sizeMap[level], className)}
    >
      {children}
    </Tag>
  )
}

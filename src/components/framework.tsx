import type { AnchorHTMLAttributes, ImgHTMLAttributes } from 'react'

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fill?: boolean
  priority?: boolean
  quality?: number
}

export function Image({
  fill = false,
  priority = false,
  quality: _quality,
  className,
  loading,
  ...props
}: ImageProps) {
  const classes = [fill && 'absolute inset-0 h-full w-full', className].filter(Boolean).join(' ')

  return (
    <img
      {...props}
      className={classes || undefined}
      loading={priority ? 'eager' : loading}
      fetchPriority={priority ? 'high' : undefined}
    />
  )
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
}

export function Link({ href, children, ...props }: LinkProps) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  )
}

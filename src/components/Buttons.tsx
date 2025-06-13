import type { ReactNode } from '@tanstack/react-router'
import type { ComponentProps } from 'react'

type RegularButtonProps = {
  children: ReactNode
  color?: string
  filled?: boolean
} & ComponentProps<'button'>

export const RegularButton = ({
  children,
  color,
  filled = false,
  ...props
}: RegularButtonProps) => {
  return (
    <button
      {...props}
      className={`regular-button ${color} ${filled ? 'filled' : ''}`}
    >
      {children}
    </button>
  )
}

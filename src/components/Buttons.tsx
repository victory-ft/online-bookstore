import type { ReactNode } from '@tanstack/react-router'
import type { ComponentProps } from 'react'

type ButtonProps = {
  children: ReactNode
  color?: string
  filled?: boolean
} & ComponentProps<'button'>

export const Button = ({
  children,
  color,
  filled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`regular-button ${color} ${filled ? 'filled' : ''}`}
    >
      {children}
    </button>
  )
}

export const LargeButton = ({
  children,
  color,
  filled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`large-button ${color} ${filled ? 'filled' : ''}`}
    >
      {children}
    </button>
  )
}

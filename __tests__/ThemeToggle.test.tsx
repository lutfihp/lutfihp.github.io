import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeToggle } from '@/components/ThemeToggle'

describe('ThemeToggle', () => {
  beforeEach(() => {
    document.documentElement.removeAttribute('data-theme')
    window.__toggleTheme = undefined
  })

  it('renders a switch button with accessible label', () => {
    render(<ThemeToggle />)
    expect(screen.getByRole('switch', { name: /toggle theme/i })).toBeInTheDocument()
  })

  it('aria-checked is false when data-theme is dark', () => {
    document.documentElement.setAttribute('data-theme', 'dark')
    render(<ThemeToggle />)
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false')
  })

  it('aria-checked is true when data-theme is light', () => {
    document.documentElement.setAttribute('data-theme', 'light')
    render(<ThemeToggle />)
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true')
  })

  it('calls window.__toggleTheme when clicked', () => {
    const toggle = jest.fn()
    window.__toggleTheme = toggle
    render(<ThemeToggle />)
    fireEvent.click(screen.getByRole('switch'))
    expect(toggle).toHaveBeenCalledTimes(1)
  })
})

import { render, screen } from '@testing-library/react'
import { ContactSection } from '@/components/ContactSection'

describe('ContactSection', () => {
  it('renders a mailto link for the email address', () => {
    render(<ContactSection />)
    const emailLink = screen.getByRole('link', { name: /lutfihp@gmail\.com/i })
    expect(emailLink).toHaveAttribute('href', 'mailto:lutfihp@gmail.com')
  })
})

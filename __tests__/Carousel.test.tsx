import { render, screen, fireEvent } from '@testing-library/react'
import { Carousel } from '@/components/Carousel'
import type { Screenshot } from '@/lib/data'

const shots: Screenshot[] = [
  { src: null, caption: 'First'  },
  { src: null, caption: 'Second' },
  { src: null, caption: 'Third'  },
]

describe('Carousel', () => {
  it('renders the counter starting at 1 / 3', () => {
    render(<Carousel screenshots={shots} title="Test" />)
    expect(screen.getByText('1 / 3')).toBeInTheDocument()
  })

  it('shows first caption initially', () => {
    render(<Carousel screenshots={shots} title="Test" />)
    expect(screen.getByText('First')).toBeInTheDocument()
  })

  it('advances to slide 2 when Next is clicked', () => {
    render(<Carousel screenshots={shots} title="Test" />)
    fireEvent.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByText('2 / 3')).toBeInTheDocument()
    expect(screen.getByText('Second')).toBeInTheDocument()
  })

  it('goes back when Prev is clicked', () => {
    render(<Carousel screenshots={shots} title="Test" />)
    fireEvent.click(screen.getByRole('button', { name: /next/i }))
    fireEvent.click(screen.getByRole('button', { name: /previous/i }))
    expect(screen.getByText('1 / 3')).toBeInTheDocument()
  })

  it('wraps from last slide to first', () => {
    render(<Carousel screenshots={shots} title="Test" />)
    fireEvent.click(screen.getByRole('button', { name: /next/i }))
    fireEvent.click(screen.getByRole('button', { name: /next/i }))
    fireEvent.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByText('1 / 3')).toBeInTheDocument()
  })

  it('jumps to a slide when a thumbnail is clicked', () => {
    render(<Carousel screenshots={shots} title="Test" />)
    fireEvent.click(screen.getByRole('button', { name: /go to screenshot 3/i }))
    expect(screen.getByText('3 / 3')).toBeInTheDocument()
  })
})

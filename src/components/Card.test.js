import { render, screen } from '@testing-library/react'
import Card from './Card'
import React from 'react'

test('renders learn react link', () => {
  render(
    <Card
      name={'Classic'}
      image={'https://cdn.dummyjson.com/recipe-images/1.webp'}
    />
  )
  const linkElement = screen.getByText(/Пицца.Inc/i)
  expect(linkElement).toBeInTheDocument()
  expect(linkElement).toHaveStyle({ color: 'green' })
})

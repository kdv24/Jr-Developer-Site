import React from 'react'
import {render, fireEvent} from 'react-testing-library'

import ExpandableSection from '../expandable-section/expandable-section'

test('displays or hides the expanded content as expected', () => {
  const title = 'This is an expandable section'
  const initialText = 'Some initial text'
  const expandedText = 'Expanded content is much longer and such'
  const {getByText} = render(
    <ExpandableSection title={title} initialText={initialText} expandedText={expandedText} />,
  )

  expect(getByText(title)).toBeVisible()
  expect(getByText(initialText)).toBeVisible()
  expect(getByText(expandedText)).not.toBeVisible()

  fireEvent.click(getByText(/Read more.../i))

  expect(getByText(title)).toBeVisible()
  expect(getByText(initialText)).toBeVisible()
  expect(getByText(expandedText)).toBeVisible()

  fireEvent.click(getByText(/Read less/i))

  expect(getByText(title)).toBeVisible()
  expect(getByText(initialText)).toBeVisible()
  expect(getByText(expandedText)).not.toBeVisible()
})
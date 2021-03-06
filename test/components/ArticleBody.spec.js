import React from 'react'
import { shallow } from 'enzyme'
import ArticleBody from 'components/ArticleBody'

describe('ArticleBody suite', () => {
  const markdown = `# yo

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

* list 1
* list 2
* list 3

> blockquote

**Bold**

## header 2

1. Ordered list 1
2. Ordered list 2
3. Ordered list 3
`

  it('contains spec with an expectation', () => {
    expect(shallow(<ArticleBody markdown={markdown} />).is('.markdown-body'))
  })
})

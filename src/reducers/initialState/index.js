import { protocol, domain } from '../../../config/settings'

// Item
// {
//   date: '2016-04-30 15:00',
//   public: true,
//   tags: [],
//   title : 'Title',
//   preview: 'Preview...',
//   url :'example-article'
// }
export const articles = {
  items: [],
  archives: {},
  tags: [],
  isFetching: false,
  isFetched: false,
  didInvalidate: false,
  error: null,
}

export const article = {
  title: '',
  markdown: '',
  author: {},
  date: '',
  tags: [],
  url: '',
  description: '',
  pageType: 'article',
  publicURL: '',
  ogImageURL: `${protocol}//${domain}/assets/images/common/open-graph.jpg`,
  next: null,
  prev: null,
  isFetching: false,
  didInvalidate: false,
  cache: {},
  error: null,
}

export const sidebar = {
  open: false,
  docked: false,
}

export const searchResults = {
  totalCount: 0,
  isFetching: false,
  incomplete: false,
  items: [],
  error: null,
}

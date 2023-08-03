import { stringToSlug } from './slugify.js'

const StoryblokClient = require('storyblok-js-client')

const Storyblok = new StoryblokClient({
  accessToken: 'p4gGIMh6R6U5xPOUYs5oCgtt',
  cache: {
    clear: 'auto',
    type: 'memory',
  },
})

export async function getBlogPages() {
  const { data } = await Storyblok.get('cdn/stories/blog', {})

  const articles = data.story.content.bloglist

  return articles.map(article => ({
    loc: `/ressources/blog/${stringToSlug(article.title)}`,
    lastmod: article.date,
    changefreq: 'daily',
    priority: 0.9,
  }))
}

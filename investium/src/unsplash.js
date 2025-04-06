import axios from 'axios'

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_KEY}`,
  },
})

export default {
  async getRandomPhoto(query, width = 600, height = 400) {
    try {
      const response = await unsplash.get('/photos/random', {
        params: {
          query,
          w: width,
          h: height,
        },
      })
      return {
        url: response.data.urls.regular,
        alt: response.data.alt_description || query,
        author: response.data.user.name,
        authorLink: `${response.data.user.links.html}?utm_source=investium&utm_medium=referral`,
      }
    } catch (error) {
      console.error('Unsplash API error:', error)
      return {
        url: `https://source.unsplash.com/random/${width}x${height}/?${query}`,
        alt: query,
        author: 'Unsplash',
        authorLink: 'https://unsplash.com',
      }
    }
  },

  async getPhotosForCategories(categories) {
    const promises = categories.map((category) => this.getRandomPhoto(category.name.toLowerCase()))
    return Promise.all(promises)
  },
}

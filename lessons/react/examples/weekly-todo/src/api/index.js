
class Api {
  constructor(url) {
    this.url = url
  }

  async doRequest(path, options) {
    try {
      const res = await fetch(this.getEndpointUrl(path), options)
      if(!res.ok) {
        const body = await res.json()
        return this.makeErrorBody(body)
      }

      const body = await res.json()
      return this.makeSuccessBody(body)
    } catch (error) {
      return this.makeErrorBody(error)
    }
  }

  getEndpointUrl(path) {
    return `${this.url}/${path}`
  }

  makeErrorBody(data) {
    return {
      success: false,
      error: data,
      body: null,
    }
  }

  makeSuccessBody(data) {
    return {
      success: true,
      error: null,
      body: data,
    }
  }

  makeQuery(obj) {
    if(!obj) {
      return ''
    }

    return `?${Object.keys(obj).map((key) => `${key}=${obj[key]}`).join('&')}`
  }

  get(path, queryObj = null) {
    const uri = path + this.makeQuery(queryObj)
    return this.doRequest(uri)
  }

  post(path, data) {
    return this.doRequest(path, {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }
}

export const api = new Api('https://demo6226555.mockable.io')

api.get('users')
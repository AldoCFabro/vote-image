import axios from 'axios';

export async function getImages(searchQuery: string, perPage: number = 3) {
  const apiKey = process.env.APP_API_PIXABAY_TOKEN;
  const urlBase = process.env.APP_API_PIXABAY_URL;

  const url = `${urlBase}?key=${apiKey}&q=${searchQuery}s&image_type=photo&per_page=${perPage}&safesearch=true`;

  const response: any = await axios({
    url,
    method: 'get',
  });
  return response.data.hits;
}

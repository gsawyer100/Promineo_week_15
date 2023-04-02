// endpoint
// fetches and classlists where api is defined
// Try,catch,block
// Then export everything
// You're fetching data from the Mockapi into here
const apiUrl = 'https://mockapi.io/projects/6428501a161067a83b0ba044';

async function fetchLists() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching lists:', error);
    return [];
  }
}

class ListApi {
  static async getAllLists() {
    const lists = await fetchLists();
    return lists;
  }
}

export default ListApi;
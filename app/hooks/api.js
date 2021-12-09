const API_ENDPOINT = 'https://www.wecasa.fr/api/techtest';

export const useApi = () => {
  const getRoute = route => async () => {
    let jsonRes = false;

    try {
      const res = await fetch(`${API_ENDPOINT}${route}`, {
        method: 'GET',
        headers: { Accept: 'application/json' },
      });

      jsonRes = await res.json();
    } catch (error) {
      // TODO: error mgmt
      console.log(error);
    }

    return jsonRes;
  };

  return {
    getCatalog: getRoute('/universe'),
  };
};

const API_ENDPOINT = 'https://www.wecasa.fr/api/techtest';

export const useApi = () => {
  const getRoute = (route) => async () => {
    let jsonRes = false;

    try {
      const res = await fetch(`${API_ENDPOINT}/${route}`, {
        method: 'GET',
      });

      jsonRes = await res.json();
    } catch (error) {
      // TODO: error mgmt
    }

    return jsonRes;
  };

  return {
    getCatalog: getRoute('/universe'),
  };
};

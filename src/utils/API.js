const API = {
    baseUrl: 'http://10.22.54.104:8080/asset/tracking/asset/',
    findAsset(assetId) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Access-Control-Allow-Origin', '*');
      return fetch(this.baseUrl + assetId, {
        headers,
        method: 'GET'
      }).then(res => res.json());
    }
  };
  
  export default API;
  
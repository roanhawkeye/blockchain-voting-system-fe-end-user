const API = {
    baseUrl: 'http://10.22.54.104:8080/asset/tracking/asset/',
    findAsset() {
      const assetId = 'd92c715c-df5f-4fe8-9143-2a45dae7bcfa';
    //   const username = 'testUser';
    //   const password = 'password';
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Access-Control-Allow-Origin', '*');
      return fetch(this.baseUrl + assetId, {
        headers,
        method: 'GET'
      }).then(res => {
        //   res.json();
          console.log(res.json());
        });
    }
  };
  
  export default API;
  
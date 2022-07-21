import { useState } from 'react';

function useToken(){
    function getToken(){
      const userToken = sessionStorage.getItem('token');
      return userToken && userToken; // todo: why
    }

    const [token, setToken] = useState(getToken());

    function setToken(){
        
    }


}
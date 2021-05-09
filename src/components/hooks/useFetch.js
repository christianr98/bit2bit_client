import {useEffect, useState} from "react";
import axios from "axios";

const useFetch = (url, params = {}, auto = true) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async function () {
    try {
      setLoading(true);
      //const localUser = JSON.parse(localStorage.getItem('user'))
      const response = await axios.get(url, {params: params} )
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if(auto) fetchData();
  }, [url]);

  return {loading, data, fetchData};
};

export default useFetch;
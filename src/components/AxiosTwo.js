import React, { useEffect, useState } from "react";
import axios from "axios";

function AxiosTwo() {
    const options = {
        method: 'GET',
        url: 'https://gibraltar-airport-feed.p.rapidapi.com/next-flight',
        headers: {
          'X-RapidAPI-Key': 'b60a40ebbamsh883889bbffc9653p11c47fjsnc009c264e199',
          'X-RapidAPI-Host': 'gibraltar-airport-feed.p.rapidapi.com'
        }
      };


    const [data, setData] = useState(null);

    useEffect(() => {
        axios.request(options)
        .then(res => {
          setData(res.data);
          console.log(res.data.collection.items[0].data[0].value);
         
    
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  
 
  }

export default AxiosTwo;

import React, { useEffect, useState } from "react";
import axios from "axios";

function Axios() {
  const options = {
    method: 'GET',
    url: 'https://gibraltar-airport-feed.p.rapidapi.com/next-flight',
    headers: {
      'X-RapidAPI-Key': 'b60a40ebbamsh883889bbffc9653p11c47fjsnc009c264e199',
      'X-RapidAPI-Host': 'gibraltar-airport-feed.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data.collection.items[0].data[0].value);
    
  }).catch(function (error) {
    console.error(error);
  });
}

export default Axios;

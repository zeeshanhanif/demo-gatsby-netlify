import React, { useEffect, useState } from "react"

export default function Home() {

  const [data, setData] = useState("");

  useEffect(()=>{
    (async()=>{
        const reponse = await fetch(`.netlify/functions/hello`);
        const tempData = await reponse.json();
        setData(tempData);
    }
    )();
  },[]);


  return (<div>
    Hello world!
    <div>{data.message}</div>
    </div>)
}

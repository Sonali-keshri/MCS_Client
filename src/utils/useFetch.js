import { useEffect, useState } from "react"

const useFetch = (url) =>{
    const [rawData, setRawData] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async()=>{
        const res = await fetch(url);
        const json = await res.json();
        setData(json)
        setRawData(json)
        setLoading(false)
    }
    return {rawData,data,setData, loading};
}

export default useFetch;
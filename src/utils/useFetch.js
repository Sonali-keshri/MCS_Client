import { useEffect, useState } from "react"

const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async()=>{
        const res = await fetch(url);
        const json = await res.json();
        setData(json)
        setLoading(false)
    }
    return {data, loading};
}

export default useFetch;
import { useEffect, useState } from "react"

const useFetch = (url) =>{
    const [rawData, setRawData] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        fetchData();
    },[])
    
    const fetchData = async()=>{
        try {
            const res = await fetch(url);
            if(!res.ok){
                throw new Error("Coudn't fetch the data")
            }
            const json = await res.json();
            setData(json)
            setRawData(json)
            setLoading(false)
            
        } catch (error) {
            console.log("Error" + error)
        }
    }
    return {rawData,data,setData, loading};
}

export default useFetch;
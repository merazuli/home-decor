import axios from "axios";
import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setErr] = useState(null);

    useEffect(() => {
        setLoading(true)
        axios('../furnitureData.json')
            .then(data => setProducts(data.data))
            .catch(err => setErr(err))
            .finally(() => setLoading(false))
    }, [])
    return { products, loading, error }
}

export default useProducts;
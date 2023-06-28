import React, { createContext, useState,useEffect } from 'react';

// Create a new context
export const ProductContext = createContext();

// Create a provider component
export const MyContextProvider = ({ children }) => {
    // Define your state variables
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([])
    const [homeProducts, setHomeProducts] = useState([])
    const [category, setCategory] = useState([])
    const [loading, setLoading]=useState(true)
    const [count, setCount] = useState(0)
    const [search, setSearch] = useState('')
    const [sideLink, setSideLink] = useState('All')
    const [priceRange, setPriceRange] = useState(250099)
    const [shipping, setShipping] = useState(false)


    // Define your context functions
    const fetchData = async () => {
        try {
            setLoading(true)
            const data = await fetch('https://www.course-api.com/react-store-products')
            const res = await data.json()
            // console.log(res,'response')
            setHomeProducts(res)
            setFilterData(res)
            setData(res)
            setCategory(res)
            const counter = res.length
            setCount(counter)
            setLoading(false)
            // console.log(counter)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        fetchData()
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value)
        const filterBySearch = data.filter((prod) => (prod.name.toLowerCase().includes(search.toLowerCase())))
        setFilterData(filterBySearch)
        setCount(filterBySearch.length)
        // console.log(filterBySearch)
        // console.log(search.length);
    }

    const handleFIlter = (value) => {
        setSideLink(value)

        const filter = category.filter((prod) => (
            prod.category === value || prod.company === value  || value === 'All'
        ));
        setFilterData(filter)
        setCount(filter.length)
        // console.log(filter)
        // console.log(sideLink)
    }

    function handlePriceHandler(value) {
        setPriceRange(value)
        const filterPrice = filterData.filter((price) => (
            price.price < value || price.price === value
        ))
        setFilterData(filterPrice);
        setCount(filterPrice.length)
        // console.log(filterPrice);
    }

    function handleShipping(value){
        setShipping(value)
        const filterShipping = (!shipping ? filterData.filter((ship) => ship.shipping === true ) : filterData);
        setFilterData(filterShipping);
        setCount(filterShipping.length)
        // console.log(filterShipping)
        // console.log(shipping)
    }


   function clearFilter(){
    setSideLink('All')
    setPriceRange(250099)
    setShipping(false)
    setFilterData(category)
    setCount(category.length);
        }
        
    const value = {
        homeProducts,
        fetchData,
        loading,
        filterData,
        count,
        setSearch,
        handleSearch,
        search,
        data,
        sideLink,
        handleFIlter,
        category,
        handlePriceHandler,
        priceRange,
        setPriceRange,
        shipping,
        setShipping,
        handleShipping,
        clearFilter




    }

    // Provide the context values to the children components
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};

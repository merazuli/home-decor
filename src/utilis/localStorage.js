// get dta 
export const loadWishList = () => {
    try {
        const data = localStorage.getItem('wishlist')
        return data ? JSON.parse(data) : []
    }
    catch (err) {
        console.log(err);
        return []
    }
}
// save 
export const updateList = (product) => {
    const wishList = loadWishList();
    try {
        const isDuplicate = wishList.some(p => p.id === product.id)
        if (isDuplicate) return alert('data all ready added')
        const upDateWishList = [...wishList, product]
        localStorage.setItem('wishlist', JSON.stringify(upDateWishList))
    }
    catch (err) {
        console.log(err)
    }
}

// delete 
export const removeFromWishList = id => {
    const wishList = loadWishList();
    try {
        const upDateWishList = wishList.filter(p => p.id !== id)
        localStorage.setItem('wishlist', JSON.stringify(upDateWishList))
    }
    catch (err) {
        console.log(err)
    }
}
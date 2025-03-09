const Wishlist = ({ wishlist, setWishlist }) => {
    const removeFromWishlist = (courseId) => {
        setWishlist(prevWishlist => prevWishlist.filter(course => course.id !== courseId));
    };

    return (
 

export default Wishlist;

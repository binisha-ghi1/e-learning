const Wishlist = ({ wishlist, setWishlist }) => {
    const removeFromWishlist = (courseId) => {
        setWishlist(prevWishlist => prevWishlist.filter(course => course.id !== courseId));
    };

    return (
        <div className="wishlist-page">
            <h1>Your Wishlist</h1>
            {wishlist.length > 0 ? (
                <div className="wishlist-courses">
                    {wishlist.map(course => (
                        <div key={course.id} className="wishlist-course-item">
                            <img src={course.image} alt={course.name} className="course-image" />
                            <div className="course-details">
                                <h2>{course.name}</h2> {/* Fixed incorrect 'item' reference */}
                                <p>{course.instructor}</p>
                                <p>{course.price}</p> {/* Fixed incorrect 'item' reference */}
                                <button onClick={() => removeFromWishlist(course.id)}>
                                    Remove from Wishlist
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Wishlist is empty.</p>
            )}
        </div>
    );
};

export default Wishlist;



const Wishlist = ({ wishlist, setWishlist }) => {
    // const removeFromWishlist = (courseId) => {
    //     setWishlist(wishlist.filter(course => course.id !== courseId));
    // };

    return (
        <div className="wishlist-page">
            <h1>Your Wishlist</h1>
            {wishlist.length > 0 ? (
                <div className="wishlist-courses">
                    {wishlist.map(course => (
                        <div key={course.id} className="wishlist-course-item">
                            <img src={course.image} alt={course.name} className="course-image" />
                            <div className="course-details">
                                <h2>{item.name}</h2>
                                <p>{course.instructor}</p>
                                <p>{item.price}</p>
                                <button onClick={() => removeFromWishlist(course.id)}>Remove from Wishlist</button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Your wishlist is empty.</p>
            )}
        </div>
    );
};

export default Wishlist;



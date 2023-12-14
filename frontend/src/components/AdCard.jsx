export const AdCard = ({ ad }) => {
    console.log(ad);
    return (
        <div className="advert-card">
            <p>Brand: {ad.brand}</p>
            <p>Model: {ad.model}</p>
            <p>Size: {ad.size}</p>
            <p>Price: {ad.price}</p>
        </div>
    );
};


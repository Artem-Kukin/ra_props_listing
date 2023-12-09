
interface Props {
    items: {


        listing_id: number;
        url: string;
        MainImage: { url_570xN: string };
        title: string;
        currency_code: string;
        price: string;
        quantity: number;

    }
}


const Listing = ({ items }: Props) => {

    return (


        <div className="item">
            <div className="item-image">
                <a href={items.url}>
                    <img src={items.MainImage.url_570xN} />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{(items.title.length <= 50) ? (items.title) : (items.title.slice(0, 50) + ' ...')}</p>
                <p className="item-price">
                    {(items.currency_code == "USD") ? (items.currency_code.replace(items.currency_code, "$ " + items.price))
                        : (items.currency_code == "EUR") ? (items.currency_code.replace(items.currency_code, "€ " + items.price))
                            : (items.currency_code = items.price + " GBP")}
                </p>
                {
                    (items.quantity <= 10) ? <p className="item-quantity level-low">{items.quantity}</p>
                        : (items.quantity <= 20) ? <p className="item-quantity level-medium">{items.quantity}</p>
                            : <p className="item-quantity level-high">{items.quantity}</p>
                }
            </div>
        </div>

    );

}

export default Listing;
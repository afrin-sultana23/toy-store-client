import {  useNavigate } from "react-router-dom";


const ShopCard = ({ toy }) => {

    const { name, _id, price, rating, img, category, } = toy;
    const navigate = useNavigate();

    return (
        <div>
            <div className="card w-80  bg-base-100 border  relative">
                <figure className="px-4 py-2"><img src={img} className="max-h-[18rem] min-h-[18rem] object-cover rounded-md " alt="Action Figure" />
                <span className="badge badge-ghost absolute top-3 left-3 p-3">available</span>
                </figure>
                <div className="p-4">
                    <h2 className="card-title">{name}</h2>
                    <p>${price}</p>
                    <p>{category}</p>
                    <p>Rating : &nbsp;{rating}</p>
                    <div className="card-actions justify-end">
                    <button onClick={() => navigate(`/singleToy/${_id}`)} className="text-white btn bg-[#000000]">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;
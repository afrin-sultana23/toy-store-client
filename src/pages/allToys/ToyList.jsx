import { useNavigate } from "react-router-dom";

const ToyList = ({ toys }) => {

    const navigate = useNavigate();

    const {
       _id, 
       name, 
       sellerName, 
       subCategory,  
       quantity,  
       price, 
       img, 
        
      } =  toys;
  
    return (
      <>
        <tr>
          <th>
            <button
              className="btn btn-sm btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </th>
          <td>
            <div className="flex items-center space-x-3">
              
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  {img && <img src={img} alt="img" />}
                </div>
              </div>
              <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm">{sellerName}</div>
              </div>            
            </div>
          </td>
          <td>{subCategory}</td>
          <td>{price}</td>
          <td>{quantity}</td>
          <th>
            {
              <button
                onClick={() => navigate(`/singleToy/${_id}`)} 
                className="btn btn-ghost btn-outline btn-sm"
              >
                View details
              </button>
            }
          </th>
        </tr>
      </>
    );
  };
  
  export default ToyList;
import { Link } from "react-router-dom";


const TotalToys = ({mytoy, handleDelete, handleUpdate}) => {


    const {
        _id, 
        image, 
        sellerName, 
        subCategory,  
        quantity,  
        price, 
        toyName,
        status 
         
       } =  mytoy;
   
     return (
       <>
         <tr>
           <th>
             <button
             onClick={() => handleDelete(_id)}
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
                   {image && <img src={image} alt="img" />}
                 </div>
               </div>
               <div>
               <div className="font-bold">{toyName}</div>
               <div className="text-sm">{sellerName}</div>
               </div>            
             </div>
           </td>
           <td>{subCategory}</td>
           <td>{price}</td>
           <td>{quantity}</td>
           <th>
             {
                status === "confirm" ? (
                    <span className="font-bold
                     text-purple-900">Updated</span>
                  ) : (
                  <Link
                 onClick={() => handleUpdate(_id)}
                 to={`/update/${_id}`} 
                 className="btn btn-accent btn-outline btn-sm"
               >
                 Update
               </Link>)
             }
           </th>
         </tr>
        </>
     );
};

export default TotalToys;
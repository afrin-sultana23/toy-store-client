import {  useEffect, useState } from "react";
import ToyList from "./ToyList";

const AllToys = () => {
  
  const [allToys, setAllToys] = useState([])
  

  useEffect(() => {
    fetch('http://localhost:5000/toys')
    .then(res => res.json())
    .then(data => setAllToys(data))
  },[])



  return (
    <div>
      <h1>Total Toys: {allToys.length}</h1>
      <div className="overflow-x-auto my-10">
        <table className="table">
          {/* head */}
          <thead className="bg-purple-400 text-white">
            <tr>
              <th>
                <label>
                  <input type="checkbox" 
                  className="checkbox" />
                </label>
              </th>            
              <th>Toy Name / Seller</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allToys.map((toys) => (
              <ToyList
                key={toys._id}
                toys={toys}
                
              ></ToyList>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;

import { useEffect, useState } from "react";
import TotalToys from "./TotalToys";
import Swal from "sweetalert2";

const MyToys = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toy', {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(),
        })
        .then(res => res.json())
        .then(data => setData(data))
    })

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/toy/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result.deletedCount > 0) {
                            const remaining = data.filter(toy => toy._id !== id);
                            setData(remaining);
                            Swal.fire(
                                'Your file has been successfully Deleted!!',
                            )
                        }

                    })
            }
        })
    }

    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/toy/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "confirm" }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              const remaining = data.filter((toy) => toy._id !== id);
              const updated = data.find((toy) => toy._id === id);
              updated.status = "confirm";
              const newToy = [updated, ...remaining];
              setData(newToy);
            }
          });
      };

    return (
        <div>
            <h1>total my toy {data.length}</h1>
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
            {data.map((mytoy) => (
              <TotalToys
                key={mytoy._id}
                mytoy={mytoy}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              ></TotalToys>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default MyToys;
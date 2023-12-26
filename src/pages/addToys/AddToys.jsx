import Swal from "sweetalert2";


const AddToys = () => {

    const handleAddToy = event => {
        event.preventDefault()

        const form = event.target
        const toyName = form.toyName.value
        const subCategory = form.subCategory.value
        const price = form.price.value
        const rating = form.rating.value
        const quantity = form.quantity.value
        const details = form.details.value
        const sellerName = form.sellerName.value
        const sellerEmail = form.sellerEmail.value
        const image = form.image.value
        const addToy = { toyName, subCategory, price, rating, quantity, details, sellerName, sellerEmail, image }
        console.log(addToy);
       
        fetch('http://localhost:5000/toy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(addToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                event.target.reset();
                Swal.fire(
                    'Success...!',
                    'Your toys successfully added .'
                    
                );
            }
        })
    }

    return (
        <div>
            <section className="bg-red-300 bg-opacity-30 rounded-lg max-w-screen-xl mx-auto my-12">
                <h3 className="text-center text-amber-800 text-4xl font-bold">Add a Toy</h3>
                <form onSubmit={handleAddToy} className="p-8">
                    {/* Toys Information */}
                    <h4 className="text-xl font-semibold mb-5">Toys Information:</h4>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="form-control">
                        <label className="lavel">
                            <span className="lavel-text">Toy Name</span>
                        </label>    
                        <input type="text" placeholder="Toy Name" name="toyName" className="my-2 p-2 rounded" required />
                        </div>
                        <div className="form-control">
                        <label className="lavel">
                                <span className="lavel-text">Sub Category</span>
                            </label>
                        <input type="text" placeholder="Sub-category" name="subCategory" className="my-2 p-2 rounded" required />
                        </div>
                        <div className="form-control">
                        <label className="lavel">
                                <span className="lavel-text">Price</span>
                            </label>
                        <input type="text" placeholder="$ price" name="price" className="my-2 p-2 rounded" required />
                        </div>
                        <div className="form-control">
                        <label className="lavel">
                                <span className="lavel-text">Rating</span>
                            </label>
                        <input type="text" placeholder="rating" name="rating" className="my-2 p-2 rounded" required />
                        </div>
                        <div className="form-control">
                        <label className="lavel">
                                <span className="lavel-text">Quantity</span>
                            </label>
                        <input type="text" placeholder="available quantity" name="quantity" className="my-2 p-2 rounded" required />
                        </div>
                        <div className="form-control">
                        <label className="lavel">
                                <span className="lavel-text">Photo</span>
                            </label>
                        <input type="text" placeholder="photo URL" name="image" className="my-2 p-2 rounded" required />
                        </div>
                    </div>
                    <div className="form-control mt-5">
                    <label className="lavel"><span className="lavel-text">Description</span>
                    </label>
                    <textarea className="w-full my-2 rounded p-2" name="details" rows={6} required></textarea>
                    </div>

                    {/* Seller Information */}
                    <h4 className="text-xl font-semibold mt-10 mb-5">Seller Information:</h4>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="form-control">
                        <label className="lavel">
                                <span className="lavel-text">Seller Name</span>
                            </label>
                        <input type="text" placeholder="seller name" name="sellerName" className="my-2 p-2 rounded" required />
                        </div>
                        <div className="form-control">
                        <label className="lavel">
                                <span className="lavel-text">Seller email</span>
                            </label>
                        <input type="email" name="sellerEmail" placeholder="seller email"  className="my-2 p-2 rounded"  />
                        </div>
                    </div>

                    <input type="submit" value="AddToy" className='my-3 btn bg-black text-white tracking-widest btn-block' />
                </form>
            </section>
        </div>
    );
};

export default AddToys;
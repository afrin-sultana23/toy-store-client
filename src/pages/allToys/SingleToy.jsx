
import { useLoaderData } from 'react-router-dom';

const SingleToy = () => {

    const loadedToy = useLoaderData();
    const { name, img, sellerName, sellerEmail, price, subCategory, quantity, rating, description } = loadedToy;


    return (
        <div className='w-[80%] my-12 mx-auto'>
            <div className="flex gap-9">
                <figure className='mx-20'><img src={img} className="max-h-[24rem] min-h-[24rem] object-cover rounded-md border " alt="Action Figure" /></figure> 
                <div className="text-xl">
                    <h1 className='text-5xl font-bold font-catamaran'>{name}</h1>
                    <div className="">
                        <p className='text-lg font-mono my-6'>By <span className='font-bubblegum duration-300 cursor-pointer font-bold'><span className='hover:text-secondary duration-300 text-xl'>{sellerName}</span>  &nbsp; <span className='font-catamaran hover:text-primary duration-300 text-lg'>({sellerEmail})</span></span></p>
                        <p className='text-xl font-catamaran my-6'>Sub Category: <span className='font-bubblegum hover:text-secondary duration-300 cursor-pointer font-bold'>{subCategory}</span></p>
                        <p className='text-xl font-catamaran my-6'>Price: <span className='font-bubblegum hover:text-secondary duration-300 cursor-pointer font-bold'>$ {price}</span></p>
                        <p className='text-xl font-catamaran my-6'>Quantity: <span className='font-bubblegum hover:text-secondary duration-300 cursor-pointer font-bold'>{quantity}</span></p>
                        <p className='text-xl font-catamaran my-6'>Ratings: <span className='font-bubblegum hover:text-secondary duration-300 cursor-pointer font-bold'>{rating}</span></p>
                    </div>
                    <h1 className='text-xl font-bold'>Description : </h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;
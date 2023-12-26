
import { useEffect } from 'react';

const Blog = () => {

    useEffect(() => {
        document.title = ' Luna Store | Blog '
    }, [])

    return (
        <div>
            <div className='container mx-auto max-w-5xl my-7'>
                <h1 className='text-5xl font-bold text-amber-200'>Blog</h1>
                    {/* Blog 1  */}
                <div className="bg-amber-200 p-5 rounded-lg">
                    <h1 className="text-2xl font-bold">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                    <div className="mt-3 border-t-2 pt-7">
                        <span className="text-gray-700">
                            <h1 className='font-bold text-blue-950'>Access Token</h1>
                            <p> Access token is a credential that is issued by an authentication server or  a identity provider after a user successfully authenticates their identity. A access token have a expiration limit . If it is expire then the user can not get the data from server side . </p>

                            <h1 className='font-bold mt-2 text-blue-950'>Refresh Token</h1>
                            <p>When we use JWT web token for our project . Then we get two token one is access token and refresh token . If access token is expire then refresh token regenerate  a access token .  </p>
                        </span>
                    </div>
                </div>

                {/* Blog 2  */}

                <div className="bg-amber-200 p-5 rounded-lg">
                    <h1 className="text-2xl font-bold">Compare SQL and NoSQL databases?</h1>
                    <div className="mt-3 border-t-2 pt-7">
                        <span className="text-gray-700">
                            <h1 className='font-bold text-blue-950'>SQL Database</h1>
                            <p>In SQL database  it is use  tabular format  for database . It is suitable for applications with complex and strict data requirement . </p>

                            <h1 className='font-bold mt-2 text-blue-950'>NoSQL Database</h1>
                            <p>NoSQL database is offer us a flexible data model, supporting various models like key-value or document. Like JSON data . It provide flexibility and use different query languages. </p>
                        </span>
                    </div>
                </div>
                {/* Blog 3  */}
                <div className="bg-amber-200 p-5 rounded-lg">
                    <h1 className="text-2xl font-bold">What is express js? What is Nest JS ? </h1>
                    <div className="mt-3 border-t-2 pt-7">
                        <span className="text-gray-700">
                            <h1 className='font-bold text-blue-950'>Express js </h1>
                            <p>Express Js is a Javascript framework that use for server side  with node js . It is minimalist and flexible web application framework for Node.js </p>

                            <h1 className='font-bold mt-2 text-blue-950'>Nest js</h1>
                            <p>Nest.js is a progressive framework for building efficient and scalable server-side applications with Node.js.   It built with type script . Nest.js is a more opinionated and feature-rich framework that follows Angular-inspired patterns. </p>
                        </span>
                    </div>
                </div>
                {/* Blog 4  */}
                <div className="bg-amber-200 p-5 rounded-lg">
                    <h1 className="text-2xl font-bold">What is MongoDB aggregate and how does it work ?  </h1>
                    <div className="mt-3 border-t-2 pt-7">
                        <span className="text-gray-700">
                            <p>
                                In MongoDB , it is a powerfull tools for performing advanced data processing and analysis. It allow us  to execute complex queries and transformations on data store in MongoDB database  collection.
                            </p>
                            <p className='mt-6'>
                                The MongoDB aggregate function processes data in stages, where each stage performs a specific operation on the data. Stages can include filtering, grouping, sorting, and aggregating. The result is a transformed dataset that can be further analyzed or manipulated.
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
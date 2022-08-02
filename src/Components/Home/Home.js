import React from "react";

const Home = () => {
    return (
        <div>
            <div className="md: grid grid-cols-2 gap-8 mt-6 ml-6 mr-6">
                <div>
                    <h2 className="text-4xl font-sans  text-[#ca8a04] italic hover:not-italic">Your best T-Shirt</h2>
                    <p className="text-md text-left mt-2"><small>A T-shirt, or tee, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light, and inexpensive fabric and are easy to clean. The T-shirt evolved from undergarments used in the 19th century and, in the mid-20th century, transitioned from undergarment to general-use casual clothing.</small></p>
                    <button className="text-lg mt-6 border-solid p-0 rounded bg-amber-500 hover:bg-amber-800">Live demo</button>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-psd/friends-representing-inclusion-concept-with-mock-up-t-shirts_23-2148997994.jpg?size=626&ext=jpg&ga=GA1.2.86413933.1642213775"></img>
                </div>
            </div>
            <h1 className="mt-16 text-black text-6xl hover:text-[#b87f05]">Customer Reviews</h1>
            <button className="text-lg mt-6 border-solid p-0 rounded bg-sky-400 hover:bg-amber-500">See All Reviews</button>
        </div>
    );
};


export default Home;
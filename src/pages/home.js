import React from 'react';

function Home() {

    return (
        <div>
            <div className="hero bg-base-100 rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/logo512.png" alt="" className="max-w-m rounded-lg"/>
                    <div>
                        <h1 className="text-5xl font-bold">Welcome to StreamShapers</h1>
                        <h2 className="text-3xl">Shape Your Reality, Stream by Stream</h2>
                        <p className="py-6">Your one-stop hub for mastering real-time graphics and broadcasting with
                            CasparCG, AfterEffects, Lottie, and Three.js.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="bg-base-100 rounded-lg flex p-8 my-4 gap-8">
                <div className="md:basis-1/3 bg-base-200 rounded-lg p-8 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                    <h3 className="text-3xl mb-4 font-bold">What We Offer</h3>
                    <p className="text-xl">StreamSculptors is dedicated to providing comprehensive, easy-to-understand guides and resources for real-time graphics and broadcasting. Whether you're a beginner just getting started or a seasoned professional looking for advanced techniques, we have something for everyone.</p>
                </div>
                <div className="md:basis-1/3 bg-base-200 rounded-lg p-8 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                    <h3 className="text-3xl mb-4 font-bold">Our Focus</h3>
                    <p className="text-xl">We specialize in CasparCG, AfterEffects, Lottie, and Three.js - some of the leading tools in the industry. Our mission is to make learning these technologies as easy and accessible as possible.</p>
                </div>
                <div className="md:basis-1/3 bg-base-200 rounded-lg p-8 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                    <h3 className="text-3xl mb-4 font-bold">Get Started</h3>
                    <p className="text-xl">Ready to dive in? Explore our tutorials, read our documentation, or join our community of like-minded enthusiasts and professionals. Together, we're shaping the future of live graphics.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
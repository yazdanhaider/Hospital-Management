const Home = () => {
    return (
        <section className="flex items-center justify-center h-full min-h-[calc(300px)] bg-white bg-cover bg-center p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
        style={{ backgroundImage: "url('/Images/Home-Bg-Image.jpg')", opacity: 0.9 }}
        >
            <div className="text-center mt-auto mb-3">
                <h1 className="text-3xl font-bold mb-1 text-white">Your Health, Our Commitment: A New Era of Care</h1>
                <p className="text-grey ">Simplifying your journey to better health.</p>
            </div>
        </section>
    );
};

export default Home;


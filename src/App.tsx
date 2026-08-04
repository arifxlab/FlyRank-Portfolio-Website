import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

function App() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <main>
                <section className="flex min-h-screen items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">
                            Arif Khan Portfolio
                        </h1>

                        <p className="mt-4 text-gray-400">
                            Backend AI Engineer building scalable systems.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default App;
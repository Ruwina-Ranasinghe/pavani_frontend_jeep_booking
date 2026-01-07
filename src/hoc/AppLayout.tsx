import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const AppLayout = () => {
    return (
        <div className="min-h-screen bg-[#0d1117] text-white">
            <Navbar />
            <main className="pt-20">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default AppLayout;

import { Outlet } from "react-router-dom";

export default function AppLayout() {
    return (
        <>
            <nav style={{ padding: "16px", background: "#f0f0f0" }}>
                <h2>Jeep Booking System</h2>
            </nav>

            <div style={{ padding: "20px" }}>
                <Outlet />
            </div>
        </>
    );
}

import React from "react";
import {UserCog, BotMessageSquare, HeartHandshake} from "lucide-react";
import './AdminLanding.css';

const AdminLanding = () => {
    const handleIDSLClick = () => {
        // Placehodler: Handle if the IDSL button is clicked
    };

    const handleMOLxClick = () => {
        // Placeholder: Handle if the MOLx button is clicked
    };

    return (
        <div className="admin-landing-container">
            <div className="admin-landing-wrapper">

                {/* HEADER */}
                <div className="admin-header">
                    <div className="header-icon">
                        <UserCog className="icon-admin"/>
                        <h1 className="header-title">Admin Dashboard</h1> 
                    </div>
                    <p className="header-description">
                        Welcome to the administration panel. Select your preferred project to continue.
                    </p>
                </div>

                {/* CARDS */}
                <div className="card-grid">

                    {/* IDSL */}
                    <div className="card">
                        <div className="card-content">
                            <BotMessageSquare className="card-icon"/>
                            <h2 className="card-title">IDSL</h2>
                            <button className="landing-button" onClick={handleIDSLClick}>
                                Access IDSL
                            </button>
                        </div>
                    </div>

                    {/* MOLx */}
                    <div className="card">
                        <div className="card-content">
                            <HeartHandshake  className="card-icon"/>
                            <h2 className="card-title">MOLx</h2>
                            <button className="landing-button" onClick={handleMOLxClick}>
                                Access MOLx
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminLanding;
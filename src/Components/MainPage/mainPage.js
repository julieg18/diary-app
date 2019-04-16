import React from 'react';

import './mainPage.css';

const MainPage = () => {
    return (
        <div className = "main-page">
            <header>Header</header>
                <div className="grid">
                    <div className="left-side">Left Side Nav Bar</div>
                    <div className="middle-page">Middle Page</div>
                    <div className="right-side">Right Side Nav Bar</div>
                </div>
            <footer>Footer</footer>
        </div>
    )
}

export default MainPage;
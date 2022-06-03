import React from "react";

function Header(isDarkMode, onDarkModeClick) {

    function handleDarkModeClick(e){
        isDarkMode.onDarkModeClick(e.target.isDarkMode)
    }

    return (
        <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          Dark Mode
        </button>
      </header>
    )
}

export default Header
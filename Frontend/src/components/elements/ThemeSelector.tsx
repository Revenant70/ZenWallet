import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

import { useState } from "react"


export default function SideNav() {
    const [themeSelector, setThemeSelector] = useState(faMoon);

    const changeThemeSelector = () => {
        document.documentElement.classList.toggle("dark")
        setThemeSelector(themeSelector === faMoon ? faSun : faMoon)
    }

    return (
        <>
            <div className="h-2/12 w-full flex justify-end items-center">
                <button onClick={changeThemeSelector} className="text-dayTheme-text dark:text-nightTheme-text">
                    <FontAwesomeIcon icon={themeSelector} />
                </button>
            </div>
        </>
    )
}
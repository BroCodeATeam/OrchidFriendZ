import React from "react";

const Button = ({ buttonStyle, type, text, onClick }) => {
    const roundedButton =
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full";
    const outlineButton =
        "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py2 px-4 border border-blue-500 hover:border-transparent rounded";
    const disabledButton =
        "bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed";
    const squareButton =
        "bg-purple-900 hover:bg-purple-600 text-white font-semi-bold mt-6 py-2 px-4 rounded-md w-full h-[3.5rem]";
    const navButton =
        "bg-gradient-to-tl from-emerald-800 to-emerald-400 hover:bg-gradient-to-br from-emerald-800 to-emerald-400" +
        " text-white border-2 border-emerald-400 hover:border-2 hover:border-emerald-600 font-semi-bold px-4" +
        " rounded-lg h-[3.5rem] text-xl"

    //   const handleClick = () => console.log("Clicked!");

    return (
        <div className=''>
            <button
                className={
                    buttonStyle === "rounded"
                        ? roundedButton
                        : buttonStyle === "outline"
                            ? outlineButton
                            : buttonStyle === "disabled"
                                ? disabledButton
                                : buttonStyle === "square"
                                    ? squareButton
                                    : buttonStyle === 'navButton'
                                        ? navButton
                                        : null
                }
                // onClick={handleClick}
                type={type}
            >
                {text}
            </button>
        </div>
    );
};

export default Button;

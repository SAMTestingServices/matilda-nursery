import './App.css';
import matildaTitle from './assets/matilda-nursery.png';
import matildaPic from './assets/Matilda.jpg';
import {bgroundStyle, bgroundStyleChild, xylophoneColors} from "./global-constants/constants";
import {TabsAndContent} from "./features/tabs/tabs";

function App() {

    const divStyle = {
        // backgroundImage: `url(${matildaPic})`,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // height: '100vh',  // Adjust the height as needed
        width: '100%',     // Adjust the width as needed
        display: 'flex',
        justifyContent: "space-around",
        backgroundColor:bgroundStyleChild,
        paddingTop:'40px',
        height: '100%'
    };

    // const text = 'Matilda Community Nursery';
    //
    // // Helper function to generate random position offsets
    // const randomOffset = () => ({
    //     x: Math.floor(Math.random() * 200) - 100, // Random x-offset between -100 and 100
    //     y: Math.floor(Math.random() * 200) - 100, // Random y-offset between -100 and 100
    // });

    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${matildaPic})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: "inherit"
                }}
            >
                <div style={{ backgroundColor: bgroundStyle, height: '100%' }}>
                    <div
                        style={{
                            padding: '5px',
                            display: 'flex',
                            fontSize: '50px',
                            fontFamily: '"Comic Sans MS", cursive, sans-serif',
                            fontWeight: 'bold',
                        }}
                    >
                        {/*{text.split('').map((char, index) => {*/}
                        {/*    const offset = randomOffset(); // Generate random offsets*/}

                        {/*    return (*/}
                        {/*        <div*/}
                        {/*            key={index}*/}
                        {/*            style={{*/}
                        {/*                backgroundColor: xylophoneColors[index % xylophoneColors.length],*/}
                        {/*                transform: `translate(${offset.x}px, ${offset.y}px)`, // Initial random position*/}
                        {/*                animation: 'moveToPosition 1s ease forwards',*/}
                        {/*                animationDelay: `${index * 0.1}s`, // Delay each letter*/}
                        {/*            }}*/}
                        {/*        >*/}
                        {/*            {char.trim() ? char : '\u00A0'}*/}
                        {/*        </div>*/}
                        {/*    );*/}
                        {/*})}*/}
                    </div>
                    {/*<h1*/}
                    {/*    style={{*/}
                    {/*        backgroundColor: bgroundStyleChild,*/}
                    {/*        margin: 0,*/}
                    {/*        letterSpacing: '20px',*/}
                    {/*        fontFamily: '"Comic Sans MS", cursive, sans-serif',*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    {text}*/}
                    {/*</h1>*/}
                    <div style={divStyle}>
                        <div style={{ padding: '3%', backgroundColor: bgroundStyleChild }}></div>
                        <TabsAndContent />
                    </div>
                </div>
            </div>
            {/* CSS styles */}
            <style>
                {`
            @keyframes moveToPosition {
                to {
                    transform: translate(0, 0); /* Move to original position */
                }
            }
            `}
            </style>
        </>
    );
}

export default App;

import './App.css';
import {bgroundStyle, bgroundStyleChild, TabsAndContent, xylophoneColors} from "./features/tabs/tabs.tsx";
import matildaTitle from './assets/matilda-nursery.png';
import matildaPic from './assets/Matilda.jpg';

function App() {

    const divStyle = {
        // backgroundImage: `url(${matildaPic})`,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        height: '100vh',  // Adjust the height as needed
        width: '100%',     // Adjust the width as needed
        display: 'flex',
        justifyContent: "space-around",
        backgroundColor:bgroundStyleChild,
        paddingTop:'40px'
    };

    return (<>
            <div style={{ backgroundImage: `url(${matildaPic})`,backgroundSize: 'cover',backgroundPosition: 'center',}}>
                <div style={{backgroundColor:bgroundStyle}}>
                    <div style={{padding: '5px', display: 'flex',fontSize:'50px',fontFamily:'"Comic Sans MS", cursive, sans-serif',fontWeight: 'bold'}}>
                        <div style={{backgroundColor: xylophoneColors[0]}}>M</div>
                        <div style={{backgroundColor: xylophoneColors[1]}}>a</div>
                        <div style={{backgroundColor: xylophoneColors[2]}}>t</div>
                        <div style={{backgroundColor: xylophoneColors[3]}}>i</div>
                        <div style={{backgroundColor: xylophoneColors[4]}}>l</div>
                        <div style={{backgroundColor: xylophoneColors[5]}}>d</div>
                        <div style={{backgroundColor: xylophoneColors[6]}}>a</div>
                        <div></div>
                        <div style={{backgroundColor: xylophoneColors[7]}}>N</div>
                        <div style={{backgroundColor: xylophoneColors[8]}}>u</div>
                        <div style={{backgroundColor: xylophoneColors[9]}}>r</div>
                        <div style={{backgroundColor: xylophoneColors[10]}}>s</div>
                        <div style={{backgroundColor: xylophoneColors[11]}}>e</div>
                        <div style={{backgroundColor: xylophoneColors[12]}}>r</div>
                        <div style={{backgroundColor: xylophoneColors[13]}}>y</div>
                    </div>
                    <h1 style={{backgroundColor:bgroundStyleChild,margin:0,letterSpacing: '20px',fontFamily: '"Comic Sans MS", cursive, sans-serif'}}>Matilda Nursery</h1>
                    {/*<img src={matildaTitle} style={{width: '100%', height:'20%'}}></img>*/}
                    <div style={divStyle}>
                        <div style={{padding: '3%',backgroundColor: bgroundStyleChild}}></div>
                        <TabsAndContent></TabsAndContent>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;

import './App.css';
import {bgroundStyle, bgroundStyleChild, TabsAndContent} from "./features/tabs/tabs.tsx";
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
        backgroundColor:bgroundStyleChild
    };

    return (<>
            <div style={{ backgroundImage: `url(${matildaPic})`,backgroundSize: 'cover',backgroundPosition: 'center',}}>
                <div style={{backgroundColor:bgroundStyle}}>
                    <h1 style={{backgroundColor:bgroundStyleChild,margin:0}}>Matilda Nursery</h1>
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

import './App.css';
import {TabsAndContent} from "./features/tabs/tabs.tsx";
import myImage from './assets/matilda-nursery.png'; // Adjust the path as necessary

function App() {
    return (<>
            <div>
            <div>
        <img src={myImage} style={{width: '100%', height:'20%'}}></img>
                <div style={{display: 'flex', justifyContent: "space-around"}}>
                    <div style={{padding: '3%'}}></div>
        <TabsAndContent></TabsAndContent>
                </div>
            </div>
            </div>
        </>
    );
}

export default App;

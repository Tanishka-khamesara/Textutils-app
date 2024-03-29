import "./Home.css";
import { useState,useRef } from "react";

function Home() {
    const [data, setData] = useState('');
    let [length, setLength] = useState(0);
    let [lengthnew, setLengthnew] = useState(0);

    const dataRef = useRef(null);
    function getData(e) {
        // console.log(e.target.value);
        setData(e.target.value);
        setLength(data.length);
        setLengthnew(data.split(" ").length);
        // console.log(length);
    }
    function getUpperCaseText(e) {
        setData(data.toUpperCase());
        
    }
    const getLowerCase = (() => {
        setData(data.toLowerCase())
    })
    const clearTextArea=((e)=>{
        setData("");
    })
    const copyToClip = (() => {
        if (dataRef.current) {
            dataRef.current.select();
            document.execCommand("copy")
        }
    })
    const removeExtraSpaces = (() => {
        var newStr = data.replace(" ", "");
        setData(newStr);
    })
    return (
        <div class="home">
            <h1>TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h1>
            <div class="text">
                <label htmlFor="text">Enter Your Text Here:-</label>
                <textarea name="text" rows={10} onChange={getData} value={data} ref={dataRef}></textarea>
           </div>
            <div>
                <button onClick={getUpperCaseText}>Convert Uppercase</button>
                <button onClick={getLowerCase}> Convert Lowercase</button>
                <button onClick={clearTextArea}>Clear Text</button>
                <button onClick={copyToClip}>Copy To cLipboard</button>
                <button onClick={removeExtraSpaces}>Remove Extra Space</button>
            </div>
            <div>
                <h3>Summary of your Text</h3>
                <p>Number of words<span>{lengthnew}</span></p>
                <p>Number of characters:-<span>{length}</span></p>
            </div>
            <div>
                <h3>Preview Document</h3>
                <textarea value={data}></textarea>
            </div>
        </div>
    );
}
export default Home;
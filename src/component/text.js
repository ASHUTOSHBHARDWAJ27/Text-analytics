import React,{useState} from 'react'




const Textarea = (props) => {

  const [text, setText] = useState("");
  

              
  const onChange = (event)=>{
    console.log("onChange")
    
    setText(event.target.value)
        }
  const OnUpper = () =>{
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert( "Success","Text converted to upper case")
  }
  const OnLower = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert( "Success","Text convert to lower case")
  }      
  const OnClean = ()=>{
    let newText = '';
    setText(newText)
    props.showAlert( "Success","Text deleted")
  } 
  const OnCopy = ()=>{
    var copyText = document.getElementById("exampleFormControlTextarea1");
    navigator.clipboard.writeText(copyText.value)
    props.showAlert( "Success","Text copied to clip board")
  } 




  return (
   
<>

<div className="mb-3 container my-4" >
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter You text area:</label>
  <textarea className="form-control" id="exampleFormControlTextarea1"  placeholder='Enter Your Text' value={text} onChange={onChange} style={{border:'4px solid #6fafff',
    borderRadius:'10px',
    backgroundColor: props.mode==='light'?'white':'black'
    }} rows="8" ></textarea>
</div>
<button type="button" className="btn btn-primary mx-2 my-2 " onClick={OnUpper}>Convert to Upper case </button>
<button type="button" className="btn btn-primary mx-2 my-2 " onClick={OnLower}>Convert to Lower case </button>
<button type="button" className="btn btn-primary mx-2 my-2 " onClick={OnClean}>Clean</button>
<button type="button" className="btn btn-primary mx-2 my-2 " onClick={OnCopy}>Copy Text</button>


<div className="container">
  <h2>Summary</h2>
  <p>{text.split(" ").length - 1} Words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length } Minutes to read</p>
  <h2>Preview</h2>
  <p>{text}</p>
  
</div>

</>
  )
}

export default Textarea

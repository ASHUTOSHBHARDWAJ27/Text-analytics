import React,{useState} from 'react'




const Textarea = (props) => {

  const [text, setText] = useState("");
  

              
  const onChange = (event)=>{
    
    
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
    copyText.select()
    copyText.focus()
    try { 
      var successful = document.execCommand('copy');
      var msg = successful?'successful':'unsuccessful';
    
     
   }catch(err){
       console.log(err);
  
   }
  
    // window.clipboard.("copyText",'copy this text to clipboard')
    document.getSelection().removeAllRanges()
    props.showAlert( "Success","Text copied to clip board")
 
  } 
  const RemoveExtraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))

    props.showAlert( "Success","Extra Spaces Removed")
  } 
  const CapitalFword = ()=>{
    let newText = text.split(" ");
    for (var index = 0; index < newText.length; index++) {
      newText[index] = newText[index].charAt(0).toUpperCase() + newText[index].slice(1)
      
    }
    setText(newText.join(" "))

    props.showAlert( "Success","Capital first letter of word")
  } 
  const CapitalFsentence = ()=>{
    let newText = text.split(". ");
    for (var index = 0; index < newText.length; index++) {
      newText[index] = newText[index].charAt(0).toUpperCase() + newText[index].slice(1)
      
    }
    setText(newText.join(". "))

    props.showAlert( "Success","Capital first letter of sentence")
  } 



  return (
   
<>

<div className="mb-3 container my-4" >
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter You text area:</label>
  <textarea className="form-control" id="exampleFormControlTextarea1"  placeholder='Enter Your Text' value={text} onChange={onChange} style={{border:'4px solid #6fafff',
    borderRadius:'10px',
    backgroundColor: props.mode==='light'?'white':'black',
    color: props.mode==='light'?'black':'white',
    italic: {fontStyle: 'italic'}
    }} rows="8" ></textarea>
</div>
<button type="button" className="btn btn-primary mx-2 my-2 " onClick={OnUpper}>Convert to Upper case </button>
<button type="button" className="btn btn-primary mx-2 my-2 " onClick={OnLower}>Convert to Lower case </button>
<button type="button" className="btn btn-primary mx-2 my-2 " onClick={OnClean}>Clean</button>
<button type="button" className="btn btn-primary mx-2 my-2 " onClick={OnCopy}>Copy Text</button>

<button type="button" className="btn btn-primary mx-2 my-2 " onClick={RemoveExtraSpace}>Remove Exdtra Spaces</button>

<button type="button" className="btn btn-primary mx-2 my-2 " onClick={CapitalFword}>Capital first letter of word</button>

<button type="button" className="btn btn-primary mx-2 my-2 " onClick={CapitalFsentence}>Capital first letter of sentence</button>



<div className="container">
  <h2>Summary</h2>
  <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length } Words and {text.length} characters</p>
 
  <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } Minutes to read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Noting to show"}</p>
  
</div>

</>
  )
}

export default Textarea

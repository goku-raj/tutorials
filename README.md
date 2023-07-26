##useState hooks

function which render some action performed on relatively two element 
in react.<br>
js, we can use the useState hook to manage state and useEffect for side effects in functional components of
ReactJS.<|im_sep|><br>
Example:<br>
import React,{useState} from'react';<br>

const [name , setName] = useState(initial state);<br>

name-> value which is to be change;<br>
initialState -> initial Value that will set when component load first time or page <br>
setName -> is a useState Function<br>
that takes an initialValue as argument and returns array containing current State Value at index0 & function to <br>
used to update name variable with new values passed as argument.<br>

const setName=()=>{<br>
    return //some conditional & logic code<br>
}
### useEffect

useEffect(()=>{<br>
// code to run after render or update<br>
<br>
<br>
    return (()=>{ <br>
        //piece of code <br>
    })<br>
}, [dependency]);
<br>
the return statement is known as cleanup and avoid extra garbage memory and thus it will run FIRST & then the previously code will execute.
<br>

## Fetch using useEffect

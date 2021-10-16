import React from 'react'

function BoxComponent({value, position, values, setValues}) {
    var name;
    if(value)
     name = "grid-item"
    else 
     name = null;
    const poseHandler = () =>{
        if(value === null){
            return;
        }
        if(values[position] === null && position%4 !== 0 || values[position+3] ===null || values[position-5] === null || values[position-2] === null && position !== 5 && position !== 9 && position !== 13 )
        {
            
            for(var i=0; i<=values.length; i++){
                if(values[i] === null)
                {
                    values[i] = value;
                    values[position-1] = null;
                    setValues(values);
                    return 
                }
            }
        }
    }
 
    return (
        <div className={name} onClick={poseHandler}>
            <h1>{value}</h1>
        </div>
    )
}

export default BoxComponent

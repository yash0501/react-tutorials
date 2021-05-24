import React, {useState, useEffect} from 'react'

function Component1() {
    const [resourceType, setResourceType] = useState(["Posts"]);
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItems(json))
    }, [resourceType])

    return (
        <div>
            <h1>UseEffect Hook Tutorial</h1>
            <button onClick={()=>setResourceType("Posts")}>Posts</button>
            <button onClick={()=>setResourceType("Users")}>Users</button>
            <button onClick={()=>setResourceType("Comments")}>Comments</button>
            <br />
            <span>{resourceType}</span>
            <br />
            {items.map((item)=>{
                return <p>{JSON.stringify(item)}</p>
            })}
        </div>
    )
}

export default Component1

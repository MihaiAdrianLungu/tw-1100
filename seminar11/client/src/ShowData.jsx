import { useEffect, useState } from "react";
import ShowToDo from "./ShowToDo";

function ShowData() {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=> {
        getData();
    }, [])

    return <div>
        <h1>Getting data</h1>
        <ul>
            {data.map(el => (
                // <li key={el.index}>{el.title}</li>
                <ShowToDo key={el.id} data={el} />
            ))}
        </ul>
    </div>
}

export default ShowData;
import Plot from 'react-plotly.js'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Skeleton from '@mui/material/Skeleton'

const Graph = () => {

    const [items, setItems] = useState({});
    const [isLoaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);
    const years = [],
          parts = [],
          payed = [],
          closed = [],
          declined = [],
          opened = [];  
    const fetch = () => {
        axios.get('http://localhost:3000/casco')
            .then(res => {
                setItems(res.data);
                setLoaded(true);
                setError(false);
            },
            (error) => {
                setLoaded(true);
                setError(true)
            })
    }
  
    const filling = () => {
        Object.keys(items).forEach((elements)=>{
            let counter = 0;
            for(const i in items[elements]){
                if (counter === 0) {
                    years.push(items[elements][i])
                }
                else if ( counter === 1){
                    parts.push(items[elements][i])
                }
                else if ( counter === 2){
                    payed.push(items[elements][i])
                }
                else if ( counter === 3){
                    closed.push(items[elements][i])
                }
                else if ( counter === 4){
                    declined.push(items[elements][i])
                }
                else if ( counter === 5){
                    opened.push(items[elements][i])
                }
                counter++;
            }
        })
    }

    useEffect(() => {
        fetch();
    },[isLoaded])

    if(error){
        return (
            <p>{error.message}</p>
        )
    }
    else if (!isLoaded){
        return (
            <>
                <Skeleton style={{width:"40%", height:"400px"}} />
            </>
        )
    }
    else{
        filling();
        return (
            <Plot
            data={[
                {
                    x: years,
                    y: payed,
                    type: 'bar',
                    name: 'Выплачено',
                    marker: {
                        color: "#033540"
                    }
                },
                {
                    
                    x: years,
                    y: opened,
                    type: 'bar',
                    name: 'Открыто',
                    marker: {
                        color: "#015366"
                    }
                },
                {
                    
                    x: years,
                    y: declined,
                    type: 'bar',
                    name: 'Отказано',
                    marker: {
                        color: "#63898c"
                    }
                },
                {
                        
                    x: years,
                    y: parts,
                    type: 'bar',
                    name: 'Частично выплачено',
                    marker: {
                        color: "#a7d1d2"
                    }
                },
                {
                    
                    x: years,
                    y: closed,
                    type: 'bar',
                    name: 'Закрыто',
                    marker: {
                        color: "#e0f4f5"
                    }
                }
                ]}
                layout={ {width: "40%", height: 400, title: 'График',barmode: 'stack', font:{family:"'Rubik', sans-serif;"}} }
            />
        )
    }

}

export default Graph
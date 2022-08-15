import Graph from "../graph/Graph"
import Selector from "../selector/Selector"
import './GraphList.css'
const GraphList = () => {
    const categories = [
        'Каско',
        'Осаго'
    ]
    return(
        <>
            <Selector categories= {categories}/>
            <div className="Graph_Wrapper">
                <Graph/>
                <Graph/>
                <Graph/>
                <Graph/>
            </div>
        </>
    )
}

export default GraphList
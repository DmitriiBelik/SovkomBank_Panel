import Graph from "../graph/Graph"
import Selector from "../selector/Selector"
import './GraphList.css'
const GraphList = () => {
    return(
        <>
            <Selector/>
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
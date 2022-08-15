import Graph from "../graph/Graph"
import Selector from "../selector/Selector"
import { Grid, Container } from "@mui/material"

const GraphList = () => {
    const categories = [
        'Каско',
        'Осаго'
    ]
    return(
        <Container maxWidth="xl">  
            <Selector categories= {categories}/>
            <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                    <Graph graphLine ='casco' graphNumber ='1'/>
                </Grid>
                <Grid item xs={6} md={6}>
                    <Graph  graphLine ='casco' graphNumber ='2'/>
                </Grid>
                <Grid item xs={6} md={6}>
                <Graph  graphLine ='casco' graphNumber ='3'/>
                </Grid>
                <Grid item xs={6} md={6}>
                <Graph  graphLine ='casco' graphNumber ='4'/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default GraphList
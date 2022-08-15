import Graph from "../graph/Graph"
import Selector from "../selector/Selector"
import { Grid, Container } from "@mui/material"

const GraphList = () => {
    const categories = [
        'Casco',
        'Osago'
    ]
    return(
        <Container maxWidth="xl">  
            <Selector categories= {categories}/>
            <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                    <Graph graphNumber ='1'/>
                </Grid>
                <Grid item xs={6} md={6}>
                    <Graph graphNumber ='2'/>
                </Grid>
                <Grid item xs={6} md={6}>
                <Graph graphNumber ='3'/>
                </Grid>
                <Grid item xs={6} md={6}>
                <Graph graphNumber ='4'/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default GraphList
import {React, useState} from 'react';
import Sidebar from '../sidebar/Sidebar';

import {Grid, Box } from "@mui/material"

export default function Dashboard(){
    return(
        <>
       
       <Grid>
        <Sidebar/>
        <Box>
            hello
        </Box>
       </Grid>
        </>
    )
}
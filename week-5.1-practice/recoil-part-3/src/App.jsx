import React, { useState } from "react";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import {useRecoilValue,useSetRecoilState,RecoilRoot,atom} from "recoil";

function App() {
  const count = useRecoilValue(countState);
  return (
      <>
        <Grid
          container
          sx={{ margin: "50px", justifyContent: "center", marginTop: "160px" }}
        >
          <Grid item>
            <Card sx={{ padding: "40px", maxWidth: "500px" }}>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h4">{count}</Typography>
              </Box>
              <SetupButton />
            </Card>
          </Grid>
        </Grid>
      </>
  );
}

function SetupButton() {

  const setCount = useSetRecoilState(countState); 
  return (
    <>
      <Button
        variant="outlined"
        sx={{ margin: "10px" }}
        onClick={() => setCount(count=>count-1)}
      >
        Decrease
      </Button>

      <Button
        variant="outlined"
        sx={{ margin: "10px" }}
        onClick={() => setCount(count=>count + 1)}
      >
        Increase
      </Button>
    </>
  );
}
// How to add the state in recoil
// const textState = atom({
//   key:'textState', //unique id
//   default:''.
// })

const countState = atom({
  key:'countState',
  default:0,
});

export default App;

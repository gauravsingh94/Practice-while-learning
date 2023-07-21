import React, { useState } from "react";
import { Box, Button, Card, Grid, Typography } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

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

            <SetupButton setCount={setCount} count={count} />
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

function SetupButton(props) {
  return (
    <>
      <Button
        variant="outlined"
        sx={{ margin: "10px" }}
        onClick={() => props.setCount(props.count - 1)}
      >
        Decrease
      </Button>

      <Button
        variant="outlined"
        sx={{ margin: "10px" }}
        onClick={() => props.setCount(props.count + 1)}
      >
        Increase
      </Button>
    </>
  );
}

export default App;

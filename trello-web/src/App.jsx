import "react";
import "./App.css";
import { Box, Container } from "@mui/material";
import ThemeSystem from "./components/ThemeSystem";

// import ToggleBtn from "./components/ToggleBtn";

function App() {
    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{ height: "100vh", backgroundColor: "primary.main" }}
        >
            <Box sx={{ 
                display: "flex", 
                alignItems:'center',
                backgroundColor: 'primary.light',
                width: '100%',
                height: ({trelloCustoms}) => {
                    return trelloCustoms.appBarHeight
                },
            }}>
                <ThemeSystem />
            </Box>
            <Box sx={{
                display: "flex", 
                alignItems:'center',
                backgroundColor: 'primary.dark',
                width: '100%',
                height: ({trelloCustoms}) => {
                    return trelloCustoms.boardBarHeight
                }
            }}>
                Board Bar
            </Box>
            <Box sx={{
                display: "flex", 
                alignItems:'center',
                backgroundColor: 'primary.main',
                width: '100%',
                height: ({trelloCustoms}) => {
                    return `calc(100vh - ${trelloCustoms.appBarHeight} - ${trelloCustoms.boardBarHeight})` 
                },
            }}>
                Board Content
            </Box>
        </Container>
    );
}

export default App;

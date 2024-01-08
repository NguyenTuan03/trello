import { Box } from "@mui/material";
import ModeSelect from "../ModeSelect";

export default function AppBar() {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "primary.light",
                width: "100%",
                height: ({ trelloCustoms }) => {
                    return trelloCustoms.appBarHeight;
                },
            }}
        >
            <ModeSelect/>
        </Box>
    );
}

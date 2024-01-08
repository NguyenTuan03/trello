import { Box } from "@mui/material";

export default function BoardBar() {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "primary.dark",
                width: "100%",
                height: ({ trelloCustoms }) => {
                    return trelloCustoms.boardBarHeight;
                },
            }}
        >
            Board Bar
        </Box>
    );
}

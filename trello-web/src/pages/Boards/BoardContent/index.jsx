import { Box } from "@mui/material";

export default function BoardContent() {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "primary.main",
                width: "100%",
                height: ({ trelloCustoms }) => {
                    return `calc(100vh - ${trelloCustoms.appBarHeight} - ${trelloCustoms.boardBarHeight})`;
                },
            }}
        >
            Board Content
        </Box>
    );
}

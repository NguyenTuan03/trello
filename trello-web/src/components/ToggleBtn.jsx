import Button from "@mui/material/Button";
import { useColorScheme, useMediaQuery } from "@mui/material";

export default function ToggleBtn() {
    const { mode, setMode } = useColorScheme();
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    console.log(prefersDarkMode);
    return (
        <>
            <Button
                variant="text" color="primary"
                onClick={() => {
                    setMode(mode === "light" ? "dark" : "light");
                }}
            >
                {mode === "light" ? "Turn dark" : "Turn light"}
            </Button>
        </>
    );
}

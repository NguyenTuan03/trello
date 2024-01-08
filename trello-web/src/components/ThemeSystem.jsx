import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Stack, useColorScheme } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import "react-bootstrap";
export default function ThemeSystem() {
    const { mode, setMode } = useColorScheme();

    const handleChange = (event) => {
        setMode(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
            <Select
                labelId="label-select-dark-light-mode"
                id="select-dark-light-mode"
                value={mode}
                label="Mode"
                onChange={handleChange}
            >
                <MenuItem value={"light"}>
                    <Stack direction={"row"} spacing={1}>
                        <LightModeIcon fontSize="medium" />
                        <span>light</span>
                    </Stack>
                </MenuItem>
                <MenuItem value={"dark"}>
                    <Stack direction={"row"} spacing={1}>
                        <DarkModeIcon fontSize="medium" />
                        <span>dark</span>
                    </Stack>
                </MenuItem>
                <MenuItem value={"system"}>
                    <Stack direction={"row"} spacing={1}>
                        <Brightness5Icon fontSize="medium" />
                        <span>system</span>
                    </Stack>
                </MenuItem>
            </Select>
        </FormControl>
    );
}

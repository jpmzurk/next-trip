import { styled } from "@mui/material/styles";
import { Select } from "@mui/material";

const StyledSelect = styled(Select)(({ theme }) => ({
  boxShawdow: "0 0 0 0.2rem rgb(0 151 208 / 25%)",
  borderRadius: 0,
}));

export { StyledSelect };

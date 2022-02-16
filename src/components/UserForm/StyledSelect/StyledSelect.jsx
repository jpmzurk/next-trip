import { styled } from "@mui/material/styles";
import { Select } from '@mui/material'

const StyledSelect = styled(Select)(({ theme }) => ({
    minWidth: 220,
    margin: "0 auto",
  }));

export default StyledSelect;
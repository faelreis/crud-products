import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Dashboard() {
    return (
        <>
            <h1>Dashboard</h1>
            <p>Em progresso...</p>
            <Button
            component={RouterLink}
            to="/users"
            variant="contained"
            startIcon={<PersonAddAltIcon />}
          >
            Lista de usuários
          </Button>
        </>
    )
  }
import { useState } from "react";
import { ProSidebarProvider, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useNavigate} from "react-router-dom";
import { tokens } from "../../theme";
import SchoolIcon from '@mui/icons-material/School';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Button from "@mui/material/Button";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// const Item = ({ title, to, icon, selected, setSelected }) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
 
//   return (
//     <MenuItem
//       active={selected === title}
//       style={{
//         color: colors.grey[100],
//       }}
//       onClick={() => setSelected(title)}
//       icon={icon}
//     >
//       <Typography>{title}</Typography>
//       <Link to={to} />
//     </MenuItem>
//   );
// };

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  // const [selected, setSelected] = useState("Dashboard");
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.blueAccent[800]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "blueAccent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 5px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebarProvider collapsed={isCollapsed}>
        <Menu iconShape="square">
         
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 10px 0",
              color: colors.greenAccent[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="start"
                ml="30px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                <SchoolIcon/>
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
           <hr/>
            <div className="btn-sidebar">
            <Button color="inherit" onClick={() => navigate("/")}>
            <Typography>ADMIN</Typography>
      
            </Button>
            
            <Typography
              variant="h6"
              color={colors.grey[700]}
              textAlign='center'
            >
            <hr/>
            </Typography> 
            
            <Accordion className="dashboard-icon">
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" >
           Dashboard
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Button onClick={() => navigate("/teachers")} className="d-btn">Teachers</Button>
        <Button onClick={() => navigate("/students")} className="d-btn">Students</Button>  
        </AccordionDetails>
      </Accordion>
            
            <Typography
              variant="h6"
              color={colors.grey[700]}
              textAlign='start'
            >
            <hr/>
            </Typography> 

            <Button sx={{textAlign:"start"}} onClick={() => navigate("/noticeboard")}>Notice Board</Button>
            <Button sx={{textAlign:"start"}} onClick={() => navigate("/departments")}>Departments</Button>
            <Button sx={{textAlign:"start"}} onClick={() => navigate("/courses")}>Courses</Button>
            
            <Typography
              variant="h6"
              color={colors.grey[700]}
              textAlign='center'
            >
            <hr/>
            </Typography> 
            
            <Button onClick={() => navigate("/faq")}>FAQ</Button>
            </div>
          </Box>
        </Menu>
      </ProSidebarProvider>
    </Box>
  );
};

export default Sidebar;

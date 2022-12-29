import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import Team from "../team"
import { useNavigate} from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';



const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  return (
    <Box m="20px">
     
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to dashboard"/>

        <Box>
          {/* <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Generate Reports
          </Button> */}
          <Button sx={{
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              margin:"10px",
              height:"45px",
              backgroundColor:"orange",
              color:"white",
            }}
           onClick={() => navigate("/studentcrud")}>
            <AddIcon/>Add Student Profile
            </Button>
            <Button sx={{
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              margin:"10px",
              height:"45px",
              backgroundColor:"green",
              color:"white",
            }}
           onClick={() => navigate("/teachercrud")}>
             <AddIcon/>Add teacher profile
            </Button> 
        </Box>
      </Box>

    
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
      
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          className="teacher-container"
          borderRadius="10px"
        >
          <StatBox
            title="Students"
            subtitle="3500"
            progress="0.9"
            increase="+100%" 
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          className="teacher-container-3"
          borderRadius="10px"
        >
          <StatBox
            title="Teachers"
            subtitle="217"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          className="teacher-container"
          borderRadius="10px"
        >
          <StatBox
            title="Parents"
            subtitle="1458"
            progress="0.5"
            increase="+50%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          className="teacher-container-3"
          borderRadius="10px" 
        >
          <StatBox
            title="Earnings"
            subtitle="$18000"
            progress="0.2"
            increase="+20%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.greenAccent[800]}
          borderRadius="10px"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                className="title"
              >
                Expenses Overview
              </Typography>
              <Typography
                variant="h2"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $40,000
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.primary[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
          
        </Box> 
      
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          borderRadius="10px"
        >
          <Typography variant="h5" fontWeight="600" className="title">
            Revenue Sources
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-evenly"
            mt="25px"
            mb="10px"
          >
            <ProgressCircle size="75" /> 
            <Typography  variant="h2"
            fontWeight="600">+75%</Typography>
              
          </Box>
          
          <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vero autem officiis qui, velit labore, ducimus at reprehenderit deleniti eum amet ipsum tenetur sit rem provident, aut consequuntur! Nostrum, perspiciatis.</Typography>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600" className="title">
            Students
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-evenly"
            mt="25px"
            mb="10px"
          >
            <ProgressCircle size="150" /> 
            
          </Box>
          <Button sx={{backgroundColor:"#0f57f1",color:"white",m:'10px'}}>Female Students</Button>
          <Button sx={{backgroundColor:"#0FF19F" ,color:"white",m:"20px"}}>Male Students</Button>      
        </Box>
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
            className="title"
          >
           Activities
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600" className="title">
           Notice Board
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="start"
            mt="25px"
          >
            <Button className="noticebtn" sx={{m:'10px'}}>27 DEC 2022</Button>
             <Typography>Lorem ipsum dolor sit amet consectetur adipisicin aut consequuntur! Nostrum, perspiciatis.</Typography>
             <Button className="noticebtn" sx={{m:'10px'}}>28 DEC 2022</Button>
             <Typography>Lorem ipsum dolor sit amet consectetur adipisicin aut consequuntur! Nostrum, perspiciatis.</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600" className="title">
            Development Approach
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
             <Typography  sx={{textAlign:"justify"}}>
               SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.
               <br/><br/>Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.
            </Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600" className="title">
            Management Guidelines
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="justify"
            mt="25px"
          >
             <Typography>
               SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.
              Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.
            </Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 12"
          gridRow="span 4"
          backgroundColor={colors.blueAccent[800]}
        >
          <Team/>         
        </Box> 
      </Box>
    </Box>
  );
};

export default Dashboard;

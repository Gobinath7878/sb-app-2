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
import { useNavigate} from "react-router-dom";
import Form from "../form";

const Teachers = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();


  return (
    <Box m="20px">
     
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="TEACHERS DASHBOARD" subtitle="Welcome to teachers dashboard" />

        <Box>
          <Button
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
          </Button>
          <Button sx={{
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              margin:"20px",
              height:"45px",
              backgroundColor:"orange",
              color:"white",
            }}
           onClick={() => navigate("/studentdetails")}>
             Student Details
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
          className="teacher-container-2"
          borderRadius="10px"
        >
          <StatBox
            title="Total Exams"
            subtitle="1405"
            progress="0.60"
            increase="+61%"
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
            title="Graduate studies"
            subtitle="14581"
            progress="0.4"
            increase="+30%"
            
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
          className="teacher-container-2"
          borderRadius="10px"
        >
          <StatBox
            title="Earnings"
            subtitle="$8000"
            progress="0.56"
            increase="+70%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.greenAccent[800]}
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
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
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
        >
          <Typography variant="h5" fontWeight="600" className="title">
            Teachers Details
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            mt="25px"
            mb="10px"
          >
              <Typography sx={{"textAlign":"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vero autem officiis qui, velit labore, ducimus at reprehenderit deleniti eum amet ipsum tenetur sit rem provident, aut consequuntur! Nostrum, perspiciatis.
              </Typography>   
          </Box>
          <Button className="t-btn">Tamil</Button>
          <Button className="t-btn">English</Button>
          <Button className="t-btn">Maths</Button>
          <Button className="t-btn">Science</Button>
          <Button className="t-btn">Commerce</Button>
          <Button className="t-btn">Physical Education</Button>
          <Button className="t-btn">History</Button>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600" className="title">
           Notifications
          </Typography>
          <Box
            mt="25px"
            mb="15px"

          >
             <Button className="n-btn">12 Dec</Button>
             <Typography>Coming Monday <mark>Tamil</mark> Slip test.<br/>[10th & 12th Std]</Typography>
             <hr/>
             <Button className="n-btn">14 Dec</Button>
             <Typography>Coming Wednesday <mark>Botany</mark> modal test.<br/>[12th-Bio ]</Typography>
          </Box>
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
        {/* crud */}
        <Box
          gridColumn="span 12"
          gridRow="span 4"
          backgroundColor={colors.blueAccent[800]}
          height="180vh"
          padding="50px"
        >
          <Form/>         
        </Box> 

      </Box>
    </Box>
  );
};

export default Teachers;

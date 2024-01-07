import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box>
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h3">
                        An Important Question 1
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Optio illo sit voluptate ab ipsum 
                        perferendis asperiores tempore, quis recusandae 
                        voluptates quia consequuntur quasi vero dolorum beatae 
                        ratione qui atque! Natus.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h3">
                        An Important Question 2
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Optio illo sit voluptate ab ipsum 
                        perferendis asperiores tempore, quis recusandae 
                        voluptates quia consequuntur quasi vero dolorum beatae 
                        ratione qui atque! Natus.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h3">
                        An Important Question 3
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Optio illo sit voluptate ab ipsum 
                        perferendis asperiores tempore, quis recusandae 
                        voluptates quia consequuntur quasi vero dolorum beatae 
                        ratione qui atque! Natus.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h3">
                        An Important Question 4
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Optio illo sit voluptate ab ipsum 
                        perferendis asperiores tempore, quis recusandae 
                        voluptates quia consequuntur quasi vero dolorum beatae 
                        ratione qui atque! Natus.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h3">
                        An Important Question 5
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Optio illo sit voluptate ab ipsum 
                        perferendis asperiores tempore, quis recusandae 
                        voluptates quia consequuntur quasi vero dolorum beatae 
                        ratione qui atque! Natus.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default FAQ;
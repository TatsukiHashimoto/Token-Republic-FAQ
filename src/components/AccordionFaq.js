import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexShrink: 0,
        flexBasis: '25%',
        textAlign: 'left'
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(13),
        fontFamily: 'Raleway',
        color: theme.palette.text.secondary,
    },
    p: {
        fontSize: '12px',
        fontFamily: 'Raleway',
        whiteSpace: 'pre-line',
        textAlign: 'left',
    },
    details: {
        backgroundColor: 'rgba(0,0,0,0.05)',
    },
    summary: {
        backgroundColor: 'rgba(0,0,0,0.03)',
    }
}));


export default function AccordionFaq({Topic, Question, Answer}) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel'} onChange={handleChange('panel')}>
                <AccordionSummary
                    className={classes.summary} 
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel-content"
                    id="panel-header"
                >
                    <Typography  className={classes.heading}>{Topic}</Typography>
                    <Typography className={classes.secondaryHeading}>{Question}</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                    <Typography display="inline" className={classes.p}>
                        {Answer}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
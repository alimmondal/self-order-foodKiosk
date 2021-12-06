import React from 'react';
import Logo from '../components/Logo';
import { Fade, Box, Typography } from "@material-ui/core";
import { useStyles } from '../styles';

export default function ChooseScreen() {
    const styles = useStyles();
    return (
        <Fade in={true}>
            <Box className={[styles.root, styles.navy]}>
                <Box className={[styles.main, styles.center]}>
                    <Logo large>
                    <Typography 
                    variant="h3"
                    component="h3"
                    className={[styles.center]}
                    >
                        Where will you be eating today?
                    </Typography>
                    </Logo>
                </Box>
            </Box>
        </Fade>
    )
}

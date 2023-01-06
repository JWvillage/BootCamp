import React, {useState} from 'react';
import {
    Container,
    Grid, IconButton,
    Paper,
} from "@mui/material";
import {
    Menu
} from '@mui/icons-material';
import {useNavigate} from 'react-router-dom';
import {MenuList} from "./index";

const Header = () => {

        const navigate = useNavigate()

        const [value, setValue] = useState(0)

        return (
            <div className='topView' >
                <Container className='top'>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        style={{height: '50px'}}
                    >
                        <Grid item xs={2}>
                            <Grid style={{position: 'absolute', top: '10px'}}>
                                {/*<img className='mainLogo' src="static/img/main_logo.png" alt="" width="50px" onClick={(e) => {*/}
                                {/*    e.preventDefault();*/}
                                {/*    navigate('/')*/}
                                {/*}}/>*/}
                                <h3 style={{cursor: 'pointer'}}
                                    onClick={(e) => {
                                    e.preventDefault();
                                    navigate('/home')
                                }}>Home</h3>
                            </Grid>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="center"
                            >
                                <div style={{position: 'relative'}}>
                                    <div style={{display: 'flex', justifyContent: 'end'}}>
                                        <IconButton
                                            size="large"
                                            edge="start"
                                            color="inherit"
                                            aria-label="menu"
                                            sx={{ mr: 2 }}
                                            onClick={() => {
                                                if (value !== 5) {
                                                    setValue(5)
                                                } else {
                                                    setValue(0)
                                                }
                                            }}
                                        >
                                            <Menu />
                                        </IconButton>
                                    </div>
                                    <div style={{display: "flex", justifyContent: "flex-end", marginRight: '20px'}}>
                                        <MenuPanel value={value} index={5}>Menu</MenuPanel>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );

        function MenuPanel (props: {children: any, value: number, index: number}) {
            const { children, value, index, ...other } = props;

            return (
                <Paper
                    className='tab_panel'
                    role="tabpanel"
                    id={`simple-tabpanel-${index}`}
                    hidden={value !== index}
                    aria-labelledby={`simple-tab-${index}`}
                    elevation={2}
                    {...other}
                    style={{width: '200px'}}
                >
                    <MenuList />
                </Paper>
            );
        }
};

export default Header;
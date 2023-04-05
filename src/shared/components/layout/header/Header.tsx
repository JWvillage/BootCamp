import React, {useEffect, useState} from 'react';
import {
    Container,
    Grid, IconButton,
    Paper,
} from "@mui/material";
import {
    Menu
} from '@mui/icons-material';
import {useNavigate} from 'react-router-dom';
import {MenuList} from "../menu";
import {MainMenu} from "../../../../store";

const Header = () => {

        const navigate = useNavigate()

        const [value, setValue] = useState(0)

        const [menu, setMenu] = useState([new MainMenu()]);

        useEffect(() => { 

            const url = '/api/common/mainMenu';
            fetch(url, {
                method : 'GET',
            })
                .then((response) => {
                    return response.json();
                })
                .then((result) => {
                    if (localStorage.getItem('loginId') !== null) {
                        for(let i = 0; i < result[0].subMenuList.length; i++) {
                            if (
                                result[0].subMenuList[i].menuName === 'SignIn' ||
                                result[0].subMenuList[i].menuName === 'SignUp'
                            ) {
                                result[0].subMenuList[i].showIndicator = false;
                            }
                        }
                    } else {
                        for(let j = 0; j < result[0].subMenuList.length; j++) {
                            if (result[0].subMenuList[j].menuName === 'SignOut') {
                                result[0].subMenuList[j].showIndicator = false;
                            }
                        }
                    }
                    setMenu(result);
                    localStorage.setItem("menuList", JSON.stringify(result));
                })

        }, [])

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
                                    navigate('/')
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
                                        <MenuPanel value={value} index={5} menu={menu}>Menu</MenuPanel>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );

        function MenuPanel (props: {children: any, value: number, index: number, menu: MainMenu[]}) {
          const { children, value, index, menu, ...other } = props;

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
                  <MenuList menu={menu}/>
              </Paper>
          );
        }
};

export default Header;
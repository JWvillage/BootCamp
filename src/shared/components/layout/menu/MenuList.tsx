import React, {
  // useEffect,
  useState} from 'react';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore
} from "@mui/icons-material"
import {useNavigate} from "react-router-dom";
import '../../../../css/common.css'
import {MainMenu} from "../../../../store";

const MenuList = (props: {menu: MainMenu[]}) => {

  const navigate = useNavigate()

  const [open, setOpen] = useState(false);
  const [keyVal, setKeyVal] = useState("")

  const handleClick = (value: string) => {
    setKeyVal(value)
    if (keyVal === '') {
      setOpen(!open);
    } else if (keyVal === value || !open) {
      setOpen(!open);
    }
  };

  // console.log(props.menu);

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="my-menu"
      key='menu_list'
      subheader={
        <ListSubheader
          component="div"
          id="my-menu"
          key='menu_list_subheader'
        >
          <ListItemText primary="My Menu" className='menu_root'/>
        </ListSubheader>
      }
    >
      {
        props.menu.map((one, i) => {
          return (
              <>
                <ListItemButton className='menuList' key={one.menuCode + i + 'btn'} onClick={() => {
                  handleClick(one.menuCode)
                }}>
                  <ListItemText key={one.menuCode + i + 'text'} primary={one.menuName} />
                  {open && keyVal === one.menuCode ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                {one.subMenuList !== null &&
                    one.subMenuList.map((two, j) => {
                      return (
                          <Collapse key={two.menuCode + j} in={open && two.parentMenuCode === keyVal} timeout="auto"
                                    unmountOnExit>
                            {two.showIndicator &&
                              <List className='menuList' key={two.menuCode + j + 'List'} component="div" disablePadding>
                                <ListItemButton key={two.menuCode + j + 'btn'} sx={{pl: 4}} onClick={(e) => {
                                  e.preventDefault();
                                  navigate(two.screenPathText);
                                }}>
                                  <ListItemText key={two.menuCode + j + 'text'} primary={two.menuName}/>
                                </ListItemButton>
                              </List>
                            }
                          </Collapse>
                      )
                    })}
              </>
          )
        })
      }
    </List>
  );
};

export default MenuList;
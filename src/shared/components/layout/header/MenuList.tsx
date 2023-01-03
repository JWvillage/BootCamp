import React, {useState} from 'react';
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

const MenuList = () => {

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

  // const menu = new Menu()
  // console.log(menu.menuList)

  // test 더미
  const menu = [
    {
      menuId: "ds98fh3o4hf9823o0001",
      menuName: "Sign",
      menuLevelValue : "1",
      menuCode: "A10000",
      showIndicator: true,
      fullMenuName: "Sign",
      parentMenuCode: "ROOT",
      parentMenuName: "MyMenu",
      screenPathText: "/Sign",
      subMenuList: [
        {
          menuId: "ds98fh3o4hf9823o0002",
          menuName: "SignIn",
          menuLevelValue : "2",
          menuCode: "A10100",
          showIndicator: true,
          fullMenuName: "Sign > SignIn",
          parentMenuCode: "A10000",
          parentMenuName: "Sign",
          screenPathText: "/SignIn",
          subMenuList: []
        },
        {
          menuId: "ds98fh3o4hf9823o0003",
          menuName: "SignUp",
          menuLevelValue : "2",
          menuCode: "A10200",
          showIndicator: true,
          fullMenuName: "Sign > SignUp",
          parentMenuCode: "A10000",
          parentMenuName: "Sign",
          screenPathText: "/SignUp",
          subMenuList: []
        },
        {
          menuId: "ds98fh3o4hf9823o0004",
          menuName: "SignOut",
          menuLevelValue : "2",
          menuCode: "A10300",
          showIndicator: false,
          fullMenuName: "Sign > SignOut",
          parentMenuCode: "A10000",
          parentMenuName: "Sign",
          screenPathText: "/SignOut",
          subMenuList: []
        },
      ]
    },
    {
      menuId: "ds98fh3o4hf9823o0005",
      menuName: "Board",
      menuLevelValue : "1",
      menuCode: "A20000",
      showIndicator: true,
      fullMenuName: "Board",
      parentMenuCode: "ROOT",
      parentMenuName: "MyMenu",
      screenPathText: "/Board",
      subMenuList: [
        {
          menuId: "ds98fh3o4hf9823o0006",
          menuName: "Normal",
          menuLevelValue : "2",
          menuCode: "A20100",
          showIndicator: true,
          fullMenuName: "Board > Normal",
          parentMenuCode: "A20000",
          parentMenuName: "Board",
          screenPathText: "/Board/Normal",
          subMenuList: []
        },
        {
          menuId: "ds98fh3o4hf9823o0007",
          menuName: "Notice",
          menuLevelValue : "2",
          menuCode: "A20200",
          showIndicator: true,
          fullMenuName: "Board > Notice",
          parentMenuCode: "A20000",
          parentMenuName: "Board",
          screenPathText: "/Board/Notice",
          subMenuList: []
        },
        {
          menuId: "ds98fh3o4hf9823o0008",
          menuName: "FAQ",
          menuLevelValue : "2",
          menuCode: "A20300",
          showIndicator: true,
          fullMenuName: "Board > FAQ",
          parentMenuCode: "A20000",
          parentMenuName: "Board > FAQ",
          screenPathText: "/Board/FAQ",
          subMenuList: []
        },
        {
          menuId: "ds98fh3o4hf9823o009",
          menuName: "Q&A",
          menuLevelValue : "2",
          menuCode: "A20400",
          showIndicator: true,
          fullMenuName: "Board > Q&A ",
          parentMenuCode: "A20000",
          parentMenuName: "Board > Q&A",
          screenPathText: "/Board/Q&A",
          subMenuList: []
        },
      ]
    },
  ]

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
        menu.map((one, i) => {
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
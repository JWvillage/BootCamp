class MainMenu {
  menuId : string;
  menuName : string;
  menuLevelValue : string;
  menuCode : string;
  showIndicator : boolean;
  fullMenuName : string;
  parentMenuCode : string;
  parentMenuName : string;
  screenPathText : string;
  subMenuList : [{
    menuId : string,
    menuName : string,
    menuLevelValue : string,
    menuCode : string,
    showIndicator : boolean,
    fullMenuName : string,
    parentMenuCode : string,
    parentMenuName : string,
    screenPathText : string,
    subMenuList : []
  }]

  constructor() {
    this.menuId = '';
    this.menuName = '';
    this.menuLevelValue = '';
    this.menuCode = '';
    this.showIndicator = true;
    this.fullMenuName = '';
    this.parentMenuCode = '';
    this.parentMenuName = '';
    this.screenPathText = '';
    this.subMenuList = [{
      menuId : '',
      menuName : '',
      menuLevelValue : '',
      menuCode : '',
      showIndicator : true,
      fullMenuName : '',
      parentMenuCode : '',
      parentMenuName : '',
      screenPathText : '',
      subMenuList : []
    }]
  }
}

// test 더미
// let mainMenu = [
//   {
//     "menuId": "ds98fh3o4hf9823o0001",
//     "menuName": "Sign",
//     "menuLevelValue" : "1",
//     "menuCode": "A10000",
//     "showIndicator": true,
//     "fullMenuName": "Sign",
//     "parentMenuCode": "ROOT",
//     "parentMenuName": "MyMenu",
//     "screenPathText": "/sign",
//     "subMenuList": [
//       {
//         "menuId": "ds98fh3o4hf9823o0002",
//         "menuName": "SignIn",
//         "menuLevelValue" : "2",
//         "menuCode": "A10100",
//         "showIndicator": true,
//         "fullMenuName": "Sign > SignIn",
//         "parentMenuCode": "A10000",
//         "parentMenuName": "Sign",
//         "screenPathText": "/signIn",
//         "subMenuList": []
//       },
//       {
//         "menuId": "ds98fh3o4hf9823o0003",
//         "menuName": "SignUp",
//         "menuLevelValue" : "2",
//         "menuCode": "A10200",
//         "showIndicator": true,
//         "fullMenuName": "Sign > SignUp",
//         "parentMenuCode": "A10000",
//         "parentMenuName": "Sign",
//         "screenPathText": "/signUp",
//         "subMenuList": []
//       },
//       {
//         "menuId": "ds98fh3o4hf9823o0004",
//         "menuName": "SignOut",
//         "menuLevelValue" : "2",
//         "menuCode": "A10300",
//         "showIndicator": false,
//         "fullMenuName": "Sign > SignOut",
//         "parentMenuCode": "A10000",
//         "parentMenuName": "Sign",
//         "screenPathText": "/signOut",
//         "subMenuList": []
//       }
//     ]
//   },
//   {
//     "menuId": "ds98fh3o4hf9823o0005",
//     "menuName": "Board",
//     "menuLevelValue" : "1",
//     "menuCode": "A20000",
//     "showIndicator": true,
//     "fullMenuName": "Board",
//     "parentMenuCode": "ROOT",
//     "parentMenuName": "MyMenu",
//     "screenPathText": "/board",
//     "subMenuList": [
//       {
//         "menuId": "ds98fh3o4hf9823o0006",
//         "menuName": "Normal",
//         "menuLevelValue" : "2",
//         "menuCode": "A20100",
//         "showIndicator": true,
//         "fullMenuName": "Board > Normal",
//         "parentMenuCode": "A20000",
//         "parentMenuName": "Board",
//         "screenPathText": "/board/normal",
//         "subMenuList": []
//       },
//       {
//         "menuId": "ds98fh3o4hf9823o0007",
//         "menuName": "Notice",
//         "menuLevelValue" : "2",
//         "menuCode": "A20200",
//         "showIndicator": true,
//         "fullMenuName": "Board > Notice",
//         "parentMenuCode": "A20000",
//         "parentMenuName": "Board",
//         "screenPathText": "/board/notice",
//         "subMenuList": []
//       },
//       {
//         "menuId": "ds98fh3o4hf9823o0008",
//         "menuName": "FAQ",
//         "menuLevelValue" : "2",
//         "menuCode": "A20300",
//         "showIndicator": true,
//         "fullMenuName": "Board > FAQ",
//         "parentMenuCode": "A20000",
//         "parentMenuName": "Board > FAQ",
//         "screenPathText": "/board/faq",
//         "subMenuList": []
//       },
//       {
//         "menuId": "ds98fh3o4hf9823o009",
//         "menuName": "Q&A",
//         "menuLevelValue" : "2",
//         "menuCode": "A20400",
//         "showIndicator": true,
//         "fullMenuName": "Board > Q&A ",
//         "parentMenuCode": "A20000",
//         "parentMenuName": "Board > Q&A",
//         "screenPathText": "/board/qna",
//         "subMenuList": []
//       }
//     ]
//   }
// ];

export default MainMenu
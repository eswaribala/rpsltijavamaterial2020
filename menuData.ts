import {MenuItem, SubMenuItem} from "../models/menuItem";


let menuData:MenuItem[]=[new MenuItem('Category',[
  new SubMenuItem('Add','',''),
    new SubMenuItem('Edit','',''),
    new SubMenuItem('ViewAll','',''),
    new SubMenuItem('View','',''),
    new SubMenuItem('Delete','','')
  ],
  '',''),
  new MenuItem('Product',[
      new SubMenuItem('Add','',''),
      new SubMenuItem('Edit','',''),
      new SubMenuItem('ViewAll','',''),
      new SubMenuItem('View','',''),
      new SubMenuItem('Delete','','')
    ],
    '',''),
  new MenuItem('Accounts',[],
    '',''),
  new MenuItem('Shipping',[],
    '','')

];

import { MenuItem } from "../interfaces/menu.interface";


export const MENU_ITEMS: MenuItem[] = [
    {title:'Inicio',url:'/home',icon:'fa-house',redirectTo:'/home'},
    {title:'Catalogo',url:'/products',icon:'fa-store',redirectTo:'/products'},
    /* {title:'Perfil',url:'/',icon:'fa-user',redirectTo:'/home'}, */
    {title:"Cerrar Sesión",url:'/',icon:'fa-right-to-bracket',redirectTo:'/login'},
];

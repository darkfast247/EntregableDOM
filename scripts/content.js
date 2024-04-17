//Content - Aquí se rellena cada sección con los elementos HTML crudos y sin estilos.
//Posteriormente, se estilizan por medio del objeto Stylizer y se retornan a Sections.
import { Stylizer } from "./style.js";

class Content{
    constructor(){
        this.Stylize = new Stylizer;
        this.logo_route = 'https://logos-world.net/wp-content/uploads/2020/11/PlayStation-Logo1994-2009.png';
        this.default_card_text = "Pulsar cada botón.";
    }

    fill_header = header =>{
        //--Logo--//
        const logo = document.createElement('img');
        logo.src = this.logo_route;

        //---Direccionamiento---//
        const navItems = document.createElement('ul');
        //--//
        const navItem1 = document.createElement('li');
        const navLink1 = document.createElement('a');

        navLink1.href = "#";
        navLink1.text = "Productos"; 
        //--//
        const navItem2 = document.createElement('li');
        const navLink2 = document.createElement('a');

        navLink2.href = "#";
        navLink2.text = "Contáctenos";
        //--//
        const navItem3 = document.createElement('li');
        const navLink3 = document.createElement('a');

        navLink3.href = "#";
        navLink3.text = "Sobre nosotros";
        //--//
        navItem1.appendChild(navLink1);
        navItem2.appendChild(navLink2);
        navItem3.appendChild(navLink3);
        navItems.append(...[navItem1, navItem2, navItem3]);

        //---Iniciar sesion---//
        const loginBtn = document.createElement('button');
        loginBtn.textContent = "Iniciar sesión";
        header.append(...[logo, navItems, loginBtn]);
        header = this.Stylize.stylize_header(header);

        return header;
    }

    fill_main = main => {
        const main_title = document.createElement('h1');
        main_title.textContent = "Playstation";

        //------Cards section------//
        const cards_section = document.createElement('section');
        const card_1 = document.createElement('article');
        const card_2 = document.createElement('article');
        const card_3= document.createElement('article');
        const card_4 = document.createElement('article');

        const msg_card1 = document.createElement('h4');
        msg_card1.textContent = this.default_card_text;
        const msg_card2 = document.createElement('h4');
        msg_card2.textContent = this.default_card_text;
        const msg_card3 = document.createElement('h4');
        msg_card3.textContent = this.default_card_text;
        const msg_card4 = document.createElement('h4');
        msg_card4.textContent = this.default_card_text;

        const btn_comprar = document.createElement('button');
        const btn_devolver = document.createElement('button');
        const btn_info = document.createElement('button');
        const btn_terminos = document.createElement('button');

        btn_comprar.textContent = "Comprar";
        btn_devolver.textContent = "Entregar";
        btn_info.textContent = "Información";
        btn_terminos.textContent = "Aceptar TyC";
        
        card_1.append(...[msg_card1, btn_comprar]);
        card_2.append(...[msg_card2, btn_devolver]);
        card_3.append(...[msg_card3, btn_info]);
        card_4.append(...[msg_card4, btn_terminos]);

        cards_section.append(...[card_1, card_2, card_3, card_4]);

        main.append(...[main_title, cards_section]);
        main = this.Stylize.stylize_main(main);
        return main;
    }

    fill_footer = footer =>{
        //---Nosotros section---//
        const nosotros_section = document.createElement('section');
        const title_nosotros = document.createElement('h5');
        title_nosotros.textContent = "Quienes somos?";

        const descripcion_nosotros = document.createElement('p');
        descripcion_nosotros.textContent = "Somos una qmpresa de desarrollo de consolas de videojuegos, como la PlayStation 5 y sus predecesoras. También creo y publico videojuegos exclusivos a través de PlayStation Studios, ofreciendo títulos populares como Uncharted y God of War, Proveo servicios en línea con PlayStation Network."

        nosotros_section.append(...[title_nosotros, descripcion_nosotros]);
        //---Info section---//
        const info_section = document.createElement('section');
        const title_informacion = document.createElement('h5');
        title_informacion.textContent = "Horario de atencion";

        const descripcion_info_horarios = document.createElement('p');
        descripcion_info_horarios.textContent = "De lunes a viernes 8 AM a 5PM"
        const descripcion_info_telefonos = document.createElement('p');
        descripcion_info_telefonos.textContent = "Teléfono: 300 3929814";

        const descripcion_info_correo = document.createElement('p');
        descripcion_info_correo.textContent = "playstation@playstation.com";

        info_section.append(...[title_informacion, descripcion_info_horarios, descripcion_info_correo, descripcion_info_telefonos]);
        //---Logo section---//
        const logo_section = document.createElement('section');
        const logo = document.createElement('img');
        logo.src = this.logo_route;

        const copyright_mark = document.createElement('strong');
        copyright_mark.textContent = "Playstation Copyrigth";

        logo_section.append(...[logo, copyright_mark]);

        footer.append(...[nosotros_section, info_section, logo_section]);
        footer = this.Stylize.stylize_footer(footer);

        return footer;
    }
}

export { Content }
import { Buttons } from "./components/buttons.js";
import { Cards } from "./components/cards.js";
import { createToastNotify } from "./components/ToastNotify.js";

class Stylizer {
    constructor() {
        this.ButtonStyler = new Buttons();
        this.CardStyler = new Cards();

        // Cambia el color de los botones a un azul oscuro (#004080)
        this.ButtonCardColorMap = ['#004080', '#004080', '#004080', '#004080'];
        
        // Mantenemos las propiedades de encabezados y mensajes de notificación
        this.NotiHeadMap = ["Exito", "Error", "Info", "Advertencia"];
        this.NotiMsgMap = [
            "Su compra se ha realizado correctamente.",
            "Error en el sistema, intente más tarde.",
            "Estamos abiertos de lunes a viernes.",
            `Mensaje de advertencia ¿Acepta los TyC? Presione X para cerrar el ToastNotify/Denegar, o pulse el botón aceptar si está de acuerdo.<section class="row"> <article class="col d-flex justify-content-end"><button class="btn btn-light border btn-sm">Acepto</button></article></section>`
        ];
    }

    // Métodos para estilizar diferentes partes de la página (header, main, footer)

    stylize_header = header => {
        // Estilo del header
        header.style.display = 'grid';
        header.style.gridTemplateColumns = '.2fr .6fr .2fr';
        header.style.placeItems = 'center';
        header.style.boxShadow = '0 3px 3px rgba(0,0,0,.1)';
        
        // Logo
        const logo = header.children[0];
        logo.style.maxHeight = '175px';

        // Elementos de navegación
        const NavItems = header.children[1];
        NavItems.style.width = "100%";
        NavItems.style.display = 'flex';
        NavItems.style.justifyContent = 'space-evenly';
        NavItems.style.listStyle = 'none';
        
        for (let i = 0; i < NavItems.children.length; i++) {
            let child = NavItems.children[i].children[0];
            child.style.textDecoration = 'none';
            child = this.ButtonStyler.btn_boot(child, '#004080', '#fff');
        }

        // Botón de inicio de sesión
        let loginBtn = header.children[2];
        loginBtn = this.ButtonStyler.btn_neon(loginBtn, '#004080', '');

        return header;
    }

    stylize_main = main => {
        main.style.textAlign = 'center';
        main.style.margin = "10vh 0 10vh 0";

        // Título
        const title = main.children[0];
        title.style.fontSize = '4rem';

        // Sección de tarjetas
        const cards_section = main.children[1];
        cards_section.style.display = 'flex';
        cards_section.style.justifyContent = 'space-evenly';

        // Iterar a través de las tarjetas para aplicar estilos
        for (let i = 0; i < cards_section.children.length; i++) {
            let card = cards_section.children[i];
            card.style.display = "grid";
            card.style.placeItems = "center";
            
            // Cambia el estilo de las tarjetas a un gris
            card = this.CardStyler.card_rainbow(card, 'grey');

            // Mensaje de la tarjeta
            let card_msg = card.children[0];
            card_msg.style.width = "75%";
            card_msg.style.fontSize = "1.2rem";

            // Botón de la tarjeta
            let card_btn = card.children[1];
            card_btn = this.ButtonStyler.btn_boot(card_btn, this.ButtonCardColorMap[i], '#fff');

            card_btn.addEventListener('click', e => {
                createToastNotify(i, this.NotiHeadMap[i], this.NotiMsgMap[i]);
            });
        }

        return main;
    }

    stylize_footer = footer => {
        footer.style.display = 'grid';
        footer.style.gridTemplateColumns = '1fr 1fr 1fr';
        footer.style.placeItems = 'center';
        footer.style.textAlign = 'center';
        footer.style.boxShadow = '3px 3px 3px rgba(0,0,0,.1)';

        // Sección de nosotros
        const nosotros_section = footer.children[0];
        const titulo_nosotros = nosotros_section.children[0];
        titulo_nosotros.style.fontSize = '2rem';

        const descripcion_nosotros = nosotros_section.children[1];
        descripcion_nosotros.style.width = "40ch";

        // Sección de información
        const info_section = footer.children[1];
        const title_informacion = info_section.children[0];
        title_informacion.style.fontSize = "2rem";

        // Logo en el footer
        const logo = footer.children[2].children[0];
        logo.style.maxHeight = '175px';
        logo.style.display = 'block';

        return footer;
    }
}

export { Stylizer };

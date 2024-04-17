//Sections - Aquí se crean y se exportan las seccione.Tambien se rellenan con los elementos HTML
//que provienen de la clase Content mediante la instancia filler.
import { Content } from "./content.js";

class Sections {
    constructor() {
        this.filler = new Content();
    }

    get_header = () => {
        let header = document.createElement('header');
        header = this.filler.fill_header(header);
        return header;
    }

    get_main = () => {
        let main = document.createElement('main');
        main = this.filler.fill_main(main);
        return main;
    }

    get_footer = () => {
        let footer = document.createElement('footer');
        footer = this.filler.fill_footer(footer);
        return footer;
    }
}


export { Sections };

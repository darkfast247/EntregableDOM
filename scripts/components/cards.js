class Cards{
    constructor(){}

    card_rainbow = card =>{
        card.style.width = "270px";
        card.style.height = "350px";
        card.style.borderRadius = "0rem";
        // Establece el color de fondo a un gris opaco
        card.style.backgroundColor = "#B0B0B0";
        // Elimina la imagen de fondo con el gradiente arcoíris
        card.style.backgroundImage = ""; // Dejar en blanco para eliminar cualquier imagen de fondo
        // Mantén los estilos de box-shadow que prefieras
        card.style.boxShadow = "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px";
        return card;
    }
}

export { Cards }
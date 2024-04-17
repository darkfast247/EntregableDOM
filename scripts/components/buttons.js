class Buttons {
    constructor() {
        this.default_text_color = "#fff";
        this.color_neon_deepskyblue = '008CFF';

    }

    btn_neon = (button, colorD, fontColor) =>{
        let textColor = fontColor.trim() === '' ? this.default_text_color : fontColor;
        let color = colorD.trim() === '' ? this.color_neon_deepskyblue : colorD;

        button.style.padding = "10px 20px";
        button.style.border = "none";
        button.style.fontSize = "17px";
        button.style.color = textColor;
        button.style.borderRadius = "7px";
        button.style.letterSpacing = "4px";
        button.style.fontWeight = "700";
        button.style.textTransform = "uppercase";
        button.style.transition = "0.5s";
        button.style.transitionProperty = "box-shadow";
        button.style.background = `${color}`;
        button.style.boxShadow = `0 0 25px ${color}`;
        button.style.cursor = 'pointer';
        button.addEventListener('mouseover', () => {
            button.style.boxShadow = `0 0 5px ${color}, 0 0 25px ${color}, 0 0 50px ${color},0 0 100px ${color}`;
        });
        button.addEventListener('mouseout', () => {
            button.style.boxShadow = `0 0 25px ${color}`;
        });

        return button;
    }

    btn_boot = (button, colorD, fontColor) =>{
        let textColor = fontColor.trim() === '' ? this.default_text_color : fontColor;
        let color = colorD.trim() === '' ? this.color_neon_deepskyblue : colorD;

        button.style.display = 'inline-block';
        button.style.marginBottom = '0';
        button.style.fontWeight = '400';
        button.style.textAlign = 'center';
        button.style.whiteSpace = 'nowrap';
        button.style.verticalAlign = 'middle';
        button.style.touchAction = 'manipulation';
        button.style.cursor = 'pointer';
        button.style.border = '1px solid transparent';
        button.style.padding = '6px 12px';
        button.style.fontSize = '14px';
        button.style.lineHeigth = '1.4285';
        button.style.borderRadius = '4px';
        button.style.background = `${color}`;
        button.style.color = textColor;
        return button;
    }

}


export { Buttons }
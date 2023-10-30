class SVG {
    constructor() {
        this.width = 300;
        this.height = 200;
        this.textValue = "";
        this.textColor = "";
        this.shape = null;
    }

    setText(text, color) {
        if (text.length > 3) {
            throw new Error("Text must not exceed 3 characters.");
        }
        this.textValue = text;
        this.textColor = color;
    }

    setShape(shape) {
        this.shape = shape;
    }

    render() {
        let svgString =
            `<svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">`;

        // Append the shape if available
        if (this.shape) {
            svgString += this.shape.render();
        }

        // Append the text
        if (this.textValue) {
            svgString += `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textValue}</text>`;
        }

        svgString += `</svg>`;
        return svgString;
    }
}

module.exports = SVG;

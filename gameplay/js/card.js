export class Card {
    num;
    sign;
    img;
    backImg = "/images/play card/Card_Back.png";
    constructor(num, sign, img) {
        this.num = num;
        this.sign = sign;
        this.img = `images/play card/${img}.png`;
    }
}

class Hero extends Person{
    constructor(name) {
        super(name);
    }
    render() {
        return `
            <div class="hero">
                <img src="./hero.jpg" />
                <div class="health">${this.health}</div>`
    }
}
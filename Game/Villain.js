class Villain extends Person {
    constructor(name) {
        super(name);
    }

    render() {
        return `
            <div class="villain">
                <img src="./villain.jpg" />
                <div class="health">${this.health}</div>
            </div>
        `
    }
}
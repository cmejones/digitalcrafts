window.addEventListener('DOMContentLoaded', () => {
    const heroName = prompt('Hero Name');
    const villainName = prompt('Villain Name');

    const hero = new Hero(heroName);
    const villain = new Villain(villainName);

    const heroWeapon = new Weapon('Excalibur');
    const villainWeapon = new Weapon('Super Sword');

    function update() {
        document.getElementById('heroContainer').innerHTML = hero.render();
        document.getElementById('villainContainer').innerHTML = villain.render(); 

        if (hero.health < 1) {
            alert('Game Over!');
        } else if (villain.health < 1) {
            alert('Victory!');
        }
    }

    hero.equipWeapon(heroWeapon);
    villain.equipWeapon(villainWeapon);

    update();

    document.getElementById('heroAttack').addEventListener('click', () => {
        hero.attack(villain);
        update();
    });

    document.getElementById('villainAttack').addEventListener('click', () => {
        villain.attack(hero);
        update();
    });   
})
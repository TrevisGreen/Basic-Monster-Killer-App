const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');
const bonusLifeEl = document.getElementById('bonus-life');

const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');


function adjustHealthBars(maxLife) {
    monsterHealthBar.max = maxLife;
    monsterHealthBar.value = maxLife;
    playerHealthBar.max = maxLife;
    playerHealthBar.value = maxLife;
}

function dealMonsterDamage(damage) {
    const dealDamage = Math.random() * damage;
    monsterHealthBar.value = +monsterHealthBar.value - dealDamage;
    return dealDamage;
}

function dealPlayerDamage(damage) {
    const dealDamage = Math.random() * damage;
    playerHealthBar.value = +playerHealthBar.value - dealDamage;
    return dealDamage;
}
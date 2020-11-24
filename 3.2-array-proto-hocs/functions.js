const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames(){
  return weapons.map(item => item.name);
}

function getCountReliableWeapons(durability){
  return weapons.filter(item => item.durability > durability ).length;
}

function hasReliableWeapons(durability){
  return weapons.some(item => item.durability > durability);
}

function getReliableWeaponsNames(durability){
  return weapons.filter(item => item.durability > durability ).map(item => item.name);
}

function getTotalDamage(){
  return weapons.reduce((sum, element) => {
    return sum + element.attack;
  }, 0);
}


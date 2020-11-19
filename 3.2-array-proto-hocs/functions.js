const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames(){
  return weapons.map(item => item.name);
}

function getCountReliableWeapons(durability){
  return weapons.filter(item => item.durability > durability ).length;
}

function hasReliableWeapons(durability){
 if (getCountReliableWeapons(durability) > 0){
   return true;
 } else {
   return false;
 }
}

function getReliableWeaponsNames(durability){
  return weapons.filter(item => item.durability > durability ).map(item => item.name);
}

function getTotalDamage(){
  let summ = 0;
  weapons.map(item => summ += item.attack);
  return summ;
}

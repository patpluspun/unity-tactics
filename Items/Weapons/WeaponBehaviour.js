#pragma strict

var weaponName : String;
var weaponDescription : String;
var weaponPower : int = 0;
var weaponEvade : int = 0;
var weaponRange : int = 1;
var weaponVertical : int = 3;
var weaponPrice : int = 0;
var weaponEnemyLevel : int = 1;
var weaponStatModifiers : String[];
var weaponHalvesElement : Transform[];
var weaponAddsElement : Transform[];
var weaponCancelsElement : Transform[];
var weaponAbsorbsElement : Transform[];
var weaponStrengthensElement : Transform[];
var weaponInitialEffect : Transform[];
var weaponAutoEffect : Transform[];
var weaponAddsEffect : Transform[];
var weaponCancelsEffect : Transform[];
var weaponCastsSpell : Transform[];
var weaponDamageRandom : boolean = false;
var weaponNotEvadable : boolean = false;
var weaponTwoSwords : boolean = false;
var weaponTwoHands : boolean = false;
var weaponNeedsTwoHands : boolean = false;
var weaponDrains : boolean = false;
var weaponLineOfSight : boolean = false;
var weaponFemalesOnly : boolean = false;
var weaponThrowable : boolean = false;

function Start () {

}

function Update () {

}

/*function Damage(unit : Transform) {
  var caster = unit.GetComponent('UnitBehaviour');
  Debug.Log(caster);
  return (caster.unitPa * caster.unitBrave/100) * this.weaponWeaponPower;
}*/

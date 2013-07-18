#pragma strict

var name : String;
var description : String;
var power : int = 0;
var evade : int = 20;
var range : int = 2;
var vertical : int = 3;
var price : int = 0;
var enemyLevel : int = 1;
var statModifiers : String[] = ['MA'];
var addsElement : Transform[];
var halvesElement : Transform[];
var cancelsElement : Transform[];
var absorbsElement : Transform[];
var strengthensElement : Transform[];
var addsEffect : Transform[];
var initialEffect : Transform[];
var autoEffect : Transform[];
var cancelsEffect : Transform[];
var castsSpell : Transform[];
var damageRandom : boolean = false;
var notEvadable : boolean = false;
var twoSwords : boolean = false;
var twoHands : boolean = true;
var bothHandsOnly : boolean = false;
var drains : boolean = false;
var lineOfSight : boolean = false;
var parabolic : boolean = false;
var femalesOnly : boolean = false;
var throwable : boolean = true;

function Start () {

}

function Update () {

}

/*function Damage(unit : Transform) {
  var caster = unit.GetComponent('UnitBehaviour');
  Debug.Log(caster);
  return (caster.unitPa * caster.unitBrave/100) * this.power;
}*/

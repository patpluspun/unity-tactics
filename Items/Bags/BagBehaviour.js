#pragma strict

var name : String;
var description : String;
var power : int = 0;
var evade : int = 0;
var range : int = 1;
var vertical : int = 3;
var price : int = 0;
var enemyLevel : int = 1;
var statModifiers : String[] = ['PA'];
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
var damageRandom : boolean = true;
var notEvadable : boolean = false;
var twoSwords : boolean = false;
var twoHands : boolean = false;
var bothHandsOnly : boolean = false;
var drains : boolean = false;
var lineOfSight : boolean = false;
var parabolic : boolean = false;
var femalesOnly : boolean = true;
var throwable : boolean = false;

function Start () {

}

function Update () {

}

/*function Damage(unit : Transform) {
  var caster = unit.GetComponent('UnitBehaviour');
  Debug.Log(caster);
  return (caster.unitPa * caster.unitBrave/100) * this.power;
}*/

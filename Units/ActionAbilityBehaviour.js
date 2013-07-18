#pragma strict

var abilityName : String;
var abilityType : String = 'neutral';
var abilityDescription : String;
var abilityTaunt : String;
var abilityLearned : boolean = false;
var abilityRange : int = 3;
var abilityEffect : int = 3;
var abilityVertical : int = 1;
var abilityMpCost : int = 0;
var abilityCounter : int = 0;
var abilityJpCost : int = 0;
var abilityMod : int;
var abilityConstant : int = 0;
var abilityWorkMod : int = 0;
var abilityElement : Transform[];
var abilityAddsEffect : Transform[];
var abilityCancelsEffect : Transform[];
var abilityLineOfSight : boolean = false;
var abilityCasterImmune : boolean = false;
var abilityDrains : boolean = false;
var abilityUndeadReversal : boolean = false;
var abilityCanCritical : boolean = false;
var abilityReflectable : boolean = false;
var abilityCalculatable : boolean = false;
var abilityCounterGrasp : boolean = false;
var abilityCounterMagic : boolean = false;
var abilityCounterFlood : boolean = false;
var abilityEvadable : boolean = false;
var abilityOnlyAllies : boolean = false;
var abilityOnlyEnemies : boolean = false;
var abilityMartialArts : boolean = false;
var abilityRequiresSword : boolean = false;
var abilityStrikesRandomly : boolean = false;
var abilityUsesItem : Transform;

function Start () {

}

function Update () {

}

/**
 * Applies modifiers to ability.
 *
 * xA is whatever relevant stat is used for the attack.  Can be PA, MA, Sp, or any combination.
 */
function ApplyMods(xA : int) {
  switch (abilityMod) {
    // This attack modifier is immutable. Whatever is passed takes effect.
    case 0:

      break;
    // Neutral attack with variable success rate. Only Zodiac compatibility affects these attacks.
    case 1:

      break;
    // Physical attack with variable damage.
    case 2:
      if (abilityCanCritical) {
        var critChance = Random.Range(1, 100);
        if (critChance < 6) {
          xA = xA + (Random.Range(1, xA)) - 1;
        }
      }
      if (abilityElement.Length >= 1) {
        //if (transform.parent.gameObject.parent.gameObject
      }
      break;

    case 3:

      break;

    case 4:

      break;

    case 5:

      break;

    case 6:

      break;
  }
}

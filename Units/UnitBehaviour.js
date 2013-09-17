#pragma strict

var unitName : String;
var type : String;
var gender : String;
var zodiac : String;
var level : int = 1;
var experience : int = 0;
var ct : int = 0;
var currentJob : Transform;

// Define hidden stats.
private var rawPa : int;
private var rawMa : int;
private var rawSp : int;
private var rawHp : int;
private var rawMp : int;

// Define stats dependent on raw stats.
var hp : int; // = GetStartingHitPoints(unitGender);
var mp : int; // = GetStartingMagicPoints(unitGender);
var pa : int; // = GetStartingPhysical(unitGender);
var ma : int; // = GetStartingMagical(unitGender);
var sp : int; // = GetStartingSpeed(unitGender);
var brave : int; // = GetStartingBrave(unitGender);
var faith : int; // = GetStartingFaith(unitGender);
var primarySkill : Transform; //= currentJob.jobAbilities.skillSet;
var secondarySkill : Transform;
var reactionSkill : Transform;
var supportSkill : Transform;
var moveSkill : Transform;
var statusEffects : Transform[];

// Define menu vars.
var menuOpen : boolean = false;
var mainRect : Rect = Rect(10, 10, Screen.width - 20, 250);
var subRect : Rect = Rect(Screen.width / 2, 20, Screen.width / 2, 230);

function Start () {
  type = GetRandomType();
  gender = GetRandomGender(type);
  unitName = GetRandomName(gender);
  zodiac = GetRandomZodiac();
  rawPa = GetRawPa(gender);
  rawMa = GetRawMa(gender);
  rawSp = GetRawSp(gender);
  rawHp = GetRawHp(gender);
  rawMp = GetRawMp(gender);
}

function Update () {

}


/**
 * Defines unit type options.
 */
private function GetRandomType() {
  var random = Random.Range(0, 15);
  if (random == 16) {
    return 'zodiac';
  }
  else if (random <= 15 && random > 7) {
    return 'human';
  }
  else {
    return 'monster';
  }
}

/**
 * Defines a unit's raw physical attack.
 */
private function GetRawPa(gender : String) {
  switch (gender) {
    case 'male':
      return 81920;
      break;

    case 'female':
      return 65536;
      break;

    case 'none':
      return Random.Range(81920, 98303);
      break;
  }
}

/**
 * Defines a unit's raw magical attack.
 */
private function GetRawMa(gender : String) {
  switch (gender) {
    case 'male':
      return 65536;
      break;

    case 'female':
      return 81920;
      break;

    case 'none':
      return Random.Range(81920, 98303);
      break;
  }
}

/**
 * Defines a unit's raw speed.
 */
private function GetRawSp(gender : String) {
  switch (gender) {
    case 'male':
    case 'female':
      return 98304;
      break;

    case 'none':
      return 81920;
      break;
  }
}

/**
 * Defines a unit's raw hit points.
 */
private function GetRawHp(gender : String) {
  switch (gender) {
    case 'male':
      return Random.Range(491520, 524287);
      break;

    case 'female':
      return Random.Range(458752, 491519);
      break;

    case 'none':
      return Random.Range(573440, 622591);
      break;
  }
}

/**
 * Defines a unit's raw magic points.
 */
private function GetRawMp(gender : String) {
  switch (gender) {
    case 'male':
      return Random.Range(229376, 245759);
      break;

    case 'female':
      return Random.Range(245760, 262143);
      break;

    case 'none':
      return Random.Range(98304, 147455);
      break;
  }
}

/**
 * Generates a random gender.
 */
function GetRandomGender(unitType : String) {
  if (unitType == 'human') {
    var gender = Random.Range(0, 10);
    if (gender >= 5) {
      return 'male';
    }
    else {
      return 'female';
    }
  }
  else {
    return 'none';
  }
}

/**
 * Generates a random name.
 */
function GetRandomName(unitGender : String) {
  var random = Random.Range(0, 100);
  switch (unitGender) {
    case 'male':
      if (random < 33) {
        return 'Milo';
      }
      else if (random > 34 && random < 67) {
        return 'Steve';
      }
      else if (random > 67) {
        return 'LittleJohn';
      }
      break;

    case 'female':
      if (random < 33) {
        return 'Felicia';
      }
      else if (random > 34 && random < 67) {
        return 'Katherine';
      }
      else if (random > 67) {
        return 'Zora';
      }
      break;

    case 'none':
      if (random < 33) {
        return 'Zeus';
      }
      else if (random > 34 && random < 67) {
        return 'Swift Wind';
      }
      else if (random > 67) {
        return 'Winston';
      }
      break;
  }
}

/**
 * Generates a random zodiac symbol.
 */
function GetRandomZodiac() {
  var random = Random.Range(1, 12);
  switch (random) {
    case 1:
      return 'Aries';
      break;

    case 2:
      return 'Taurus';
      break;

    case 3:
      return 'Gemini';
      break;

    case 4:
      return 'Cancer';
      break;

    case 5:
      return 'Leo';
      break;

    case 6:
      return 'Virgo';
      break;

    case 7:
      return 'Libra';
      break;

    case 8:
      return 'Scorpio';
      break;

    case 9:
      return 'Sagittarius';
      break;

    case 10:
      return 'Capricorn';
      break;

    case 11:
      return 'Aquarius';
      break;

    case 12:
      return 'Pisces';
      break;
  }
}

/**
 * Generates a random starting job.
 */
/*function GetRandomStartingJob(isMonster : boolean) {
  if (isMonster) {
    var newJob = GameObject.GetComponent('MonsterBehaviour');
  }
  else {
    var random = Random.Range(0, 1);
    switch (random) {
      case 0:
        var newJob = GameObject.GetComponent('JobBehaviour');
        
        break;

      case 1:
        var newJob = GameObject.GetComponent('JobBehaviour');
        break;
    }
  }
  return Instantiate(newJob, transform.position, transform.rotation);
}*/

/**
 * Generates starting hit points according to level.
 */
function GetStartingHitPoints(gender : String) {
  var modifier : int = 1638400;
  //var job : Transform = transform.getComponent('JobBehaviour');
  switch (gender) {
    case 'male':
      
      //var rawHP : int = 
      break;
    case 'female':

      break;
    case 'none':

      break;
  }
}

/**
 * GUI functions.
 ****************/
function onMouseDown() {
  Debug.Log('clicked');
  menuToggle();
}

function OnGUI() {
  Debug.Log(menuOpen);
  if (menuOpen == true) {
Debug.Log('menu opened');
    mainRect = GUI.Window(0, mainRect, drawMain, '');
    subRect = GUI.Window(1, subRect, drawSub, '');
  }
}

function menuToggle(/*charMenu : GuiCharacterMenu*/) {
  if (menuOpen == false) {
    menuOpen = true;
  }
  else {
    menuOpen = false;
  }
}

function drawMain(winID : int) {
  GUI.Label(Rect(55, 10, 40, 20), 'Lvl: ' + this.level);
  GUI.Label(Rect(95, 10, 40, 20), 'Exp: ' + this.experience);
  GUI.Label(Rect(35, 40, 90, 20), 'HP: ' + this.hp);
  GUI.Label(Rect(35, 70, 90, 20), 'MP: ' + this.mp);
  GUI.Label(Rect(35, 100, 90, 20), 'CT: ' + this.ct);  
}

function drawSub(winID : int) {
  GUI.Label(Rect((Screen.width / 2) + 10, 10, 80, 20), this.name);
  GUI.Label(Rect((Screen.width / 2) + 10, 40, 80, 20), currentJob.name);
  GUI.Label(Rect((Screen.width / 2) + 5, 70, 30, 20), this.zodiac);
  GUI.Label(Rect((Screen.width / 2) + 35, 70, 30, 20), 'Brave: ' + this.brave);
  GUI.Label(Rect((Screen.width / 2) + 65, 70, 30, 20), 'Faith: ' + this.faith);
}


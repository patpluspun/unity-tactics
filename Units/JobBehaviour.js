#pragma strict

var jobName : String;
var jobDescription : String;
var jobMove : int = 3;
var jobJump : int = 3;
var jobEvade : int = 5;

var jobLevel : int = 1;
var jobPointsTotal : int; //Mathf.Min(200 * jobLevel, Random.Range(50, 100) * jobLevel);
var jobPointsCurrent : int; //jobPointsTotal;
var jobCommand : Transform;
var jobAbilities : Transform[];
var jobInnateAbilities : Transform[];
var jobEquippableItems : String[];
var jobImmunities : String[];
var jobRequirements : String[];

var jobHpMultiplier : int;
var jobHpConst : int;
var jobMpMultiplier : int;
var jobMpConst : int;
var jobSpMultiplier : int;
var jobSpConst : int;
var jobPaMultiplier : int;
var jobPaConst : int;
var jobMaMultiplier : int;
var jobMaConst : int;

function Start () {
  jobPointsTotal = Mathf.Min(200 * jobLevel, Random.Range(50, 100) * jobLevel);
  jobPointsCurrent = jobPointsTotal;
}

function Update () {

}


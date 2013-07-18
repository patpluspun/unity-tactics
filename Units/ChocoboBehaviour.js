#pragma strict

private var jobType : String = 'squire';
var jobLevel : int = 1;
var jobPointsTotal : int = Random.Range(50, 75) * jobLevel;
var jobPointsCurrent : int = jobPointsTotal;
var jobAbilities : Transform[];
var jobHitPointGrowth : int = 4;
var jobMagicPointGrowth : int = 1;

function Start () {

}

function Update () {

}


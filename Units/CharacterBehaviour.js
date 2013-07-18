#pragma strict

private var characterType : String = 'Character';
var unitAllJobs : Transform[];

var unitEquipment : Transform[];

function Start () {

}

function Update () {

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


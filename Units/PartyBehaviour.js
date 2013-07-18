#pragma strict

var partyType : String = 'cpu';
var partyColor : Color = Color.red;
var partyMembers : Transform[];

function Start () {
  if (partyMembers.Length > 0) {
    for (child in partyMembers) {
      var typedChild : Transform = child as Transform;
      typedChild.renderer.material.color = partyColor;
    }
  }
}

function Update () {

}


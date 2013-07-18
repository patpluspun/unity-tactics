#pragma strict

var type : String = 'natural';
var tileColor : Color = Color.red;
var xCoord : int = 0;
var yCoord : int = 0;
var height : float = 0.0;
var moveSpeed : int = 1;
var isPassable : boolean = true;
var canHover : boolean = false;
var geoEffect : Transform;
private var heightChanged : boolean = false;

function Start () {
  //transform.position.y += height;;
  renderer.material.color = tileColor;  
}

function Update () {
  xCoord = transform.position.x;
  yCoord = transform.position.z;
  height = Mathf.Round(transform.position.y * 10);
  /*if (heightChanged) {
    ChangeHeight();
  }*/
  //Debug.Log('x: ' + xCoord + ' y: ' + yCoord + ' height: ' + height);
}

function ChangeHeight(newHeight : float) {
  var rounded = Mathf.Round(newHeight);
  transform.position.y += height;
  heightChanged = false;
}

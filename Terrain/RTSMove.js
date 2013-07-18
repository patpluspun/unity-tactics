#pragma strict

var speed : float = 20.0;
var move : boolean;
var clickedPosition : Vector3;
var isSelected : boolean;

function Start () {

}

function Update () {
  if (isSelected == true) {
    Activate();
    if (Input.GetMouseButtonDown(0)) {
      var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
      var hit : RaycastHit;

      if (Physics.Raycast(ray, hit)) {
        move = true;
        clickedPosition = hit.point + Vector3(0.0, 0.0, 0.0);
      }
    }
  }

  if (move) {
    if (Vector3.Distance(transform.position, clickedPosition) < 0.1) {
      transform.position = clickedPosition;
      move = false;
      //Deactivate();
    }
    else {
      transform.LookAt(clickedPosition);
      transform.Translate(Vector3.forward * Time.deltaTime * speed);
      /*if () {
        transform.Translate(Vector3.up + 1);
      }*/
    }
  }
}

function OnMouseDown() {
  if (isSelected == false) {
    isSelected = true;
    Activate();
  }
  else if (isSelected == true) {
    isSelected = false;
    Deactivate();
  }
}

/*function OnMouseUp() {
  isSelected = false;
  Deactivate();
}*/

function OnMouseEnter() {
  if (isSelected) {
    Activate();
  }
}

function Activate() {
  renderer.material.color = Color.green;
}

function Deactivate() {
  isSelected = false;
  renderer.material.color = Color.white;
}

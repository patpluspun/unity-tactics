#pragma strict

var target : Transform;
var rotateSpeed : float = 20.0;
var height : float = 20.0;
var xMinConstraint : float = -12.5;
var xMaxConstraint : float = 12.5;
var yConstraint : float = 12.5;

function Start () {

}

function Update () {
  if (Input.GetAxis('Mouse ScrollWheel') < 0) {
    transform.Translate(Vector3.right * Time.deltaTime * rotateSpeed);
  }
  if (Input.GetAxis('Mouse ScrollWheel') > 0) {
    transform.Translate(Vector3.left * Time.deltaTime * rotateSpeed);
  }
  if (Input.GetMouseButton(1)) {
    if (Input.GetAxis('Mouse X') && Camera.main.transform.position.x > xMinConstraint && Camera.main.transform.position.y < xMaxConstraint) {
      Debug.Log(Camera.main.transform.position.x);
      Camera.main.transform.position.x += Input.GetAxis('Mouse X');
    }
    if (Input.GetAxis('Mouse Y') < 0 && !(Camera.main.transform.position.y < target.transform.position.y + yConstraint)) {
      Camera.main.transform.position.y += Input.GetAxis('Mouse Y');
    }
    if (Input.GetAxis('Mouse Y') > 0 && !(Camera.main.transform.position.y > target.transform.position.y + height)) {
      Camera.main.transform.position.y += Input.GetAxis('Mouse Y');
    }
  }
  transform.LookAt(target);
}

function CenterMainCamera() {
  var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
  var hit : RaycastHit;
  var currentPosition : Vector3 = this.transform.position;
  
  if (Physics.Raycast(ray, hit)) {
    var centerPosition = hit.point + Vector3(0.0, height, 0.0);
    //Camera.main.transform.position = centerPosition;
    //transform.position = Vector3.Lerp(currentPosition, hit.point, 2);
    Debug.Log('hit: ' + hit.point + ' current: ' + currentPosition);
  }
}


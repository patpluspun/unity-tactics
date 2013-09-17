#pragma strict

private var minHeight : float = 0.0; // There is no good reason to set this to anything else.
var name : String = 'newMap';
var size : int = 16; // All maps are squares, define a dimension.
var maxHeight : float = 25.0; // This sets the maximum height the map will allow.
var winCondition : String = 'kill'; // This sets the condition for winning.
var winTarget : Transform[]; // This should be an array of GameObjects to either save or kill.
var blocks : Transform[]; // This should contain all block instances.

function OnGUI() {
  var startMessage = '';
  if (winCondition === 'kill') {
    if (winTarget) {
      startMessage = 'Defeat <Transform>!';
    }
    else {
      startMessage = 'Defeat all enemies!';
    }
  }
  else if (winCondition === 'save') {
    if (winTarget) {
      startMessage = 'Save <Transform>!';
    }
    else {
      startMessage = 'Save all allies!';
    }
  }
}

function Start() {
  var blockTransforms : Transform[] = new Transform[transform.childCount];
  var blockObjects : GameObject[] = new GameObject[transform.childCount];
  var i : int = 0;

  // Sets all terrain geometry bottom vertices to world y0.
  for (var child in transform) {
    var typedChild : Transform = child as Transform;
    var blockTerrain = typedChild.GetComponent('TerrainBehaviour');
    //if (!blockTerrain.canHover) {
      var yPos : float = typedChild.localPosition.y;
      for (var y = yPos; y > 0; y--) {
        var pos = typedChild.TransformPoint(Vector3.up * -y);
        Instantiate(typedChild, pos, Quaternion.identity);
      }
    //}
    //var mesh : Mesh = GetComponent(MeshFilter).mesh;
    //var vertices : Vector3[] = mesh.vertices;
  }
}

function Update () {

}

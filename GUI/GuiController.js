#pragma strict

function OnGUI() {
  GUI.Box(Rect(10, 10, 250, 250), 'Character Name');
  
  GUI.Label(Rect(15, 10, 20, 20), '01');

  GUI.Label(Rect(20, 40, 230, 20), 'Character Class');

  GUI.Label(Rect(20, 70, 230, 20), 'Zodiac');

  GUI.Label(Rect(20, 100, 230, 20), 'Brave');

  GUI.Label(Rect(20, 130, 230, 20), 'Faith');
  /*if (GUI.Button(Rect(20, 70, 230, 20), 'Character Class')) {
    print ('Character Class');
  }*/


}


    function getNames(){
     document.getElementById("player1").innerHTML =
              document.getElementById("name-box1").value;
      document.getElementById("player2").innerHTML =
              document.getElementById("name-box2").value;
	        var myImages1 = new Array();
    myImages1[1] = "https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/rock.png";
    myImages1[2] = "https://res.cloudinary.com/itsellej/image/upload/v1533400143/rock-paper-scissors/paper.png";
    myImages1[3] = "https://res.cloudinary.com/itsellej/image/upload/v1533400144/rock-paper-scissors/scissors.png";
    var rnd1 = Math.floor(Math.random() * myImages1.length);
    if (rnd1 == 0) {
            rnd1 = 1;
    }
  var myImages2 = new Array();
    myImages2[1] = "https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/rock.png";
    myImages2[2] = "https://res.cloudinary.com/itsellej/image/upload/v1533400143/rock-paper-scissors/paper.png";
    myImages2[3] = "https://res.cloudinary.com/itsellej/image/upload/v1533400144/rock-paper-scissors/scissors.png";
    var rnd2 = Math.floor(Math.random() * myImages2.length);
    if (rnd2 == 0) {
            rnd2 = 1;
    }
     document.getElementById("hand1").innerHTML = ('<img class="who1" src="' + myImages1[rnd1] + '">');
     document.getElementById("hand2").innerHTML = ('<img class="who2" src="' + myImages2[rnd2] + '">');
    }


 function leaderSelectA() {
    const input = document.getElementById('team1').value;
    const lines1 = input.split('\n');
    const lines2 = input.split('\n');
    const randomLine1 = lines1[Math.floor(Math.random() * lines1.length)];
    const randomLine2 = lines2[Math.floor(Math.random() * lines2.length)];
    
    //Display your line
    document.getElementById('team1Leader').innerHTML = randomLine1;
    document.getElementById('team2Leader').innerHTML = randomLine2;
 }
	  function a500Team()
{
        num1 = document.getElementById("score1").value;
        document.getElementById("score1").innerHTML = (num1+=500).toString();
}  

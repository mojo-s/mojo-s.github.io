$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms

createPlatform(200, 610, 20, 290)
createPlatform(350, 480, 20, 290)
createPlatform(650, 500, 10, 10, "rgb(167, 217, 252)");
createPlatform(890, 400, 10, 10, "rgb(167, 217, 252)");
createPlatform(1125, 300, 10, 10, "rgb(167, 217, 252)");
createPlatform(1200, 200, 20, 540, "lightblue");
createPlatform(1200, 650, 100, 20, "lime");
createPlatform(1200, 200, 100, 250, "lightblue");



    // TODO 3 - Create Collectables

createCollectable("database", 450, 170, 0.5, 1);
createCollectable("database", 900, 150, 0, 0);
createCollectable("database", 1200, 600, 0.5, 1);    
    // TODO 4 - Create Cannons

createCannon("right", 250, 2000);
createCannon("right", 800, 0);
createCannon("bottom", 1150, 2000);
createCannon("bottom", 1275, 1950);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

import { createToon, isToonSet } from './modules/toon.js';


( function () {
  
  var game = {};

  game.toon = {};

  // Main Loop
  function main( tFrame ) {
    if ( isToonSet( game.toon.name ) ) {
      game.stopMain = window.requestAnimationFrame( main );
  
      [nextTick, numTicks] = typeof int,
                             typeof int

      queueUpdates( numTicks );

      if ( tFrame > nextTick ) {
        var nextTick = game.lastTick + game.tickLength,
            numTicks = 0;
  
        var timeSinceTick = tFrame - game.lastTick,
            numTicks = math.floor( timeSinceTick / game.tickLength );
      }

      renderClock( tFrame );
      game.lastRender = tFrame;
      console.log( tFrame / 1000 );
      console.log( game.toon.name );
    }
  }
  
  function queueUpdates( numTicks ) {
    for ( var i = 0; i < numTicks; i++ ) {
      game.lastTick = game.lastTick + game.tickLength;
      update( game.lastTick );
    }
  }
  
  // If the game.tickLength > 0, set the time var to the current millisecond count, changed to seconds.
  // Then, adjust the innerHTML of the target to the new time, on every tick.
  // TODO: Only update every 1000th tick, rather than every tick.
  function renderClock( tFrame ) {
    if (  game.tickLength > 0  ) {
      var time        = ( tFrame / 1000 ).toFixed(0),
          clock       = `<span>${ time }</span>`,
          clockTarget = document.getElementById('clock');
          
      clockTarget.innerHTML = clock;
    }
  };



  game.lastTick   = performance.now();
  game.lastRender = game.lastTick;
  game.tickLength = 50;

  game.toon.name = createToon();
  main( performance.now() );
  
})();
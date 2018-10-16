export function createToon( toon ) {
  var name = prompt('What\'s your name?');

  return name;
}

export function isToonSet( name ) {
  if (  name.length > 0  ) {
    return true;
  } else {
    return false;
  }
}
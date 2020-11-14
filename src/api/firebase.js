export function getData() {
  return fetch('https://modulsordering.firebaseio.com/FileSystem.json')
}

export function getPositions(positionName='Rimi') {
  return fetch(`https://modulsordering.firebaseio.com/Estimates/${positionName}.json`)
}

export function updatePosition(options) {
  const { estimate, positionIdx, position } = options;
  const body = JSON.stringify(position);
  return fetch(
    `https://modulsordering.firebaseio.com/Estimates/${estimate}/${positionIdx}.json`,
    { method: 'PATCH', body }
  )
}

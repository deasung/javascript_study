

const defaults = new Map()
  .set('색상', '갈색')
  .set('견종', '비글')
  .set('지역', '캔자스');

const filters = new Map()
  .set('색상', '검정색');




function applyDefaults(map, defaults) {
  for (const [key, value] of defaults) {
    if (!map.has(key)) {
      map.set(key, value);
    }
  }
}

export { applyDefaults }

const path2ToGeometries = (solid, options) => {
  const defaults = {
    color: [1, 0.4, 0, 1] // default color
  }
  let { color } = Object.assign({}, defaults, options)

  if ('color' in solid) color = solid.color

  const points = solid.points

  const positions = []
  let prevpoint
  points.forEach((point) => {
    if (prevpoint) {
      positions.push([prevpoint[0], prevpoint[1], 0])
      positions.push([point[0], point[1], 0])
    }
    prevpoint = point
  })
  // add the last segment if necessary
  if (solid.isClosed && prevpoint) {
    const point = points[0]
    positions.push([prevpoint[0], prevpoint[1], 0])
    positions.push([point[0], point[1], 0])
  }

  const normals = positions.map(x => [0, 0, -1])
  const indices = positions.map((x, i) => i) // FIXME: temporary, not really needed, need to change drawMesh

  return [{ positions, normals, color, indices }]
}

module.exports = path2ToGeometries
/**
 * Create a polygon from the given vertices and plane.
 * NOTE: No checks are performed on the parameters.
 * @param {Array} vertices - list of vertices (3D)
 * @param {plane} plane - plane of the polygon
 * @returns {poly3} a new polygon
 * @alias module:modeling/geometry/poly3.fromPointsAndPlane
 */
const fromPointsAndPlane = (vertices, plane) => ({ vertices: vertices, plane: plane })

module.exports = fromPointsAndPlane
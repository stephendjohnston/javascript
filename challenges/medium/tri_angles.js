"use strict";

/*
inputs: 3 three numbers
- each number represents the angle of a triangle

outputs: String
- the type of triangle that the numbers represent

Rules:
- 3 numbers will always be given
- the three numbers will not alway yield a valid triangle
  - in that case return 'invalid'
- Right: One angle is a right angle (exactly 90 degrees).
- Acute: All three angles are less than 90 degrees.
- Obtuse: One angle is greater than 90 degrees.
- depending on the inputs, return the appropriate string 
- Invalid number inputs that don't create valid triangles:
  - interior angles of a triangle must add up to 180 degrees
  - no angle can be 0 degrees
  - 

Mental Model:
First check for invalid inputs. Since there will always be three numbers input, we just have to check for
angles that don't create a valid triangle. Create a function that checks that all inputs !== equal 0 and
all that the sum total of the angles is 180 degrees.

If all inputs are valid, then just check for type of triangle:
- right angle: if one of the inputs === 90
- acute: all angles are less than 90
- obtuse: one angle is greater than 90
*/

function triangleType(angles) {
  if (angles.some(angle => angle === 90)) {
    return 'right';
  } else if (angles.some(angle => angle > 90)) {
    return 'obtuse';
  } else {
    return 'acute';
  }
}

function validTriangle(angles) {
  const nonZeroAngles = angles.every(angle => angle !== 0);
  const totalAngle = angles.reduce((sum, angle) => sum + angle, 0) === 180;

  return nonZeroAngles && totalAngle;
}

function triangle(angle1, angle2, angle3) {
  const angles = [angle1, angle2, angle3];

  if (validTriangle(angles)) {
    return triangleType(angles);
  } else {
    return 'invalid';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
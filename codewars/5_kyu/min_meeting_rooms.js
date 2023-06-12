function minMeetingRooms(meetings) {
  let startTimes = meetings.sort((a, b) => a[0] - b[0]);
  let endTimes = [...meetings].sort((a, b) => a[1] - b[1]);
  console.log(startTimes, endTimes)
  let rooms = 0;
  let j = 0;

  for (let i = 0; i < meetings.length; i++) {
    if (startTimes[i][0] < endTimes[j][1]) {
      rooms++
    } else {
      j++
    }
  }

  return rooms;
}

// Example usage
let meetings = [[0, 30], [5, 10], [15, 20]];
console.log(minMeetingRooms(meetings)); // Output: 2
meetings = [[0, 30], [5, 10], [8, 20]]
console.log(minMeetingRooms(meetings)); // 3
meetings = [[0, 30], [5, 10], [8, 20], [15, 40], [20, 35]]
console.log(minMeetingRooms(meetings));
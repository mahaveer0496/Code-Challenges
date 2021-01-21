/* 
Given a list of intervals representing the start and end time of ‘N’ meetings, find the minimum number of rooms required to hold all the meetings.
*/

const minRoomsBrute = (meetings) => {
  // sort by starting times
  meetings.sort((a, b) => a[0] - b[0])

  let rooms = 0

  /**
   * For each current meeting A[i], compare it with every previous meeting A[j],
   * If any meeting is mutually exclusive, we can use the same room.
   * After each inner check if increment room count _if_ we cant use the any previous rooms.
   *
   * time - O(n^2)
   */
  for (let i = 0; i < meetings.length; i++) {
    let shouldUseSameRoom = false

    for (let j = 0; j < i; j++)
      if (canUseSameRoom(meetings[j], meetings[i])) shouldUseSameRoom = true

    if (!shouldUseSameRoom) rooms++
  }
  return rooms
}

function canUseSameRoom(m1, m2) {
  return m1[1] <= m2[0]
}

console.log(
  minRoomsBrute([
    [4, 5],
    [2, 3],
    [2, 4],
    [3, 5],
  ]),
)

console.log(
  minRoomsBrute([
    [1, 4],
    [2, 5],
    [7, 9],
  ]),
)

console.log(
  minRoomsBrute([
    [6, 7],
    [2, 4],
    [8, 12],
  ]),
)

console.log(
  minRoomsBrute([
    [1, 4],
    [2, 3],
    [3, 6],
  ]),
)

console.log(
  minRoomsBrute([
    [4, 5],
    [2, 3],
    [2, 4],
    [3, 5],
  ]),
)

const teacher = {
  firstName: 'Hamid Reza',
  lastName: 'Izadi Matin',
  fullName: function () {
    return `${this.firstName} ${this.lastName}`
  },
}

let courseName = 'React JS'
let sessionNumber = 3
let institue = 'Sematec'
const showTeacherInfo = () => `Teacher : ${teacher.fullName()}`

// export { showTeacherInfo }
// export { courseName }
// export { sessionNumber }

export { showTeacherInfo, courseName, sessionNumber }
export default institue
/**
 * export const constantName = value;
 * export let variableName = value;
 * export function functionName() {...}
 * export class ClassName {....}
 * 
 * export default function functionName(){....}
 * export default class ClassName {....}
 */
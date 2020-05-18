/* eslint-disable */

console.log('###############################');
console.log('### This is pre start hook ###');
console.log('###############################');

if (new Date().getMinutes() % 2 !== 0) {
  throw new Error('pre start can only stop in even minutes');
}

/* eslint-disable */

console.log('#############################');
console.log('### This is pre stop hook ###');
console.log('#############################');

if (new Date().getMinutes() % 2 == 0) {
  throw new Error('pre stop can only stop in odd minutes');
}

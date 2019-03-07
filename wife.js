const husband = require('./husband');

const res = husband.myHusband.getSalary();
const res1 = husband.myHusband.getFriends();
const res2 = husband.myHusband.isSober();
//const res3 = husband.myHusband.getCount();

//console.log(res);
//console.log(res1);
//console.log(res2);
//console.log(res3);

function showCount() {
    const res3 = husband.myHusband.getCount();
    return res3;
}
module.exports.showCount = showCount;
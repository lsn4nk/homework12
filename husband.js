class Husband {
    getSalary () {
        const salary = 1000;
        const newSalary = salary - 200;
        return newSalary;
       
    }
    getFriends() {
        const friends = ['Antonio', 'Sergio', 'Pablo', 'Alehandro', 'Nikola'];
        let friendsForWife = [];
        for(let i = 0; i <= 2; i++) {
            friendsForWife.push(friends[i]);
        }
        return friendsForWife;
    }
    isSober() {
        const sober = true;
        if(sober === true || false) {
            return "ТРЕЗВЫЙ";
        }
    }
}

module.exports.myHusband = new Husband();
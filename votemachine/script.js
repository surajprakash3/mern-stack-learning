
let votes = {
    bjp: 0,
    rjd: 0,
    ntp: 0
};

function adddata(party) {
    votes[party]++;
    document.getElementById(party).innerText = votes[party];
}


// let votes = {
//     bjp: 0,
//     rjd: 0,
//     ntp: 0
// };

// function voteBJP() {
//     votes.bjp++;
//     document.getElementById("bjp").innerText = votes.bjp;
// }

// function voteRJD() {
//     votes.rjd++;
//     document.getElementById("rjd").innerText = votes.rjd;
// }

// function voteNTP() {
//     votes.ntp++;
//     document.getElementById("ntp").innerText = votes.ntp;
// }



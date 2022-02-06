class FotboolTeam {
    constructor(){
        this.teamA = this.getStartedTeam();
        this.teamB = this.getStartedTeam();
    }
    getStartedTeam(){
        return [...Array(11).keys()].map(el => el+=1).map(el=>({'name': el, 'card': '0'}));
    }
    getStillStanding(arr){
        arr.map(el=>{
            const gamer = el.split('');
            if(gamer.length === 4){
                gamer[1] = gamer[1]+gamer[2];
                gamer[2] = gamer[3];
            }
            if(gamer[0] === 'A'){
                this.teamA = this.getFilteredArr(this.teamA, gamer[1], gamer[2])
            };
            if(gamer[0] === 'B'){
                this.teamB = this.getFilteredArr(this.teamB, gamer[1], gamer[2])
            }
        })
        return ([].concat(this.teamA.length, this.teamB.length));
    }
    getFilteredArr(arr, number, letter){
        let findGamer = arr.find(gamer=>gamer.name===+number);
        return (letter === 'R'
        ? arr.filter(gamer=>gamer!==findGamer)
        : this.getFinalArrWithY(arr, findGamer));
    }
    getFinalArrWithY(arr, searchGamer){
        return arr.reduce((acc, el)=> el===searchGamer
        ? el.card==='Y'? [...acc]
        : [...acc, {...el, card: 'Y'}]
        : [...acc, el], [])
    }
}
const footbool = new FotboolTeam();
// console.log(footbool.getStillStanding([]));//[11, 11]
// console.log(footbool.getStillStanding(['A4Y', "A4Y"])); //[10, 11]
// console.log(footbool.getStillStanding(['A4Y', "A4R"])); //[10, 11]
// console.log(footbool.getStillStanding(['A4Y', "A5R", "B5R", "A4Y", "B6Y"])); //[9,10]
// console.log(footbool.getStillStanding(['A4R', "A4R", "A4R"]));//[10, 11]
console.log(footbool.getStillStanding(['A4R', "A6R", "A8R", "A10R", "A11R"])); //[6, 11]

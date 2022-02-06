class HalfOfFame {
    constructor(size, players){
        this.size = size || 5;
        this.players = players;
        this.list = players ? this.getArrRightLength(this.getSortedArr([...players])) : [];
    }
    add(player){
        if(this.list.length===0){
            this.list.push(`${player[0]}: ${player[1]}`);
            return;
        }
        let changePlayer;
        const newArrPlayers = this.list.reduce((acc, el, _, arr)=>{
            const gamer = el.split(': ');
            if(gamer[0]===player[0] && gamer[1]<player[1]){
                changePlayer = 1;
                return [...acc, `${gamer[0]}: ${player[1]}`]
            }
            if(el===arr[arr.length-1] && gamer[1]<player[1] && !changePlayer && arr.length<=this.size){
                return [...acc, el, `${player[0]}: ${player[1]}`]
            }
            return [...acc, el]
    }, []);
    const resArr = this.getSortedArr(newArrPlayers);
    this.list = resArr.length>this.size ? resArr.slice(0, this.size) : resArr;
}
    getList(){
        return(this.list);
    }
    getSortedArr(arr){
        console.log('arr', arr);
        return arr.sort().map(el=>{
            const gamer = el.split(': ');
            return ({name: gamer[0], score: gamer[1]})
        })
        .sort((a, b)=>b.score-a.score)
        .map(el=>`${el.name}: ${el.score}`);
    }
    getArrRightLength(arr){
        console.log('this.size', this.size);
        return (arr.length>this.size ? arr.slice(0, this.size) : arr);
    }
}
const playes1 = new HalfOfFame(3, ['Ann: 42', 'Man: 21', 'Albert: 88']);
playes1.add(['Gary', 542]);
console.log(playes1.getList());
playes1.add(['Ann', 102]);
console.log(playes1.getList());
playes1.add(['Den', 15]);
console.log(playes1.getList());

const playes2 = new HalfOfFame();
playes2.add(['Den', 15]);
console.log(playes2.getList());
playes2.add(['Ann', 102]);
console.log(playes2.getList());

class HalfOfFame {
    constructor(size, players){
        this.size = size || 5;
        this.players = players;
        this.list = players ? this.getSortedArr([...players]) : [];
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
    this.list = this.getSortedArr(newArrPlayers);
}
    getList(){
        return(this.list);
    }
    getSortedArr(arr){
        const newArr = arr.sort().map(el=>{
            const gamer = el.split(': ');
            return ({name: gamer[0], score: gamer[1]})
        })
        .sort((a, b)=>b.score-a.score)
        .map(el=>`${el.name}: ${el.score}`);
        return (newArr.length>this.size ? newArr.slice(0, this.size) : newArr);
    }
}
const playes1 = new HalfOfFame(3, ['Ann: 42', 'Man: 21', 'Albert: 88']);
console.log(playes1.list);
playes1.add(['Gary', 542]);
console.log(playes1.list);
playes1.add(['Ann', 102]);
console.log(playes1.list);
playes1.add(['Den', 15]);
console.log(playes1.list);

const playes2 = new HalfOfFame();
playes2.add(['Den', 15]);
console.log(playes2.list);
playes2.add(['Ann', 102]);
console.log(playes2.list);
playes2.add(['Gary', 542]);
console.log(playes2.list);
playes2.add(['Ann', 102]);
console.log(playes2.list);
playes2.add(['Kat', 115]);
console.log(playes2.list);
playes2.add(['Mary', 175]);
console.log(playes2.list);

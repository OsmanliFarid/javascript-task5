const numstr = () => {
    let money = prompt("Pul daxil et")
    let dot = money.split(".")

    let manat = dot[0]
    let qəpik = dot[1]

    return `${manat} manat ${qəpik} qəpik`
}

const a = numstr();
console.log(a);

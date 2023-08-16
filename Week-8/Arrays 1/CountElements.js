const countElements = ()=> {
    let input = prompt().split(",");
    return input.length
}

console.log(`countElements() output : ${countElements()}`);
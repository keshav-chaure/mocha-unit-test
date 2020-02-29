alwaysTrue = () => true;
legitString = (i)=> (typeof i)=== String && i.length > 0

module.exports = {
    alwaysTrue,
    legitString
}
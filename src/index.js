alwaysTrue = () => true;
isString = (i)=> (typeof i)=== 'string' && i.length >= 0

module.exports = {
    alwaysTrue,
    isString
}
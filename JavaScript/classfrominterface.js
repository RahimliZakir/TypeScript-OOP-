var FromInterface = /** @class */ (function () {
    function FromInterface() {
    }
    FromInterface.prototype.Pow = function (a) {
        return Math.pow(a, 2);
    };
    return FromInterface;
}());
var state = new FromInterface();
var powed = state.Pow(7);
alert(powed);
export {};

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Person } from './classto.js';
var Workers = /** @class */ (function (_super) {
    __extends(Workers, _super);
    function Workers(ad, soyad, yash) {
        return _super.call(this, ad, soyad, yash) || this;
    }
    return Workers;
}(Person));
// Polymorphism
var w1 = new Workers("Name", "Surname", 33);
var w2 = new Person("Name2", "Surname2", 22);
var workersArray = [w1, w2];
workersArray.forEach(function (item) {
    console.log(item.name + "," + item.surname + "," + item.age);
});

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//clase padre Vehiculo
var Vehiculo = /** @class */ (function () {
    function Vehiculo(_marca, _modelo, _nRuedas, _velocidadMaxima) {
        this._marca = _marca;
        this._modelo = _modelo;
        this._nRuedas = _nRuedas;
        this._velocidadMaxima = _velocidadMaxima;
    }
    Object.defineProperty(Vehiculo.prototype, "marca", {
        get: function () {
            return this._marca;
        },
        set: function (value) {
            this._marca = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehiculo.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        set: function (value) {
            this._modelo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehiculo.prototype, "nRuedas", {
        get: function () {
            return this._nRuedas;
        },
        set: function (value) {
            this._nRuedas = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehiculo.prototype, "velocidadMaxima", {
        get: function () {
            return this._velocidadMaxima;
        },
        set: function (value) {
            this._velocidadMaxima = value;
        },
        enumerable: false,
        configurable: true
    });
    Vehiculo.prototype.arrancar = function () {
        return "Arrancando";
    };
    return Vehiculo;
}());
//clase hija coche
var Coche = /** @class */ (function (_super) {
    __extends(Coche, _super);
    function Coche(_marca, _modelo, _nRuedas, _velocidadMaxima, _traccion) {
        var _this = _super.call(this, _marca, _modelo, _nRuedas, _velocidadMaxima) || this;
        _this._traccion = _traccion;
        return _this;
    }
    Object.defineProperty(Coche.prototype, "traccion", {
        get: function () {
            return this._traccion;
        },
        set: function (value) {
            this._traccion = value;
        },
        enumerable: false,
        configurable: true
    });
    Coche.prototype.arrancar = function () {
        return 'arrancando el coche';
    };
    Coche.prototype.abrirCapo = function () {
        return 'abriendo el capo del coche';
    };
    return Coche;
}(Vehiculo));
//clase hija moto
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(_marca, _modelo, _nRuedas, _velocidadMaxima, _cilindrada) {
        var _this = _super.call(this, _marca, _modelo, _nRuedas, _velocidadMaxima) || this;
        _this._cilindrada = _cilindrada;
        return _this;
    }
    Object.defineProperty(Moto.prototype, "cilindrada", {
        get: function () {
            return this._cilindrada;
        },
        set: function (value) {
            this._cilindrada = value;
        },
        enumerable: false,
        configurable: true
    });
    Moto.prototype.arrancar = function () {
        return 'arrancando la moto';
    };
    Moto.prototype.caballito = function () {
        return 'hacer un caballito';
    };
    return Moto;
}(Vehiculo));

var v1 = new Vehiculo("BMW", "M3", 4, 250);
var v2 = new Vehiculo("Audi", "a4", 4, 260);
var c1 = new Coche("BMW", "M5", 4, 270, "trasera");
var m1 = new Moto("Ducati", "Monster", 2, 310, 1000);
console.log(v1.arrancar());
console.log(v2.marca);
console.log(c1.arrancar());
console.log(c1.traccion);
console.log(c1.modelo);
console.log(c1.abrirCapo());
console.log(m1.arrancar());
console.log(m1.cilindrada);
console.log(m1.modelo);
console.log(m1.caballito());

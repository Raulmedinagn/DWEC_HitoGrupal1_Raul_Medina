//clase padre Vehiculo
class Vehiculo {
    private _marca: string;
    private _modelo: string;
    private _nRuedas: number;
    private _velocidadMaxima: number;
    
    constructor(_marca: string, _modelo: string, _nRuedas: number, _velocidadMaxima: number) {
        this._marca = _marca
        this._modelo = _modelo
        this._nRuedas = _nRuedas
        this._velocidadMaxima = _velocidadMaxima
    }

    public get marca(): string {
        return this._marca;
    }

    public set marca(value: string) {
        this._marca = value;
    }
    
    public get modelo(): string {
        return this._modelo;
    }
    public set modelo(value: string) {
        this._modelo = value;
    }

    public get nRuedas(): number {
        return this._nRuedas;
    }
    public set nRuedas(value: number) {
        this._nRuedas = value;
    }
    public get velocidadMaxima(): number {
        return this._velocidadMaxima;
    }
    public set velocidadMaxima(value: number) {
        this._velocidadMaxima = value;
    }

    arrancar(){
        return "Arrancando";
    }

}

//clase hija coche
class Coche extends Vehiculo {
    private _traccion: string;
    
    constructor(_marca: string, _modelo: string, _nRuedas: number, _velocidadMaxima: number, _traccion: string) {
        super(_marca, _modelo, _nRuedas, _velocidadMaxima);
        this._traccion = _traccion;
    }

    public get traccion(): string {
        return this._traccion;
    }
    public set traccion(value: string) {
        this._traccion = value;
    }

    arrancar(){
        return 'arrancando el coche';
    }

    abrirCapo(){
        return 'abriendo el capo del coche';
    }

}


//clase hija moto
class Moto extends Vehiculo {
    private _cilindrada: number;

    constructor(_marca: string, _modelo: string, _nRuedas: number, _velocidadMaxima: number, _cilindrada: number) {
        super(_marca, _modelo, _nRuedas, _velocidadMaxima);
        this._cilindrada = _cilindrada
    }

    public get cilindrada(): number {
        return this._cilindrada;
    }
    public set cilindrada(value: number) {
        this._cilindrada = value;
    }

    arrancar(){
        return 'arrancando la moto';
    }

    caballito(){
        return 'hacer un caballito';
    }

}

let v1 = new Vehiculo("BMW","M3",4,250);

let v2 = new Vehiculo("Audi","a4",4,260);

let c1 = new Coche("BMW","M5",4,270,"trasera");

let m1 = new Moto("Ducati","Monster",2,310,1000);

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
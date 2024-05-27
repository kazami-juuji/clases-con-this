class MiClase {
    // cuando usas this, haces referencia a los elementos de la clase
    // a las funciones se les llama metodos, y las variables se llaman propiedades
    #nombre;
    #apellido;
    constructor(nombre, apellido) {
        this.#nombre = nombre
        this.#apellido = apellido
    }
    get_nombre() {
        return this.#nombre;
    }
    get_apellido() {
        return this.#apellido;
    }
    set_nombre(nombre) {
        this.#nombre = nombre;
    }
    set_apellido(apellido) {
        this.#apellido = apellido;
    }

    mis_datos () {
        console.log(`
            nombre:${this.get_nombre()},
            apellido:${this.get_apellido()}
        `);
    }
}
// new crea un nuevo espacio de memoria a partir de la clase
let clase = new MiClase('mauricio','palma');
clase.nombre = 'aña';
clase.set_nombre('julia')
let clase2 = new MiClase('andrea','martinez');
clase.mis_datos();
clase2.mis_datos();

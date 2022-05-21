let glMatrix = require("../js/gl-matrix-3.3.0.min")


var mat4=glMatrix.mat4;
var vec4=glMatrix.vec4;

class Plano {

    // constructor(ancho,largo, filas, columnas) {
    constructor(ancho,largo) {
        this.ancho = ancho;
        this.largo = largo;
    }

    getPosicion=function(u,v, matrix = mat4.create()){

        console.log("Boenaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaas");

        var x=(u-0.5)*this.ancho;
        var z=(v-0.5)*this.largo;
        let vec4d = fromValues(x, 0, z, 1);
        vec4.transformMat4(vec4d, vec4d, matrix);
        // return [x,0,z];
        return [vec4d[0],vec4d[1],vec4d[2]];
    }

    getNormal=function(u,v){
        return [0,1,0];
    }

    getCoordenadasTextura=function(u,v){
        return [u,v];
    }
}
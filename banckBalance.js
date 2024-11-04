let cuenta = [340000, -20000, 5000, 60000, -20000]

const calculateBalances = (array) =>{
    let suma = 0;
    array.forEach(monto => {
        suma +=monto;
    });
    return suma;
}
const retiros = (array) => {
    let resta = 0;
    array.forEach(retiro => {
        if(retiro<0){
            resta+=retiro;
        }
    });
    return resta*-1; //lo convierto en positivo
}
const depositos = (array) =>{
    let suma = 0;
    array.forEach(element => {
        if (element>0) {
            suma+=element;
        }
    });
    return suma;
}

const bankBalance = (nombre, apellido, calculateBalances,retiros,depositos) => {
console.log(`estimada ${nombre} ${apellido}: `);
console.log(`el monto total de los depositos es de: ${depositos}`);
console.log(`el monto total de los retiros es de: ${retiros}`);
console.log(`Por lo tanto, su saldo actual en la cuenta es de: ${calculateBalances}`);

}


bankBalance("Olga", "Perez", calculateBalances(cuenta), retiros(cuenta), depositos(cuenta));

module.exports = bankBalance;
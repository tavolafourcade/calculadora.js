function dividir(n1,n2){
  if (n2 == 0){
    return "No se puede dividir por cero"
  }
  return n1 / n2;
}

module.exports.dividir = dividir;

// console.log(dividir(5,1))
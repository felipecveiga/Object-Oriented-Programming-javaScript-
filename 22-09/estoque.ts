let estoque = ["celular","jogos","eletronicos"]
estoque.push('roupas');
console.log(estoque);
estoque.shift();
console.log(estoque);
estoque.splice(1,1, "barbeador", "ventilador")
console.log(estoque);
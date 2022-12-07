let dados = gets().split(" ");
let arr = [];

for (i = 0; i < 4; i++) {
    arr.push(dados[i]);
    
}

max_valor = Math.max(...arr) 

print(max_valor);
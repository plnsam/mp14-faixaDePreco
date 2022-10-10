function criarFaixa(tooltip,min,max){
  this.tooltip = tooltip,
  this.min = min,
  this.max = max
};

let faixas = [
  new criarFaixa('Até R$60', 0, 60),
  new criarFaixa('Até R$100', 61, 100),
  new criarFaixa('Até R$200', 101, 200),
  new criarFaixa('Até R$400', 201, 400),
  new criarFaixa('Acima de R$400', 401, 999999)
]

console.log(faixas)
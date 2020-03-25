function myFunction(){
	var input, filter, ul, li, a, i, j;
	input = document.getElementById('myInput');
	filter = input.value.toUpperCase();

	let myuls = ['Fundamentos', 'Números Primos', 'Funções da Teoria dos Números', 'Aritmética Modular', 'Sistemas Numéricos', 'Diversos', 'Fundamentos2', 'Árvores', 'Avançado', 'DP Otimizações', 'Tarefas', 'Fundamentos3', 'Avançado2', 'Tarefas2', 'Matrizes', 'Fundamentos4', 'Técnica', 'Tarefas3', 'Procura', 'Integração', 'Operações elementares', 'Polígonos', 'Sweep Line', 'Convex Hull', 'Diversos2', 'Travessia', 'Componentes', 'fonte única', 'pares', 'Árvores geradoras', 'Ciclos', 'LCA', 'Fluxos', 'Correspondências', 'Diversos3', 'Sequências', 'jogos', 'Cronograma', 'Diversos4'];
	for(j=0; j < myuls.length; j++){
		ul = document.getElementById(myuls[j]);
		li = ul.getElementsByTagName('li');

		for(i=0; i < li.length; i++){
			a = li[i].getElementsByTagName('a')[0];
			if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
				li[i].style.display = "";
			}

			else{
				li[i].style.display = "none";
			}
		}
   }
   
	

}
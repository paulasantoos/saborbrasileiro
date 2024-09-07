function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

      if (!campoPesquisa){
        section.innerHTML = "<p>Nenhuma receita foi encontrada, não foi digitado algo para buscar!</p>"
        return 
      }

      campoPesquisa = campoPesquisa.toLowerCase()


    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre os dados e cria elementos HTML para cada resultado
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.titulo.toLowerCase()
      tags = dado.tags.toLowerCase()

      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        // Cria uma div para cada resultado
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais Informaçoes</a>
      </div>
    `;
      }
      
    }

    if (!resultados) {
      resultados = "<p>Nenhuma receita foi encontrada</p>"

    }
  
    // Atribui a string com os resultados ao conteúdo da seção
    section.innerHTML = resultados;
  }

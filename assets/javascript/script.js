function exclusao() {
    var decisao = confirm("Deseja realmente excluir este curso?");
    if (decisao){
        alert("Curso excluido com sucesso");
    } else {
        return false;
    }
}

function excluirCurso() {
    var nomeCurso = document.getElementById("nome-curso").value;

    if (nomeCurso.trim() === "") {
        alert("Digite o nome do curso que deseja excluir");
    } else {
        var decisao = confirm("Deseja realmente excluir o curso " + nomeCurso + "?");
        if (decisao) {
            alert("Curso " + nomeCurso + " excluído com sucesso");
        }
    }
    window.location.reload();
}

function editarCurso() {
    var nomeCurso = document.getElementById("nome-curso").value;

    if (nomeCurso.trim() === "") {
        alert("Digite o nome do curso que deseja editar");
    } else {
        alert("Curso " + nomeCurso + " editado com sucesso");    }
        window.location.reload();
}

function cadastrarCurso() {
    var nomeCurso = document.getElementById("nome-curso").value;
    var descricaoCurso = document.getElementById("descricao-curso").value;


    if (nomeCurso.trim() === "") {
        alert("Digite o nome do curso");
    } else if (descricaoCurso.trim() === "") {
        alert("Digite a descrição")
    }
     else {
        alert("Curso " + nomeCurso + " cadastrado com sucesso");    }
        window.location.reload();
}
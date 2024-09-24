const AlunoModel = require("../models/AlunoModel")
const alunos = require("../data/data")



//controle de ids
let id = 7

class AlunoService {

    static listar() {
        return alunos
    }

    //getById
    static getById(id) {
        let aluno = alunos.find(aluno => aluno.id == id)
        if(aluno) return aluno
        return {error: "Aluno não encontrado"}
    }

    static criar(data) {
        let novoAluno = new AlunoModel (
            ++id,
            data.nome,
            data.curso,
            data.ira
        )
        alunos.push(novoAluno)
        return novoAluno
    }

    static editar(id, data) {
        let aluno = alunos.find(aluno => aluno.id == id)
        aluno.nome = data.nome
        aluno.curso = data.curso
        aluno.ira = data.ira
        return aluno
    }

    //delete
    static delete(id) {
        let index = alunos.findIndex(aluno => aluno.id == id)
        if(index == -1) return {error: "Aluno não encontrado"}
        alunos.splice(index,1)
        return {message: "Aluno removido com sucesso"}
    }

    // static recuperar(id) {
    //     for(let i=0; i<professores.length; i++) {
    //         if(professores[i].id == id) return professores[i]
    //     }
    //     return null
    // }

    // static atualizar(id, professor) {
    //     for(let i=0; i<professores.length; i++) {
    //         if(professores[i].id == id){
    //             professores[i].nome = professor.nome
    //             professores[i].curso = professor.curso
    //             professores[i].titulacao = professor.titulacao
    //             professores[i].universidade = professor.universidade
    //             professores[i].ai = professor.ai
    //             return professores[i]
    //          }
    //     }
    // }

    // static apagar(id) {
    //     for(let i=0; i<professores.length; i++) {
    //         if(professores[i].id == id){
    //             professores.splice(i,1)
    //             return true
    //         }
    //     }
    //     return false
    // }

}

module.exports = AlunoService
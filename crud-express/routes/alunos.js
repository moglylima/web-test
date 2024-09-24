var express = require('express');
var router = express.Router();

const AlunoService = require("../services/AlunoService");

const { request } = require('express');
const { response } = require('express');

router.get(
    "/listar",
    (request,response,next) => {
        response.json(AlunoService.listar())
    }
)

// router.get(
//     "/listar",
//     (request,response,next) => {
//        ProfessorServiceMongo.listar(request,response)
//     }
// )

router.get(
    "/recuperar/:id",
    (request, response, next) => {
        const id = request.params.id
        const aluno = AlunoService.getById(id)
        response.json(aluno)
    }
)

router.post(
    "/criar",
    (request,response,next) => {
        let aluno = request.body
        response.json(AlunoService.criar(aluno))
    }
)

router.put(
    "/editar/:id",
    (request,response,next) => {
        const alunoAtualizado = 
            AlunoService.editar(
                request.params.id,
                request.body
            )
        response.json(alunoAtualizado)
    }
)

router.delete(
    "/apagar/:id",
    (request,response,next) => {
        const res = AlunoService.delete(request.params.id)
        response.json(res)
    }
)



// router.get(
//     "/recuperar/:id",
//     (request, response, next) => {
//         const id = request.params.id
//         const professor = ProfessorService.recuperar(id)
//         response.json(professor)
//     }
// )

// router.get(
//     "/recuperar/:id",
//     (request, response, next) => {
//        ProfessorServiceMongo.recuperar(request,response)
//     }
// )


// router.post(
//     "/criar",
//     (request,response,next) => {
//         const novoProfessor = ProfessorService.criar(request.body)
//         response.json(novoProfessor)
//     }
// )

//MONGODB
// router.post(
//     "/criar",
//     (request,response,next) => {
//         ProfessorServiceMongo.criar(request,response)
//     }
// )

// router.put(
//     "/atualizar/:id",
//     (request,response,next) => {
//         const professorAtualizado = 
//             ProfessorService.atualizar(
//                 request.params.id,
//                 request.body
//             )
//         response.json(professorAtualizado)
//     }
// )

// router.put(
//     "/atualizar/:id",
//     (request,response,next) => {
//         ProfessorServiceMongo.atualizar(request,response)
//     }
// )

// router.delete(
//     "/apagar/:id",
//     (request,response,next) => {
//         const res = ProfessorService.apagar(request.params.id)
//         response.json({"res":res})
//     }
// )

// router.delete(
//     "/apagar/:id",
//     (request,response,next) => {
//         ProfessorServiceMongo.delete(request,response)
//     }
// )

module.exports = router;
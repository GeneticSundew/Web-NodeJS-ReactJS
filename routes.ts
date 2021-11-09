import { Router, request, response, Request, Response } from "express";

import { getCadastros, saveCadastro, getCadastro, updateCadastro, deleteCadastro, finishedCadastro } from "./controller/CadastroController";

const routes = Router()

routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Hello Turma!' })
})

routes.get('/cadastro', getCadastros)
routes.post('/cadastro', saveCadastro)
routes.get('/cadastro/:id', getCadastro)
routes.put('/cadastro/:id', updateCadastro)
routes.delete('/cadastro/:id', deleteCadastro)
routes.patch('/cadastro/:id',finishedCadastro)

export default routes
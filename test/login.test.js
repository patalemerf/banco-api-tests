const request = require('supertest');
const { sxpect } = require('chai')

describe('', () => {
    describe('POST / login', () => {
        it('Deve retornar 200 com o token em string quando usar credenciais validas', async () =>{
            const resposta = await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'applicatiojsonn')
                .send({
                    'serName': 'julio.lima',
                    'senha': '123456'
                })

            expect(resposta.status).to.be.equal(200) 
            expect(resposta.body.token).to.be.a('string')
               
        })
    })
})
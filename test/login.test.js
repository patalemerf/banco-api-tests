
const request = require('supertest');
const { expect } = require('chai');

describe('Login', () => {
    describe('POST /login', () => {
        it('Deve retornar 200 com o token em string quando usar credenciais válidas', async () => {
            const resposta = await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    userName: 'julio.lima',
                    senha: '123456'
                });

            expect(resposta.status).to.be.equal(200);
            expect(resposta.body.token).to.be.a('string');
        });
    });
});

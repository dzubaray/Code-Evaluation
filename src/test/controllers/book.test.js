process.env.NODE_ENV = 'test'

const expect = require('chai').expect
const request = require('supertest')

const app = require('../../../src/index.js')

describe('Orderbook api', () => {
    it('should get the tips of the orderbook', (done) => {
      request(app)
        .get('/v1/api/book/tBTCUSD')
        .expect(200)
        .then((res) => {
          const body = res.body

          expect(body).to.contain.property('ok')
          expect(body.ok).to.equal(true)

          expect(body).to.contain.property('data')
          expect(body.data).to.be.an('array').that.is.not.empty
          done()
        })
        .catch((err) => done(err))
    })

    it('should get an error for invalid trading pair param', (done) => {
        const param = 'invalid-trading-pair'
        request(app)
          .get('/v1/api/book/' + param)
          .expect(400)
          .then((res) => {
            const body = res.body
  
            expect(body).to.contain.property('ok')
            expect(body.ok).to.equal(false)
  
            expect(body).to.contain.property('errors')
            expect(body.errors).to.be.an('object')

            expect(body.errors).to.contain.property('symbol')
            expect(body.errors.symbol).to.be.an('object')

            expect(body.errors.symbol).to.contain.property('value')
            expect(body.errors.symbol.value).to.be.an('string')
            expect(body.errors.symbol.value).to.equal(param)

            expect(body.errors.symbol).to.contain.property('msg')
            expect(body.errors.symbol.msg).to.be.an('string')
            expect(body.errors.symbol.msg).to.equal('The trading pair must be either \'tBTCUSD\' or \'tETHUSD\'')

            expect(body.errors.symbol).to.contain.property('param')
            expect(body.errors.symbol.param).to.be.an('string')
            expect(body.errors.symbol.param).to.equal('symbol')

            expect(body.errors.symbol).to.contain.property('location')
            expect(body.errors.symbol.location).to.be.an('string')
            expect(body.errors.symbol.location).to.equal('params')

            done()
          })
          .catch((err) => done(err))
    })
})

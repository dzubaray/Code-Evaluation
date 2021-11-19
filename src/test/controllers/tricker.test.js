process.env.NODE_ENV = 'test'

const expect = require('chai').expect
const request = require('supertest')

const app = require('../../../src/index.js')

describe('Tricker api', () => {

    it('should get the tips of the orderbook', (done) => {
        const tradingType = 'trading'
        const orderSize = 'high'
        request(app)
          .get(`/v1/api/tricker/ETH-USD/${tradingType}/${orderSize}`)
          .expect(200)
          .then((res) => {
            const body = res.body
  
            expect(body).to.contain.property('ok')
            expect(body.ok).to.equal(true)

            expect(body).to.contain.property('tradingType')
            expect(body.tradingType).to.equal(tradingType)

            expect(body).to.contain.property('orderSize')
            expect(body.orderSize).to.equal(orderSize)

            expect(body).to.contain.property('price')
            expect(body.price).to.be.an('number')

            done()
          })
          .catch((err) => done(err))
    })

    it('should get an error for invalid trading pair param', (done) => {
        const param = 'invalid-trading-pair'
        request(app)
          .get(`/v1/api/tricker/${param}/funding/low`)
          .expect(400)
          .then((res) => {
            const body = res.body
  
            expect(body).to.contain.property('ok')
            expect(body.ok).to.equal(false)

            expect(body).to.contain.property('errors')
            expect(body.errors).to.be.an('object')

            expect(body.errors).to.contain.property('tradingPair')
            expect(body.errors.tradingPair).to.be.an('object')

            expect(body.errors.tradingPair).to.contain.property('value')
            expect(body.errors.tradingPair.value).to.be.an('string')
            expect(body.errors.tradingPair.value).to.equal(param)

            expect(body.errors.tradingPair).to.contain.property('msg')
            expect(body.errors.tradingPair.msg).to.be.an('string')
            expect(body.errors.tradingPair.msg).to.equal('The trading pair must be either \'BTC-USD\' or \'ETH-USD\'')

            expect(body.errors.tradingPair).to.contain.property('param')
            expect(body.errors.tradingPair.param).to.be.an('string')
            expect(body.errors.tradingPair.param).to.equal('tradingPair')

            expect(body.errors.tradingPair).to.contain.property('location')
            expect(body.errors.tradingPair.location).to.be.an('string')
            expect(body.errors.tradingPair.location).to.equal('params')

            done()
          })
          .catch((err) => done(err))
    })
})

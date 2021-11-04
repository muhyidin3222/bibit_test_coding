//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');

chai.should();
chai.use(chaiHttp);

//Our parent block
describe('Search', () => {
    /*
      * Test the /GET route
      */
    describe('/GET', () => {
        it('it should GET all the search', (done) => {
            chai.request(server)
                .get('/search?text=yes')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status');
                    res.body.should.have.property('statusCode');
                    res.body.should.have.property('payload');

                    done();
                });
        });

        it('it should GET all the search', (done) => {
            chai.request(server)
                .get('/search?text=yes')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status');
                    res.body.should.have.property('statusCode');
                    res.body.should.have.property('payload');
                    done();
                });
        });
    });
});
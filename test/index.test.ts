import {describe, it} from "@jest/globals";
import {app} from "../src";
import request from "supertest";

describe('Express', () => {

    it('GET /',  (done) => {

        request(app)
            .get('/')
            .expect(200)
            .end(done);
    });

    it('GET /error',  (done) => {

        request(app)
            .get('/error')
            .expect(200)
            .end((err, res) => {
                console.log(res.body);
                done();
            });
    });
});
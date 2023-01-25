import {describe, it, afterAll} from "@jest/globals";
import {app} from "../src";
import request from "supertest";

describe('Express', () => {

    // Set timeout for exit
    afterAll(async () => {
        await new Promise<void>(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
    });

    it('GET /',  (done) => {

        request(app)
            .get('/')
            .expect(200)
            .end(done);
    });
});
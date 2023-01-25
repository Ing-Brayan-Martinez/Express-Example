import {describe, test} from "@jest/globals";
import {app} from "../src";
import request from "supertest";

describe('Express', () => {

    test('GET /', async () => {

        request(app)
            .get('/')
            .expect(200)
            .end(function(err, res) {
                if (err) throw err;
            });
    });
});
"use strict"

import {Calculator} from "../../src/typescript/Calculator"

import * as chai from "chai"
const expect = chai.expect

describe("Calculator", () => {

  describe("#add", () => {
    context("with a = 1 and b = 2", () => {
      it("returns 3", () => {
        const c = new Calculator();

        expect(c.add(1,2)).to.be.equals(3)
      })
    })
  })
})

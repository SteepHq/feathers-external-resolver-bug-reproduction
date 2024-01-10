// For more information about this file see https://dove.feathersjs.com/guides/cli/service.test.html
import assert from "assert"
import { app } from "../../../src/app"

describe("messages service", () => {
  it("registered the service", () => {
    const service = app.service("messages")

    assert.ok(service, "Registered the service")
  })

  it("overrides with the result of the external resolver", async () => {
    const aMessage = await app
      .service("messages")
      .create({ text: "set from create call" }, { provider: "rest" })

    assert.equal(aMessage.text, "overridden by external resolver")
  })
})

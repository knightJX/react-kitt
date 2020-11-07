import React from "react"
import { render } from "@testing-library/react"
import Button from "./button"

test('first btn test ', () => {
    const wrapper = render(<Button>btn</Button>)
    const element = wrapper.queryByText("btn")
    expect(element).toBeInTheDocument()
})
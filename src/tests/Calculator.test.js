import React from "react";
import Calculator from "../containers/Calculator";
import { render, fireEvent } from "@testing-library/react";

describe("Calculator", () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator />);
  });

  it("should change running total on number enter", () => {
    const button4 = container.getByTestId("number4");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual("4");
  });

  it("should perform an addition", () => {
    const button1 = container.getByTestId("number1");
    const button4 = container.getByTestId("number4");
    const buttonAdd = container.getByTestId("operator-add");
    const buttonEquals = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button1);
    fireEvent.click(buttonAdd);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual("5");
  });

  it("should perform a subtraction", () => {
    const button7 = container.getByTestId("number7");
    const button4 = container.getByTestId("number4");
    const buttonSubtract = container.getByTestId("operator-subtract");
    const buttonEquals = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button7);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual("3");
  });

  it("should perform a multiplication", () => {
    const button3 = container.getByTestId("number3");
    const button5 = container.getByTestId("number5");
    const buttonMulti = container.getByTestId("operator-multiply");
    const buttonEquals = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button3);
    fireEvent.click(buttonMulti);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual("15");
  });

  it("should perform a division", () => {
    const button2 = container.getByTestId("number2");
    const button1 = container.getByTestId("number1");
    const button7 = container.getByTestId("number7");
    const buttonDiv = container.getByTestId("operator-divide");
    const buttonEquals = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDiv);
    fireEvent.click(button7);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual("3");
  });

  it("should concatenate multi clicks", () => {
    const button1 = container.getByTestId("number1");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button1);
    fireEvent.click(button1);
    fireEvent.click(button1);
    expect(runningTotal.textContent).toEqual("111");
  });

  it("should clear without affecting calc", () => {
    const button1 = container.getByTestId("number1");
    const button2 = container.getByTestId("number2");
    const buttonAdd = container.getByTestId("operator-add");
    const buttonEquals = container.getByTestId("operator-equals");
    const buttonClear = container.getByTestId("clear");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button1);
    fireEvent.click(buttonAdd);
    fireEvent.click(button1);
    fireEvent.click(buttonClear);
    fireEvent.click(buttonAdd);
    fireEvent.click(button2);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual("3");
  });
});

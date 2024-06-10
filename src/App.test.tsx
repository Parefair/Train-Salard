import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  test('renders Train Salard', () => {
    render(<App />)
    const topicElement = screen.getByRole('heading', {
      name: "เทรน Sa-lard"
    })
    expect(topicElement).toBeInTheDocument()
  
    const inputElement = screen.getByRole("textbox", {
      name: "ข้อความก่อน debut"
    })
    expect(inputElement).toBeInTheDocument()
  
    const outputElement = screen.getByRole("textbox", {
      name: "ข้อความหลัง debut"
    })
    expect(outputElement).toBeInTheDocument()
  
    const translateButtonElement = screen.getByRole("button", {
      name: "แปล"
    })
    expect(translateButtonElement).toBeInTheDocument()
    
    const clearButtonElement = screen.getByRole("button", {
      name: "ล้าง"
    })
    expect(clearButtonElement).toBeInTheDocument()
  })

  test('render translate button', async() => {
    user.setup()
    render(<App />)
    const inputElement = screen.getByRole("textbox", {
      name: "ข้อความก่อน debut"
    })

    const outputElement = screen.getByRole("textbox", {
      name: "ข้อความหลัง debut"
    })

    const translateButtonElement = screen.getByRole("button", {
      name: "แปล"
    })

    await user.type(inputElement, '้ำสสน l;ylfu');
    await user.click(translateButtonElement)
    expect(outputElement).toHaveValue('hello สวัสดี');
  })

  test('render clear button', async() => {
    user.setup()
    render(<App />)
    const inputElement = screen.getByRole("textbox", {
      name: "ข้อความก่อน debut"
    })

    const outputElement = screen.getByRole("textbox", {
      name: "ข้อความหลัง debut"
    })

    const translateButtonElement = screen.getByRole("button", {
      name: "แปล"
    })

    await user.click(translateButtonElement)
    expect(inputElement).toHaveValue('');
    expect(outputElement).toHaveValue('');
  })
})

import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  test('renders Train Salard', () => {
    render(<App />)
    const topicElement = screen.getByRole('heading', {
      name: 'เทรน Sa-lard',
    })
    expect(topicElement).toBeInTheDocument()

    const inputElement = screen.getByRole('textbox', {
      name: 'ข้อความก่อน debut',
    })
    expect(inputElement).toBeInTheDocument()

    const outputElement = screen.getByRole('textbox', {
      name: 'ข้อความหลัง debut',
    })
    expect(outputElement).toBeInTheDocument()

    const translateButtonElement = screen.getByRole('button', {
      name: 'แปล',
    })
    expect(translateButtonElement).toBeInTheDocument()

    const clearButtonElement = screen.getByRole('button', {
      name: 'ล้าง',
    })
    expect(clearButtonElement).toBeInTheDocument()

    const imageElement = screen.getByAltText('logo')
    expect(imageElement).toBeInTheDocument()
  })

  test('render translate button', async () => {
    user.setup()
    render(<App />)
    const inputElement = screen.getByRole('textbox', {
      name: 'ข้อความก่อน debut',
    })

    const outputElement = screen.getByRole('textbox', {
      name: 'ข้อความหลัง debut',
    })

    const translateButtonElement = screen.getByRole('button', {
      name: 'แปล',
    })

    await user.type(inputElement, '้ำสสน l;ylfu ,k ฐ, ,')
    await user.click(translateButtonElement)
    expect(outputElement).toHaveValue('hello สวัสดี มา {} }')
  })

  test('render clear button', async () => {
    user.setup()
    render(<App />)
    const inputElement = screen.getByRole('textbox', {
      name: 'ข้อความก่อน debut',
    })

    const outputElement = screen.getByRole('textbox', {
      name: 'ข้อความหลัง debut',
    })

    const translateButtonElement = screen.getByRole('button', {
      name: 'แปล',
    })

    await user.click(translateButtonElement)
    expect(inputElement).toHaveValue('')
    expect(outputElement).toHaveValue('')
  })

  test('input alert should not be show if have input', async () => {
    user.setup()
    render(<App />)
    const inputElement = screen.getByRole('textbox', {
      name: 'ข้อความก่อน debut',
    })
    const alertElement = screen.queryByText('กรุณาใส่ข้อความก่อนแปล')
    await user.type(inputElement, '้ำ')
    expect(alertElement).not.toBeInTheDocument()
  })

  test('input alert should be show if input is empty', () => {
    render(<App />)
    const alertElement = screen.queryByText('กรุณาใส่ข้อความก่อนแปล')
    expect(alertElement).toBeInTheDocument()
  })
})

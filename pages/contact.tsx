/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { FaRegHandPointRight } from 'react-icons/fa'
import Page from 'src/components/page'
import Footer from 'src/components/footer'
import { ContactForm } from 'src/lib/types'
import { main, text, form } from 'src/styles'

const initialStateForm: ContactForm = {
  email: '',
  name: '',
  message: '',
  loading: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'email':
      return { ...state, email: action.value }
    case 'name':
      return { ...state, name: action.value }
    case 'message':
      return { ...state, message: action.value }
    case 'toggle':
      return { ...state, loading: !state.loading }
    case 'clear_state':
      return { ...initialStateForm }
    default:
      return state
  }
}

const Contact: React.FC = () => {
  const [formData, dispatch] = React.useReducer(reducer, initialStateForm)

  const inputHandler = (e) => {
    const { name, value } = e.target
    dispatch({ type: name, value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    dispatch({ type: 'toggle' })
    await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    })
    dispatch({ type: 'clear_state' })
  }

  return (
    <Page>
      <main css={main}>
        <section>
          <h1>
            Let's talk with me about coding, open-closed projects and business
          </h1>
          <p css={text}>
            It will be a pleasure to meet you, and talk more about your projects
            and ideas more deeply and in a personal way, send me a message and I
            will answer you as soon as possible.
          </p>
        </section>
        <form onSubmit={onSubmit} css={form}>
          <fieldset disabled={formData.loading} aria-busy={formData.loading}>
            <label htmlFor='email'>
              Email
              <input
                type='email'
                name='email'
                placeholder='email'
                value={formData.email}
                onChange={inputHandler}
                required
              />
            </label>
            <label htmlFor='name'>
              Name
              <input
                type='text'
                name='name'
                placeholder='name'
                value={formData.name}
                onChange={inputHandler}
                required
              />
            </label>
            <label htmlFor='message'>
              Message
              <input
                type='text'
                name='message'
                placeholder='message'
                value={formData.message}
                onChange={inputHandler}
                required
              />
            </label>
            <div className='containerSubmit'>
              <FaRegHandPointRight />
              <button type='submit'>SEND</button>
            </div>
          </fieldset>
        </form>
      </main>
      <Footer />
    </Page>
  )
}

export default Contact

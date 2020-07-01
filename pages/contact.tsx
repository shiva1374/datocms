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

const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState<ContactForm>(initialStateForm)

  const saveToFormData = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setFormData({ ...formData, loading: true })
    setFormData(initialStateForm)
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
                onChange={saveToFormData}
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
                onChange={saveToFormData}
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
                onChange={saveToFormData}
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

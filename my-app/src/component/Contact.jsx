import React from 'react'
import { styled } from 'styled-components'


const Contact = () => {
  
  return (
    <Wrapper>
  
    <h2>Contact</h2>
    <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6987.878204253044!2d70.6172203901197!3d28.
    87042934756616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
    1!3m3!1m2!1s0x393a1ad34cdc3de5%3A0x82ec5767379ce496!2sFateh%20Pur%20Kamal%2C%20Rahim%20Yar%20Khan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1689572888305!5m2!1sen!2s"
     width="100%"
      height="400"
       style={{border:0}}
       allowFullScreen="" 
        loading="lazy"
      referrerPolicy="no-referrer-when-downgrade">

      </iframe>
      <div className='contact-form'>
          <form action='https://formspree.io/f/xjvqkblg' method='post' className='formm'>
              <input type='text' placeholder='username' name='user' required autoComplete='off'/>
              <input type='email' placeholder='email' autoComplete='off' required/>
              <textarea name='message' col="30" rows="10" required autoComplete='off' placeholder='enter message'></textarea>
               <input type='submit' value="send"/>
          </form>
      </div>
      
      
    </Wrapper>
  )
}
const Wrapper = styled.section`
.contact-form{
  max-width: 50rem;
margin: auto;
}

h2{
  text-align: center;
  margin-top: 30px;
}
.formm{
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 30px;
  margin-bottom: 30px;
}
`

export default Contact
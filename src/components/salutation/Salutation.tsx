import React from 'react'
import './Salutation.scss'

const Salutation: React.FC = () => {
  return (
    <article className="panel--suggestions__salutation">
      {/* TODO: insert client name in prop */}
      <h1 className="panel--suggestions__salutation__title">Hello blala,</h1>
      <div className="panel--suggestions__salutation__content">
        Imagine, a customer of your company would have a conversation with you and ask you some questions. Which
        questions/reactions are most likely to occur and what answers would you prefer? Please choose the most
        appropriate intens by just clicking on them. Thank you!
      </div>
    </article>
  )
}

export default Salutation

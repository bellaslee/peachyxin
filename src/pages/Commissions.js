import React from 'react';

const commissionStatus = true;
const nextSlot = 'July';

const Commissions = () => {
  return (
    <React.Fragment>
      <section className="section">
        <h2>commissions</h2>
        <p>
          ✧ Before you order, please make sure to have read my Terms of Service. These terms apply to private commissions only. This information is NOT applicable to commercial work; therefore, the art can only be used for the client’s personal purposes. Please contact me for commercial licensing information.
        </p>
        <p>
          ✧ All prices below are base prices. Things that might increase the price include complex character designs, the number of characters, not being able to provide a good visual reference, complex backgrounds, and the amount of detail in the image in general.
        </p>
        <p>
          ✧ Additional characters +75%
        </p>
        <p>
          ✶ Will draw: original characters, fanart, real people, blood/mild gore

          ✶ Won't draw: explicit content, anthropomorphic characters, designs I feel that I cannot portray well
        </p>
        <p>
          ✧ All prices are in USD, payment through Paypal only
        </p>
      </section>

      <section className="section section--row">
        <h2>menu</h2>
        <div className="section__columns">
          <div className="section__column">
            <div className="section__column__thumbnail">
              <img src='./img/killerqueen.jpg' alt="Yoshikage Kira" />
            </div>
            <h3>Style A</h3>
            <p>A loose style with limited color palettes.</p>
            <ul>
              <li>Headshot: $30</li>
              <li>Bust: $50</li>
              <li>Fullbody: $100</li>
            </ul>
            <button className='button button--pink'>View more examples</button>
          </div>

          <div className="section__column">
            <div className="section__column__thumbnail">
              <img src='./img/yuta.jpg' alt="Okkotsu Yuta" />
            </div>
            <h3>Style B</h3>
            <p>A fully-rendered semi-realistic style.</p>
            <ul>
              <li>Headshot: $50</li>
              <li>Bust: $100</li>
              <li>Fullbody: $250</li>
            </ul>
            <button className='button button--pink'>View more examples</button>
          </div>

          <div className="section__column">
            <div className="section__column__thumbnail">
              <img src='./img/4taro.jpg' alt="Marine Jotaro" />
            </div>
            <h3>Background</h3>
            <p>Pricing varies.</p>
            <ul>
              <li>Graphic background: FREE
                <ul>
                  <li>Includes shapes, textures, etc.</li>
                </ul>
              </li>
              <li>Simple background: $20+</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>order now</h2>
        <p>
          Commissions are <em className='underline'>{commissionStatus ? 'open' : 'closed'}</em>. The next open slot is in <em className="bold">{nextSlot}</em>. Feel free to contact me to reserve a slot. Please send me an email at peachyxin(at)gmail(dot)com for quotes and inquiries.
        </p>
        <p>
          In your message, please include the following details:

          <ol>
            <li>Number of characters.</li>
            <li>Style and headshot / bust / full-body.</li>
            <li>Background type.</li>
            <li>Character reference image and/or character sheet.</li>
            <li>Description of character's personality or link to their wiki page.</li>
            <li>Any other specific details to be included in the image (e.g. pose, special accessories, etc.)</li>
            <li>It would be helpful if you could show me your favorite pieces of mine so I can try to emulate the style and overall vibe!</li>
            <li>Budget (if applicable, for example, if you are requesting a complex piece).</li>
            <li>Paypal email address for invoicing.</li>
          </ol>
        </p>
      </section>
    </React.Fragment>
  )
};

export default Commissions;
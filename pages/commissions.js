import React, { useEffect } from 'react';
import Link from 'next/link';

const commissionStatus = true;
const nextSlot = 'July';

function Commissions() {
  return (
    <>
      <section className="section section--first">
        <h2>commissions</h2>
        <p>
          ✧ Before you order, please make sure to have read my <Link href="../terms"><a><em className="bold underline">Terms of Service</em></a></Link>. These terms apply to private commissions only. This information is NOT applicable to commercial work; therefore, the art can only be used for the client’s personal purposes. Please contact me for commercial licensing information.
        </p>
        <p>
          ✧ All prices below are base prices. Things that might increase the price include complex character designs, the number of characters, not being able to provide a good visual reference, complex backgrounds, and the amount of detail in the image in general.
        </p>
        <p>
          ✧ Additional characters +100%
        </p>
        <p>
          ✶ Will draw: original characters, fanart, blood/mild gore<br />
          ✶ Won't draw: real people, explicit content, anthropomorphic characters, designs that I cannot portray well
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
              <img src='../img/diluc.jpg' alt="Yoshikage Kira" />
            </div>
            <h3>Sketch</h3>
            <p>Loose with rough brush strokes.</p>
            <ul>
              <li>Headshot: $30</li>
              <li>Bust: $50</li>
              <li>Fullbody: $100</li>
            </ul>
            <p><em className="underline">Note</em>: you can request that I fully render certain parts (e.g. face or hands only) for an additional fee.</p>
            {/* <button className='button button--pink'>View more examples</button> */}
          </div>

          <div className="section__column">
            <div className="section__column__thumbnail">
              <img src='../img/yuta.jpg' alt="Okkotsu Yuta" />
            </div>
            <h3>Full render</h3>
            <p>Fully-rendered completed piece.</p>
            <ul>
              <li>Headshot: $50</li>
              <li>Bust: $100</li>
              <li>Fullbody: $250</li>
            </ul>
            {/* <button className='button button--pink'>View more examples</button> */}
          </div>

          <div className="section__column">
            <div className="section__column__thumbnail">
              <img src='../img/4taro.jpg' alt="Marine Jotaro" />
            </div>
            <h3>Background</h3>
            <p>Pricing varies.</p>
            <ul>
              <li>Abstract background: FREE
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
        </p>
        <ol>
          <li>What kind of commission you are looking to get</li>
          <li>Character reference image(s).</li>
          <li>Reference image for pose, expression, and/or overall vibe</li>
          <li>Brief description of character's personality or link to their wiki page.</li>
          <li>Any other specific details to be included in the image</li>
          <li>At least one previous work of mine as a style example.</li>
        </ol>
      </section>
    </>
  )
};

export default Commissions;
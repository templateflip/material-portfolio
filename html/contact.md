---
layout: page
title: Contact
description: 'Your contact page description'
image: "img/contact.jpg"
---


<div class="mdl-card__supporting-text">
  <p>Contact our team using the contact form below:</p>
  <form action="https://formspree.io/email@example.com" method="POST" class="form-contact">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" pattern="[A-Z,a-z, ]*" type="text" id="Name" name="name">
          <label class="mdl-textfield__label" for="Name">Name...</label>
          <span class="mdl-textfield__error">Letters and spaces only</span>
      </div>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" id="Email" name="_replyto">
          <label class="mdl-textfield__label" for="Email">Email...</label>
      </div>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <textarea class="mdl-textfield__input" type="text" rows="5" id="note" name="message"></textarea>
          <label class="mdl-textfield__label" for="note">Enter note</label>
      </div>
      <p>
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" type="submit">
              Submit
          </button>
      </p>
  </form>
</div>
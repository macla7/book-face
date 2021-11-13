<h2>Setup activeadmin and create react app</h2>
<ul>
  <li>using <a href='https://blog.heroku.com/a-rock-solid-modern-web-stack'>this</a>rails + react guide.</li>
</ul>

<h2>Set up groups roughly following</h2>
<ul>
  <li>This <a href='https://coderedirect.com/questions/272589/many-to-many-users-and-groups-but-groups-have-owners'>coderdirect post</a>.</li>
  <li>As well as this <a href='https://stackoverflow.com/questions/37972980/best-approach-for-assigning-user-roles-for-different-groups-in-rails-5'>SO post</a>.</li>
</ul>

<h2>Trying to get Devise working on API</h2>
<ul>
  <li>Tried following <a href='https://jameschambers.co.uk/rails-api'>this</a> guide mainly, <a href='https://medium.com/ruby-daily/a-devise-jwt-tutorial-for-authenticating-users-in-ruby-on-rails-ca214898318e'>this one</a> also seemed helpful albeit simipler and I didn't use as much.</li>
  <li>Had to set secret token env variables, used <a href='https://blog.devgenius.io/what-are-environment-variables-in-rails-6f7e97a0b164'>this</a>.</li>
  <li>Needed to also set the default_url_options as according to <a href='https://stackoverflow.com/questions/7219732/rails-missing-host-to-link-to-please-provide-host-parameter-or-set-default-ur'>this SO post</a>.</li>
  <li>question now is.. how do these jwt tokens work and will it work with omniauth
  <li>Had to skip_session_storage on the user following the 3 option half way down the docs for <a href='https://github.com/waiting-for-dev/devise-jwt'>devise:jwt</a>.</li>

</ul>

<h2>Unanswered general issues</h2>
<ul>
  <li>question now is.. how do these jwt tokens work and will it work with omniauth...?</li>
  <li>At the moment I am storing my tokens in regular JS cookies... feel like this could be unsafe..? Revisit this</li>
</ul>

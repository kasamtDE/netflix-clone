import React, { useState ,useContext} from 'react';
import { auth } from '../../firebase';
import "./Footer.css"

function Footer() {

  return (
  <div className='footer-container'>
      <div className='questions'>Questions? Call 0800-000-7969</div>
       <p> current user is : { auth?.currentUser?.email}</p>
      <div className='footer-container-inner'>
          <ul>
              <li> <a href='https://help.netflix.com/tr/node/412'>FAQ</a> </li>
              <li> <a href='https://ir.netflix.net/ir-overview/profile/default.aspx'>Investor Relations</a></li>
              <li> <a href='https://devices.netflix.com/tr/'>Ways to Watch</a> </li>
              <li> <a href='https://help.netflix.com/en/node/68708'>Impressum</a> </li>
              <li> <a href='https://www.netflix.com/de-en/browse/genre/839338'>Only on Netflix</a> </li>
          </ul>
          <ul>
              <li> <a href='https://help.netflix.com/tr/'>Help Center</a> </li>
              <li> <a href='https://jobs.netflix.com/'>Jobs</a> </li>
              <li> <a href='https://help.netflix.com/legal/termsofuse'>Terms of Use</a> </li>
              <li> <a href='https://help.netflix.com/tr/contactus'>Contact Us</a> </li>
          </ul>
          <ul>
              <li> <a href='https://www.netflix.com/de-en/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount'>Account</a> </li>
              <li> <a href='https://www.netflix.com/de-en/redeem'> Redeem Gift Cards</a></li>
              <li> <a href='https://help.netflix.com/legal/privacy'>Privacy</a> </li>
              <li> <a href='https://fast.com/tr/'>Speed Test</a> </li>
          </ul>
          <ul>
              <li> <a href='https://media.netflix.com/tr/'>Media Center</a> </li>
              <li> <a href='https://www.netflix.com/gift-cards'>Buy Gift Cards</a> </li>
              <li> <a href='https://www.netflix.com/de-en/#'>Cookie Preferences</a> </li>
              <li> <a href='https://help.netflix.com/legal/notices'> Legal Notices</a></li>
          </ul>
      </div>
  </div>
  );
}

export default Footer;

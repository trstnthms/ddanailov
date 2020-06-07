import React from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'

import Slogan from '@ddanailov/styled/Slogan'

function TargetBlankExample() {
  // prettier-ignore
  const raw = 
`import React from 'react';
   
function CustomComponent() {
  return (
    <a href="http://ddanailov.dev/">
      My website
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));`

  return (
    <>
      <pre>
        <code className="language-javascript">{raw}</code>
      </pre>
    </>
  )
}

class Content extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }

  render() {
    return (
      <div>
        <Slogan>Make your React web apps discoverable - JavaScript SEO</Slogan>

        <p>The article takeaway is:</p>
        <ul>
          <li>What is behing GoogleBot</li>
          <li>The common SEO mistake ?</li>
          <li>Advance Google LightHouse</li>
        </ul>

        <h4>What is behind GoogleBot</h4>

        <p>My article wants to start with the official information by Google</p>
        <blockquote>
          Googlebot is the crawler that visits web pages to include them within
          Google Search index. The number one question we got from the community
          at events and social media was if we could make Googlebot evergreen
          with the latest Chromium. Today, we are happy to announce that
          Googlebot now runs the latest Chromium rendering engine (74 at the
          time of this post) when rendering pages for Search. Moving forward,
          Googlebot will regularly update its rendering engine to ensure support
          for latest web platform features.
        </blockquote>

        <p>
          Source:
          https://webmasters.googleblog.com/2019/05/the-new-evergreen-googlebot.html
        </p>

        <p>
          If you still don't understand what means my previous paragraph: I'll
          try to expain. Google Search Engine uses the latest Google Chrome
          version to fetch the useful data from your website.
        </p>

        <p>
          I want to add a personal tought: Googlebot Chrome version is not a
          Google Chrome mirror. I'm almost sure: Googlebot Chrome version must
          be between 70 % and 85 % percent Google Chrome mirror. The other
          fifteen percent are a crawler advantages: CPU, Memory, Network
          optimization.
        </p>

        <h4>The common mistakes?</h4>

        <h5>GoogleBot is more important vs the end user</h5>

        <p>
          The main Traffic in your website will be Google Searches. The next
          three sources are: Social Links, Direct Traffic, Link Building. SEO
          optimization is important and critical for us but if the content
          matches more GoogleBot soon or later the end result will be: bounce
          rate.
        </p>

        <h6>What's bounce rate ?</h6>

        <p>
          Bounce rate are unhappy users. The typical bounce rate session is
          between 1 second and 45 seconds. If the end user is not happy from the
          page content he or she will close the page.
        </p>

        <h6>Hyperlinks</h6>
        <p>
          If the hyperlink must be `target` blank. The item requires rel
          nofollow. Example:
        </p>
        <TargetBlankExample />

        <h6>Images</h6>

        <h6>Webp and Webm</h6>

        <h6>Image compression</h6>
      </div>
    )
  }
}

export default Content

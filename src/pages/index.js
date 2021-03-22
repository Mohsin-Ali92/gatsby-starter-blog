import * as React from "react"

//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>
      The cross-platform framework offers the most compelling web development
      experience
    </h2>
    {/* <StaticImage
      src="../images/my-blog1.jpg"
      width={900}
      height={500}
      quality={95}
      loading="lazy"
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}

    <img
      src="https://miro.medium.com/max/6293/0*YLqNrhW_NgI3MpGE"
      loading="lazy"
      alt="Hello World"
    />
    <p>
      Websites today, including the one you are using now, are written in HTML,
      JavaScript, and CSS. You probably read that and think to yourself well,
      yeah, that’s patently obvious. If I told you to create a website without
      using any of these three technologies, you would probably have some
      questions.
    </p>
    <p>
      And yet, throughout the course of history, we’ve had many players in this
      space. We’ve had Flash, we’ve had Silverlight, all competing technologies
      that have attempted to shave off a slice of the browser market, to let the
      developer use a different technology to create a website. But none of them
      have really ever taken off. So how is it possible that I am coming to you,
      dear reader, and telling you that there could yet again be a competitor in
      this space? Especially after literally none of the other players in this
      space have gone anywhere, despite years of effort?
    </p>
    <p>
      Well, let’s take a minute to appreciate the things that these past
      attempts have had in common, namely:
    </p>
    <br></br>
    <ol>
      <li>
        {" "}
        <strong>They needed a browser plugin to run.</strong> They normally need
        a platform-specific browser plugin to run on a targeted platform.
        Silverlight is a good example of this — at the time, people who use
        Linux couldn’t watch Netflix, as the site depended on Silverlight (which
        wasn’t available for Linux). Sure, there were open source alternatives,
        but nothing first-party.
      </li>
      <br></br>
      <li>
        <strong>They introduced security vulnerabilities. </strong>Flash was
        notorious for this <u>(with over 1,000 known vulnerabilities)</u>. The
        browser would have to load a plugin to display the content, and at that
        point, none of the security safeguards of the browser mattered, as the
        plugin had complete access to the host computer.
      </li>
      <br></br>
      <li>
        <strong>The performance was not as good as pure HTML.</strong> In terms
        of whether it was faster to load a plugin and display some text, it was
        always faster to just do it in raw HTML and CSS as opposed to trying to
        load a plugin to display some content for you.
      </li>
      <br></br>
      <li>
        <strong>HTML5 came, and CSS improved.</strong> Suddenly, creating
        beautiful, involving experiences wasn’t impossible. Better still,
        browsers that hated standards, used weird hacks, or used vendor-specific
        implementations instead of their CSS equivalents (like Internet
        Explorer) were killed off.
      </li>
    </ol>
    <p>
      All of these things made the choice to create a new web app in native HTML
      easy. After all, if the technology that you used to create your web
      experience got deprecated, and stopped receiving security fixes, then
      there would be no option but to rewrite your app from scratch in a new,
      supported language. But how did we get here in the first place? How did
      HTML become such a mainstay in today's thriving internet?
    </p>
    {/* <StaticImage
      src="../images/my-blog2.jpg"
      width={900}
      height={500}
      quality={95}
      loading="lazy"
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    <img
      src="https://miro.medium.com/max/6293/0*YLqNrhW_NgI3MpGE"
      loading="lazy"
      alt="Hello World"
    />
    <h3>The Dawn of a New Era</h3>
    <p>
      On the 6th of August 1991, <u>the web went live to the world</u>. Then
      eventually we had the so-called dot-com bubble come and go. Consider for a
      moment that the web only came into existence for public use in 1991, and
      then nine years later the dot-com bubble burst, costing an astonishing{" "}
      <u>$1.7 trillion</u>. That means that the dot-com bubble cost about as
      much as 15% of the United States’ GDP that same year.
    </p>
    <br></br>
    <p>
      We’re in that part of history because that’s about the time when the web
      was starting to become more and more formal, and the way we were writing
      websites was becoming more standardized. Over time, we gained standards
      like HTML4 that we could use, and these standards ensured that the HTML
      you write in your part of the world will work for most, if not all, HTML
      interpreters. Cascading Style Sheets (CSS) also entered circulation in
      1996, and the year before that, JavaScript also entered the scene. Can you
      imagine seeing or using a website with no JavaScript or CSS? It would not
      be an enjoyable experience, that’s for sure.
    </p>
    <br></br>
    <p>
      But throughout all of history, some things with the web stayed the same.
      To be fair, a lot of it had to: You would never want to introduce breaking
      changes to the HTML standard without an extremely good reason for doing
      so, so changing large swathes of how the web works in future versions was
      probably never going to happen. This left us with the web as we have it
      today, and what does that include?
    </p>
    <br></br>
    <p>
      <strong>The document</strong>
      <br></br>
      <br></br>When the web first came into existence, people were not using
      apps as they are today. Some of you may remember using terminals that
      acted as thin clients, giving you a physical connection to a mainframe on
      the other end of the physical connection. The “apps” (if you could call
      them that) that people had were little more than lines of text on a
      screen. People were used to dealing with things as documents, as physical
      pieces of paper in their hands that they could peruse. It comes as no
      surprise then that the basis of HTML pages is to produce an HTML document.
      If you’ve ever used any JavaScript, you will be familiar with functions
      like <i>document.getElementById().</i> Everything that you do on a webpage
      is to produce and then transform the document.
    </p>
    <br></br>
    <p>
      Traditionally, most webpages are too high to fit in one viewport. So the
      user would have to swipe through the page with their finger or scroll with
      the mouse. I can’t think of a website that I use today that fits neatly
      into the users’ viewport (certainly not this diatribe), so the developer
      would always be guaranteed that there would be some part of the page that
      would either be above or below where the user was currently looking on
      their page.
    </p>
    <br></br>
    <p>
      But still, you would want certain parts of your webpage to stay in a
      certain position or align in a certain way. You start using things like
      position in CSS to control where your elements are laid out. There’s a
      tonne of CSS properties <u>(520 to be exact)</u>, and as the name would
      imply, these styles cascade into their child elements. When you are trying
      to get a particular part of your document to look a certain way, it can
      get fairly chaotic. If you are using an existing styling framework like
      Angular Material, then it also gets pretty zesty, as you start to override
      the built-in CSS to achieve a certain look that you are after. CSS lets
      you override this by using !override, but once you start doing that, the
      battle is largely lost. If you’re reading this and thinking to yourself
      “What? This guy sounds like he is hopeless at CSS,” then that’s okay and I
      wouldn’t fight you on that point. But when your designers are chasing a
      certain look, the CSS can get pretty complicated.
    </p>
    {/* <StaticImage
      src="../images/my-blog3.jpg"
      width={900}
      height={500}
      quality={95}
      loading="lazy"
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    <img
      src="https://miro.medium.com/max/6293/0*YLqNrhW_NgI3MpGE"
      loading="lazy"
      alt="Hello World"
    />
    <p>
      <h3>Learning the languages</h3> In order to create a simple website, you
      need to be across three separate languages, and that’s purely for the
      website itself. That’s HTML, JavaScript, and CSS. Your website has to look
      and feel great, and it can’t do that if you don’t know how to write
      performant JavaScript or if your CSS styling is bad.
    </p>
    <br></br>
    <p>
      If you actually want your website to do anything, then you might use a
      framework like Angular or React. As you start to bring in packages via
      npm, the size of your app starts to grow, so you will also use a bundler
      like webpack to tie all your packages together and minify them
      appropriately. <u>Webpack</u> is a topic in itself (and a huge one at
      that) but it’s a worthwhile topic to consider and does form a considerable
      part of building web apps.
    </p>
    <p>
      <h3>Bundling and transpilations</h3> Once you have your website and you
      have your packages, you need to use a bundler to bundle up your client app
      and to make sure that it works in their browser. Depending on what browser
      they are using, you’ll also need to “shim” in certain features so the
      user’s browser can actually use your website. If you’re using a language
      like TypeScript, webpack also transpiles from this language into
      JavaScript. Nothing about this is inherently bad, but it is very complex
      and has a lot of moving parts. If your website breaks, did you mess up the
      code, or did the minification break it, or did webpack not include it
      properly, or did the transpilation process introduce a problem? These
      complicated pipelines can introduce difficulties in debugging or finding
      the root cause of issues in your app.
    </p>
    <p>
      <h3>How Is Flutter Any Better?</h3> If you’ve heard of Flutter, you’ve
      likely heard of it in the context of phone app development. So how on
      earth does it apply to websites? Well, with a normal HTML webpage, you
      deal with the page as a document. In Flutter though, the “page” (or what
      the user interacts with) is actually drawn to an HTML canvas. Flutter
      actually controls every pixel that is drawn to the screen and doesn’t use
      HTML, JavaScript, or CSS to define any of its look or logic. (Technically
      speaking, native Dart code is transpiled to JavaScript through dart2js,
      but no business logic is actually written in JavaScript.)
    </p>
    <br></br>
    <p>
      You’ve likely picked up two things alarming with that sentence. First, no
      HTML. Second, we’re drawing everything to the canvas. I get it — it sounds
      weird and, at least in the case of drawing to the canvas directly, not
      very performant. But let’s dig into this a little bit more.
    </p>
    {/* <StaticImage
      src="../images/my-blog4.jpg"
      width={900}
      height={500}
      quality={95}
      loading="lazy"
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    <img
      src="https://miro.medium.com/max/6293/0*YLqNrhW_NgI3MpGE"
      loading="lazy"
      alt="Hello World"
    />
    <p>
      <h3>Drawing into a canvas instead of a document</h3> The first point is
      that we’re not using HTML to write our webpages, nor are we writing things
      to a document. At first blush, this is complete heresy. But what exactly
      are you doing when you develop a webpage in HTML? Well, as we covered
      earlier in this article, you make a document that’s too big for the
      viewport of the users’ device, and then they scroll. What you’re reading
      right now on this very page, the document height is greater than that of
      the viewport. And you’re scrolling through the content.
    </p>
    <br></br>
    <p>
      When you think about it, isn’t this kind of a weird way to design a user
      interface, to expect that the content will be too big vertically and that
      the user will have to scroll through it? What if you want the user to
      scroll left-to-right instead of top-to-bottom? It’s not particularly easy
      to express on a normal webpage.
    </p>
    <br></br>
    <p>
      In Flutter, if you want to make a particular bit of content horizontally
      scrollable instead of vertically scrollable, that’s as easy as wrapping
      the widgets in a SingleChildScrollView. You can also specify the direction
      of the scroll itself just as easily, whether it should scroll on the
      vertical or horizontal axis.
    </p>
    <br></br>
    <p>
      Because Flutter is based on the concept of laying out your page in
      individual widgets, not drawing a document to the screen, developers are
      afforded more control over exactly how they want to layout their
      applications.
    </p>
    <p>
      <h3>Sticking with one language</h3> As previously mentioned, creating a
      great website means that you have to know HTML, JavaScript, and CSS. It
      also means that your knowledge doesn’t transfer between these languages
      and you can’t reuse any of your JavaScript knowledge in HTML, for
      instance. HTML is purely your markup language, CSS is purely your styling
      syntax, and JavaScript is purely your programming language. None of these
      options include things like type checking, so your CSS can be complete
      bunk and it will just fail silently when the user tries to use your
      webpage.
    </p>
    <br></br>
    <p>
      Flutter uses Dart as its language, and all of the application’s
      look-and-feel and business logic is written in it. Dart comes with static
      type checking, and <u>null safety is landing soon</u>, so every line of
      code in your app, whether it be used to describe your app visually, give
      your app style, or control the business logic of your app, is fully
      type-safe.
    </p>
    <p>
      <h3>Easier to lay out your app</h3> Broadly speaking, we use our websites
      to display data from another source: Whether that source is a database, an
      API, or something else, we wind up with data that we would like to
      display. Imagine that we have an array of objects returned from our API
      and you’re using something like Angular to display them. Typically you
      would load those objects into the backing component, and then use{" "}
      <i>*ngFor</i>&nbsp; to iterate through them. You’d likely attach that to a{" "}
      <i>div</i>. Out of the box, though, for an unstyled <i>div</i>, it would
      look pretty plain. You probably want the items in that list to appear in a
      column or a row, so you’d have to involve some CSS or flexbox in making
      that happen.
    </p>
    <br></br>
    <p>
      Conversely, with Flutter, you lay out your children by using a{" "}
      <i>Column</i> or a <i>Row</i> that has a <i>children</i> property that
      accepts an array of objects. When you think about it, most of the time,
      you probably want your arrays of objects in a row (side by side) or in a
      column (underneath each other). Because you have that, you can more
      quickly get the visual layout that you want, before you move on to styling
      the individual items in the list. In my experience this leads to a quicker
      scaffolding and prototyping of the site, without compromising the end
      result.
    </p>
    <p>
      <h3>Control over every pixel in the viewport</h3> Because Flutter renders
      every pixel to the screen, this affords designers and developers great
      control over exactly what they want their app, or experience, to look
      like. Rendering every pixel to the screen sounds like it would come with a
      hefty performance hit, and don’t get me wrong, it's certainly not as fast
      as rendering raw HTML these days, but things like GPU-accelerated canvases
      are shoring up performance in this area. Traditionally, designing your
      webpage in HTML would mean you would have to take into account the
      different browsers that you were targeting. In Flutters’ case, though,
      because you lay out a Text widget with a certain font, it’ll look the same
      no matter where it is shown because Flutter is controlling how that
      particular widget will look on a per-pixel basis.
    </p>
    <br></br>
    <p>
      <h3>Goodbye, webpack!</h3> Because Flutter uses Dart, when a Flutter app
      is compiled for its target platform, it transpiles all the dependent
      packages (also written in Dart) to JavaScript as well. Dart is a type-safe
      language and doesn’t support reflection, so the effect of this is that the
      compiler has a better idea of what your app invokes and what it doesn’t.
      This leads to better tree-shaking and minification of your app. Building
      your Flutter app for the web doesn’t use webpack because it doesn’t need
      it, which is a pretty strong case for Flutter in itself (in my mind
      anyway). There’s nothing wrong with webpack; it’s a high-quality piece of
      software. But it is a complicated tool in an already complicated pipeline.
    </p>
    <p>
      <h3>But We’re Not Quite There Yet</h3> There’s more to the web than
      snazzy-looking webpages, gorgeous animations, and beautiful experiences.
      We really do need more than just that. We need server-side rendering (SSR)
      so our webpages can be scraped by search engines for any type of search
      engine optimisation (SEO) to be carried out. At the moment, Flutter
      websites are only interpretable by people, not by search engines, so
      that’s going to have a huge impact on how people search for and find
      information on your website. (People are{" "}
      <u>hashing it out on this issue</u>, and it doesn’t seem like there’s a
      resolution coming in the near future).
    </p>
    <br></br>
    <p>
      Drawing everything to the canvas also has its performance implications,
      but these aren’t as bad as what you would think. I made a test app that
      makes heavy use of visual effects, and it runs at near 60fps on my
      MacBook. Even when you drag the sheet over the screen, it still performs
      okay, progressively increasing the blur on the image behind. I’m not an
      expert in Dart by any means, so no doubt this process could be optimised
      even further.
    </p>
    <br></br>
    <p>
      So there are a couple of key areas that Flutter needs to improve on before
      people would consider it for mainstream web development. But think for a
      moment: Flutter only really came out in the last two years, and the
      performance and feature set that it already has is nothing short of
      incredible.
    </p>
    <br></br>
    <p>
      What could it be then, if you could make a website that was performant,
      and you could use one language to design, style, and write the business
      logic for your web app? If webpack became superfluous to your development
      pipeline? And if in time you could have server-side rendering and all the
      SEO goodness that you have today in traditional HTML-based websites?
    </p>
    <p>If you had all that, then Flutter could win the web.</p>
  </Layout>
)

export default IndexPage

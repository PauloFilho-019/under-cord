function GlobalStyle() {
  return (
    <style global jsx>{`
      @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Roboto:wght@100&family=VT323&display=swap");
      @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&family=VT323&display=swap");
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: "VT323", monospace !important;
      }
      body {
      }

      button {
        font-size: 50px !important;
      }
      /* App fit Height */
      html,
      body,
      #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */
    `}</style>
  );
}

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />;
    </>
  );
}

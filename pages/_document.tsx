// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
   render() {
      console.log('document')
      return (
         <Html lang='en'>
            <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" 
            rel="stylesheet"/>
            <meta 
            name="description"
            content="Shreyash Choudhary | Software Devloper"
            />
            <meta 
            name="keywords"
            content="Software Devloper, Software Engineer, SDE, SWE, Data Engineer"
            />

            </Head>
            <body className="bg-fixed bg-gradient-to-r from-green to-blue-500 dark:from-dark-500 dark:to-dark-700 dark:text-white">
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default MyDocument

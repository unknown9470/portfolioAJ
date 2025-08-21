import Header from './components/Header'; 
import Footer from './components/Footer';
import './globals.css';

export default function Layout({ children } : Readonly<{children : React.ReactNode}>) {
  return (
    <html lang="fr">
      <head>
        <title>Alexis Jeandenans</title>
        <meta name="description" content="Portfolio de développeur" />
        <link rel="icon" href="/images/me.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header /> 
        <main>{children}</main> 
        <Footer />
      </body>
    </html>
  );
}

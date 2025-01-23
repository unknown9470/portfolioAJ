import Header from './components/Header'; 
import './globals.css';

export default function Layout({ children } : {children : React.ReactNode}) {
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
      </body>
    </html>
  );
}

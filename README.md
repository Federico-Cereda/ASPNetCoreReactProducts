# Nome Progetto
Carrello Spesa

# Descrizione
Il Progetto Carrello Spesa è una web application che ha come scopo la gestione di un sito per la spesa online.
La parte back-end è basata sul modello di una web API in .NET 7.0.
La parte front-end è basata sul modello di una applicazione creata con il comado npx create-react-app.

# Installazione, configurazione e avvio
1. Per scaricare il progetto in Git Bash andare nella cartella dove lo si vuole collocare e usare il seguente comando:
   $ git clone https://github.com/Federico-Cereda/ASPNetCoreReactProducts.git
2. Per aprire il progetto in VS Code usare, sempre da Git Bash entare nella cartella reactclient e usare il comando: $ code .
3. Per installare il pacchetto react scipts su VS Code usare il comando: npm install react-scripts.
   O in alternativa per correggere l'errore su VS Code usare il comdando: npm audit fix.
4. Per avviarlo usare nel terminale di VS Code il comando: npm start.

# Pubblicazione su ISS
1. Per pubblicare la web API installare Hosting Bundle da https://dotnet.microsoft.com/en-us/download/dotnet/7.0, e in In Visual Studio 2022 fare clic con il pulsante destro del mouse sul progetto in Esplora soluzioni e scegliere Pubblica e seguire la procedeura di pubblicazione.
2. Per pubblicare la React app nel terminale di VS Code eseguire il comado: npm run build.
3. Concedere le autorizzazioni per le cartella con i progetti pubblicati con controllo completo per IIS_IUSRS e IUSR.
4. In IIS fare clic con il pulsante destro del mouse su Siti in Connessioni e selezionare Aggiungi sito Web.
5. Se nel punto precedente si è impostato un nome Host aprire con Notepad++ il file "C:\Windows\System32\drivers\etc\hosts" e aggiungere una riga dopo l'ultima voce inserendo l’indirizzo IP ed il nome del dominio scelto come nome Host.

# Movie-Booker-site
Ett projekt för en inlämning i en javascriptkurs där man ska kunna välja filmer och boka platser i en biograf. 

## Funktionalitet: 
- Bläddra bland tillgängliga filmer
- Välj sittplatser i en virtuell biosalong
- Kolla om sittplatser är tillgängliga eller ej
- Boka platser för vald film och se totalpris för valda platser

## Installation 
1 **Klona repot:**
   git clone https://github.com/Erkaandersson/movie-seat-booking.git
   
2 **Gå till projektkatalogen**
  cd movie-seat-booking
  
3 **Installera nödvändiga paket**
  npm install
  
4 **Starta applikationen** 

5 **Öppna i webbläsaren** 
  http://localhost:3000

## Användning
1. Starta applikationen med `npm start`.
2. Välj en film från listan och granska dess information.
3. Välj sittplatser i biosalongen och gå vidare till bokningen.
4. Följ instruktionerna för att betala och bekräfta bokningen.

## Teknologi 
- **React** för gränsnittsutveckling
  React valde jag främst för att jag är intresserad att lära mig mer av det. Gillar sättet man använder react för att bygga komponenter som sen renderas i app. Det ger en tydlig struktur av koden tycker jag. I efterhand skulle jag försökt att dela upp koden i ännu fler komponenter för att ge den ännu bättre struktur. Förstår syftet med react att det bygger på att dela upp hela projektet i mindre komponenter för att göra det lättare att hantera, men samtidigt blir det lite rörigt för mig som är ny i det när man skickar grejer fram och tillbaka emelllan komponenterna. 
  
- **Javascript** som programmeringspråk
- **CSS** för styling av gränssnitt
- **movies.json** hantera data för filmer
   Valde att skapa en egen movies.json fil där jag fyllde på med filmer som jag sedan satte properties till som jag skulle kunna behöva. Att ha filen i projektet gör det enkelt att hämta filmer och rendera på sidan. 
  



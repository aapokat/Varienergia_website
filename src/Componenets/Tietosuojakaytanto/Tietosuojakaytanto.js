import React from "react";
import './Tietosuojakaytanto.css';
import { Link as RouterLink } from "react-router-dom";

const Tietosuojakaytanto = () => {
    return ( 
        <div id="Tietosuojakaytanto" className="tietosuojakaytanto">
            <h1 className="HeadlineTieto">Värienergia tietosuojakäytäntö</h1>
            <p>1. Henkilötietojen Käsittelyn Tarkoitus
Käsittelemme henkilötietoja ainoastaan laillisesti ja asianmukaisesti määriteltyihin tarkoituksiin. Henkilötietoja kerätään pääasiassa AutoHeaven palveluiden tarjoamista, yhteydenottoihin vastaamista ja asiakassuhteiden ylläpitoa varten.

2. Kerätyt Henkilötiedot
Tyypillisiä kerättäviä henkilötietoja voivat olla nimi, sähköpostiosoite, puhelinnumero ja muut tarvittavat tiedot. Näitä tietoja kerätään käyttäjiltä heidän vapaaehtoisesti antamansa tietojen kautta.

3. Tietojen Säilytysaika
Henkilötietoja säilytetään vain niin kauan kuin ne ovat tarpeellisia käyttötarkoituksensa vuoksi tai sovellettavan lainsäädännön mukaisesti.

4. Tietojen Suojaaminen
Takaamme, että kaikki kerätyt henkilötiedot säilytetään turvallisesti. Käytämme asianmukaisia teknisiä ja organisatorisia keinoja tietojen suojaamiseksi luvattomalta pääsyltä, häviämiseltä, tuhoutumiselta tai muulta henkilötietojen käsittelyyn liittyvältä riskiltä.

5. Tietojen Jakaminen Kolmansien Osapuolten Kanssa
Emme jaa henkilötietoja kolmansien osapuolten kanssa ilman käyttäjän suostumusta, ellei se ole tarpeellista palveluiden tarjoamiseksi tai sovellettavan lain niin vaatiessa.

6. Käyttäjän Oikeudet
Käyttäjällä on oikeus tarkastella, korjata, tai pyytää poistamaan itsestään tallennetut henkilötiedot. Tällaiset pyynnöt tulee lähettää Office@Autoheaven.fi.

7. Evästeet (Cookies)
Verkkosivustomme voi käyttää evästeitä parantaakseen käyttökokemusta. Käyttäjällä on mahdollisuus hallita evästeasetuksia selaimen asetuksista.

8. Yhteystiedot
Kaikkiin kysymyksiin tai huomautuksiin tästä tietosuojakäytännöstä voi olls yhteydessä osoitteeseen Office@Autoheaven.fi .</p>
        </div>
     );
}
 
export default Tietosuojakaytanto;
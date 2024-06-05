import React from "react";
import './Tietosuojakaytanto.css';
import { Link as RouterLink } from "react-router-dom";

const Tietosuojakaytanto = () => {
    return ( 
        <div id="Tietosuojakaytanto" className="tietosuojakaytanto">
            <h1 className="HeadlineTieto">Väri Energia Oy tietosuojaseloste</h1>
            <div className="kaytantoBox">
            <div className="insideBox">
    <p className="ehdotHead">1. Henkilötietojen käsittelyn tarkoitus</p>
    <p className="ehdotTx">
      Käsittelemme henkilötietoja ainoastaan laillisesti ja asianmukaisesti määriteltyihin tarkoituksiin. Henkilötietoja kerätään pääasiassa Väri Energia Oy palveluiden tarjoamista, yhteydenottoihin vastaamista ja asiakassuhteiden ylläpitoa varten.
    </p>

    <p className="ehdotHead">2. Kerätyt henkilötiedot</p>
    <p className="ehdotTx">
      Tyypillisiä kerättäviä henkilötietoja voivat olla nimi, sähköpostiosoite, puhelinnumero ja muut tarvittavat tiedot. Näitä tietoja kerätään käyttäjiltä heidän vapaaehtoisesti antamansa tietojen kautta.
    </p>

    <p className="ehdotHead">3. Tietojen säilytysaika</p>
    <p className="ehdotTx">
      Henkilötietoja säilytetään vain niin kauan kuin ne ovat tarpeellisia käyttötarkoituksensa vuoksi tai sovellettavan lainsäädännön mukaisesti.
    </p>

    <p className="ehdotHead">4. Tietojen suojaaminen</p>
    <p className="ehdotTx">
      Takaamme, että kaikki kerätyt henkilötiedot säilytetään turvallisesti. Käytämme asianmukaisia teknisiä ja organisatorisia keinoja tietojen suojaamiseksi luvattomalta pääsyltä, häviämiseltä, tuhoutumiselta tai muulta henkilötietojen käsittelyyn liittyvältä riskiltä.
    </p>

    <p className="ehdotHead">5. Tietojen jakaminen kolmansien osapuolten kanssa</p>
    <p className="ehdotTx">
      Emme jaa henkilötietoja kolmansien osapuolten kanssa ilman käyttäjän suostumusta, ellei se ole tarpeellista palveluiden tarjoamiseksi tai sovellettavan lain niin vaatiessa.
    </p>

    <p className="ehdotHead">6. Käyttäjän oikeudet</p>
    <p className="ehdotTx">
      Käyttäjällä on oikeus tarkastella, korjata, tai pyytää poistamaan itsestään tallennetut henkilötiedot. Tällaiset pyynnöt tulee lähettää osoitteeseen info@varienergia.fi.
    </p>

    <p className="ehdotHead">7. Evästeet (Cookies)</p>
    <p className="ehdotTx">
      Verkkosivustomme voi käyttää evästeitä parantaakseen käyttökokemusta. Käyttäjällä on mahdollisuus hallita evästeasetuksia selaimen asetuksista.
    </p>

    <p className="ehdotHead">8. Yhteystiedot</p>
    <p className="ehdotTx">
      Kaikkiin kysymyksiin tai huomautuksiin tästä tietosuojakäytännöstä voi olla yhteydessä osoitteeseen info@varienergia.fi.
    </p>
  </div>
        </div>
        <RouterLink className="HomePageLink" to='/'>Palaa kotisivulle</RouterLink> {/* Add Link to TietosuojakaytantoPage */}
        </div>
     );
}
 
export default Tietosuojakaytanto;
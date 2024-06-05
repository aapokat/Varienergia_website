import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import './Kayttoehdot.css';

const Kayttoehdot = () => {
    return ( 
        <div id="Kayttoehdot" className="Kayttoehdot">
            <h1 className="HeadlineTieto">Väri Energia Oy Käyttöehdot</h1>
            <div className="kaytantoBox">
            <div className="insideBox">
                <p className="ehdotHead">1. Käyttöoikeus</p>
                <p className="ehdotTx">
                    Myönnämme sinulle rajoitetun, ei-yksinomaisen ja ei-siirrettävän käyttöoikeuden käyttää verkkosivustoamme näiden ehtojen mukaisesti.
                </p>

                <p className="ehdotHead">2. Käyttäjän velvollisuudet</p>
                <p className="ehdotTx">
                    Käytät sivustoamme vain laillisiin tarkoituksiin. Et saa käyttää sivustoamme tavalla, joka voi vahingoittaa, ylikuormittaa tai haitata sivustoamme tai kolmansien osapuolten käyttöä. Et saa yrittää saada luvattomasti pääsyä sivustomme palvelimiin, tietokantoihin tai muihin teknisiin järjestelmiin.
                </p>

                <p className="ehdotHead">3. Immateriaalioikeudet</p>
                <p className="ehdotTx">
                    Kaikki sisältö, mukaan lukien tekstit, kuvat, grafiikat, logot ja ohjelmistot, on meidän tai lisenssinantajiemme omaisuutta ja suojattu tekijänoikeuslailla ja muilla immateriaalioikeuslaeilla.
                </p>

                <p className="ehdotHead">4. Vastuuvapauslauseke</p>
                <p className="ehdotTx">
                    Sivustomme tarjotaan "sellaisena kuin se on" ja "saatavilla olevana" -periaatteella ilman minkäänlaisia takuita. Emme takaa, että sivustomme on aina saatavilla tai virheetön.
                </p>

                <p className="ehdotHead">5. Vastuun rajoitus</p>
                <p className="ehdotTx">
                    Emme ole vastuussa mistään välillisistä, erityisistä, satunnaisista tai seurannaisvahingoista, jotka aiheutuvat sivustomme käytöstä tai kyvyttömyydestä käyttää sivustoamme.
                </p>

                <p className="ehdotHead">6. Muutokset ehtoihin</p>
                <p className="ehdotTx">
                    Pidätämme oikeuden muuttaa näitä ehtoja milloin tahansa. Kaikki muutokset julkaistaan tällä sivulla, ja ne tulevat voimaan heti julkaisun jälkeen. Jatkamalla sivustomme käyttöä muutosten julkaisemisen jälkeen hyväksyt uudet ehdot.
                </p>

                <p className="ehdotHead">7. Yhteystiedot</p>
                <p className="ehdotTx">
                    Jos sinulla on kysyttävää näistä käyttöehdoista, ota yhteyttä:
                    </p><p className="ehdotTxt">
                <br />
                Väri Energia Oy
                <br />
                Höyhtykuja 17
                <br />
                info@varienergia.fi
                <br />
                044 243 6520
                </p>
            </div>
        </div>
        <RouterLink className="HomePageLink" to='/'>Palaa kotisivulle</RouterLink> {/* Add Link to TietosuojakaytantoPage */}
        </div>
     );
     
}
 
export default Kayttoehdot;



sudo -u postgres psql

sudo -u postgres createdb food  .crear base de datos nueva


\password Set password user postgres

\l Listar bases de datos

\c nombreBD .Conectarse a BD xNombre

\dt . Listar tablas de las base de datos


select * from country


cambiar a version 3 de la API y que todo funcione

tener test terminados
tener css terminado



antes de demo
Dos Ide abiertos, api de lado izquierdo, client de lado derecho.
varios archivos abertos

abierto insomnia con todos los endpoint de dato de prueba

datos de prueba a mano

abierto terminal ubuntu PG

corriendo el proyecto api y client en paralelo


durante demo

usar console.log para intuir los datos de lo que se quiere programar
usar comentario de codigo
avance progresivo del codigo
leer e interpretar errores
tener claro el flujo de los datos




datos de prueba
{"difficulty": 1,"duration": 1,"name": "Ski","season": "Autumn", "countryid":["ARG","AFG","ALA"]} 
{"difficulty": 3,"duration": 3,"name": "Voley","season": "Spring", "countryid":["ARG"]}  
{"difficulty": 2,"duration": 2,"name": "Rafting","season": "Spring", "countryid":["ALB"]} 

PRUEBAS DE RESULTADOS
AL PROGRAMAR REQ.QUERY.ORDER
ASC
DESC

PRUEBAS DE RESULTADOS
AL PROGRAMAR REQ.QUERY.ACTIVITY

        // return res.json(country);
        /* [
            {
              "id": 1,
              "difficulty": 1,
              "duration": 1,
              "name": "Ski",
              "season": "Autumn",
              "countries": [
                {
                  "area": null,
                  "code": "ARG",
                  "capital": null,
                  "flag": "https://flagcdn.com/ar.svg",
                  "name": "Argentina",
                  "population": 45376763,
                  "region": "Americas",
                  "subregion": null
                },
                {
                  "area": null,
                  "code": "AFG",
                  "capital": null,
                  "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
                  "name": "Afghanistan",
                  "population": 40218234,
                  "region": "Asia",
                  "subregion": null
                },
                {
                  "area": null,
                  "code": "ALA",
                  "capital": null,
                  "flag": "https://flagcdn.com/ax.svg",
                  "name": "Åland Islands",
                  "population": 28875,
                  "region": "Europe",
                  "subregion": null
                }
              ]
            }
          ] */

          /* return res.json(country[0].countries); */
          /* [
            {
              "area": null,
              "code": "ARG",
              "capital": null,
              "flag": "https://flagcdn.com/ar.svg",
              "name": "Argentina",
              "population": 45376763,
              "region": "Americas",
              "subregion": null
            },
            {
              "area": null,
              "code": "AFG",
              "capital": null,
              "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
              "name": "Afghanistan",
              "population": 40218234,
              "region": "Asia",
              "subregion": null
            },
            {
              "area": null,
              "code": "ALA",
              "capital": null,
              "flag": "https://flagcdn.com/ax.svg",
              "name": "Åland Islands",
              "population": 28875,
              "region": "Europe",
              "subregion": null
            }
          ] */

          /* return res.json(country); 1 ACTIVIDAD, 3 PAISES DISTINTOS ARG AFG ALA */
          /* [
            {
              "id": 1,
              "difficulty": 1,
              "duration": 1,
              "name": "Ski",
              "season": "Autumn",
              "countries": [
                {
                  "area": null,
                  "code": "ARG",
                  "capital": null,
                  "flag": "https://flagcdn.com/ar.svg",
                  "name": "Argentina",
                  "population": 45376763,
                  "region": "Americas",
                  "subregion": null
                },
                {
                  "area": null,
                  "code": "AFG",
                  "capital": null,
                  "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
                  "name": "Afghanistan",
                  "population": 40218234,
                  "region": "Asia",
                  "subregion": null
                },
                {
                  "area": null,
                  "code": "ALA",
                  "capital": null,
                  "flag": "https://flagcdn.com/ax.svg",
                  "name": "Åland Islands",
                  "population": 28875,
                  "region": "Europe",
                  "subregion": null
                }
              ]
            },
            {
              "id": 2,
              "difficulty": 3,
              "duration": 3,
              "name": "Voley",
              "season": "Spring",
              "countries": [
                {
                  "area": null,
                  "code": "ARG",
                  "capital": null,
                  "flag": "https://flagcdn.com/ar.svg",
                  "name": "Argentina",
                  "population": 45376763,
                  "region": "Americas",
                  "subregion": null
                }
              ]
            },
            {
              "id": 3,
              "difficulty": 2,
              "duration": 2,
              "name": "Rafting",
              "season": "Spring",
              "countries": [
                {
                  "area": null,
                  "code": "ALB",
                  "capital": null,
                  "flag": "https://flagcdn.com/al.svg",
                  "name": "Albania",
                  "population": 2837743,
                  "region": "Europe",
                  "subregion": null
                }
              ]
            }
          ] */

          /* return res.json(country[0]); DEVUEVE LA PRIMER ACTIVIDAD CREADA, CON SUS PAISES ASOCIADOS */
          /* {
            "id": 1,
            "difficulty": 2,
            "duration": 2,
            "name": "Rafting",
            "season": "Spring",
            "countries": [
              {
                "area": null,
                "code": "ALB",
                "capital": null,
                "flag": "https://flagcdn.com/al.svg",
                "name": "Albania",
                "population": 2837743,
                "region": "Europe",
                "subregion": null
              }
            ]
          } */









 region: 'Asia'
}
{
  area: 64559,
  code: 'LVA',
  name: 'Latvia',
  flag: 'https://flagcdn.com/lv.svg',
  population: 1901548,
  region: 'Europe'
}
{
  area: 10452,
  code: 'LBN',
  name: 'Lebanon',
  flag: 'https://flagcdn.com/lb.svg',
  population: 6825442,
  region: 'Asia'
}
{
  area: 30355,
  code: 'LSO',
  name: 'Lesotho',
  flag: 'https://flagcdn.com/ls.svg',
  population: 2142252,
  region: 'Africa'
}
{
  area: 111369,
  code: 'LBR',
  name: 'Liberia',
  flag: 'https://flagcdn.com/lr.svg',
  population: 5057677,
  region: 'Africa'
}
{
  area: 1759540,
  code: 'LBY',
  name: 'Libya',
  flag: 'https://flagcdn.com/ly.svg',
  population: 6871287,
  region: 'Africa'
}
{
  area: 160,
  code: 'LIE',
  name: 'Liechtenstein',
  flag: 'https://flagcdn.com/li.svg',
  population: 38137,
  region: 'Europe'
}
{
  area: 65300,
  code: 'LTU',
  name: 'Lithuania',
  flag: 'https://flagcdn.com/lt.svg',
  population: 2794700,
  region: 'Europe'
}
{
  area: 2586,
  code: 'LUX',
  name: 'Luxembourg',
  flag: 'https://flagcdn.com/lu.svg',
  population: 632275,
  region: 'Europe'
}
{
  area: 30,
  code: 'MAC',
  name: 'Macao',
  flag: 'https://flagcdn.com/mo.svg',
  population: 649342,
  region: 'Asia'
}
{
  area: 25713,
  code: 'MKD',
  name: 'North Macedonia',
  flag: 'https://flagcdn.com/mk.svg',
  population: 2083380,
  region: 'Europe'
}
{
  area: 587041,
  code: 'MDG',
  name: 'Madagascar',
  flag: 'https://flagcdn.com/mg.svg',
  population: 27691019,
  region: 'Africa'
}
{
  area: 118484,
  code: 'MWI',
  name: 'Malawi',
  flag: 'https://flagcdn.com/mw.svg',
  population: 19129955,
  region: 'Africa'
}
{
  area: 330803,
  code: 'MYS',
  name: 'Malaysia',
  flag: 'https://flagcdn.com/my.svg',
  population: 32365998,
  region: 'Asia'
}
{
  area: 300,
  code: 'MDV',
  name: 'Maldives',
  flag: 'https://flagcdn.com/mv.svg',
  population: 540542,
  region: 'Asia'
}
{
  area: 1240192,
  code: 'MLI',
  name: 'Mali',
  flag: 'https://flagcdn.com/ml.svg',
  population: 20250834,
  region: 'Africa'
}
{
  area: 316,
  code: 'MLT',
  name: 'Malta',
  flag: 'https://flagcdn.com/mt.svg',
  population: 525285,
  region: 'Europe'
}
{
  area: 181,
  code: 'MHL',
  name: 'Marshall Islands',
  flag: 'https://flagcdn.com/mh.svg',
  population: 59194,
  region: 'Oceania'
}
{
  area: undefined,
  code: 'MTQ',
  name: 'Martinique',
  flag: 'https://flagcdn.com/mq.svg',
  population: 378243,
  region: 'Americas'
}
{
  area: 1030700,
  code: 'MRT',
  name: 'Mauritania',
  flag: 'https://flagcdn.com/mr.svg',
  population: 4649660,
  region: 'Africa'
}
{
  area: 2040,
  code: 'MUS',
  name: 'Mauritius',
  flag: 'https://flagcdn.com/mu.svg',
  population: 1265740,
  region: 'Africa'
}
{
  area: undefined,
  code: 'MYT',
  name: 'Mayotte',
  flag: 'https://flagcdn.com/yt.svg',
  population: 226915,
  region: 'Africa'
}
{
  area: 1964375,
  code: 'MEX',
  name: 'Mexico',
  flag: 'https://flagcdn.com/mx.svg',
  population: 128932753,
  region: 'Americas'
}
{
  area: 702,
  code: 'FSM',
  name: 'Micronesia (Federated States of)',
  flag: 'https://flagcdn.com/fm.svg',
  population: 115021,
  region: 'Oceania'
}
{
  area: 33846,
  code: 'MDA',
  name: 'Moldova (Republic of)',
  flag: 'https://flagcdn.com/md.svg',
  population: 2617820,
  region: 'Europe'
}
{
  area: 2.02,
  code: 'MCO',
  name: 'Monaco',
  flag: 'https://flagcdn.com/mc.svg',
  population: 39244,
  region: 'Europe'
}
{
  area: 1564110,
  code: 'MNG',
  name: 'Mongolia',
  flag: 'https://flagcdn.com/mn.svg',
  population: 3278292,
  region: 'Asia'
}
{
  area: 13812,
  code: 'MNE',
  name: 'Montenegro',
  flag: 'https://flagcdn.com/me.svg',
  population: 621718,
  region: 'Europe'
}
{
  area: 102,
  code: 'MSR',
  name: 'Montserrat',
  flag: 'https://flagcdn.com/ms.svg',
  population: 4922,
  region: 'Americas'
}
{
  area: 446550,
  code: 'MAR',
  name: 'Morocco',
  flag: 'https://flagcdn.com/ma.svg',
  population: 36910558,
  region: 'Africa'
}
{
  area: 801590,
  code: 'MOZ',
  name: 'Mozambique',
  flag: 'https://flagcdn.com/mz.svg',
  population: 31255435,
  region: 'Africa'
}
{
  area: 676578,
  code: 'MMR',
  name: 'Myanmar',
  flag: 'https://flagcdn.com/mm.svg',
  population: 54409794,
  region: 'Asia'
}
{
  area: 825615,
  code: 'NAM',
  name: 'Namibia',
  flag: 'https://flagcdn.com/na.svg',
  population: 2540916,
  region: 'Africa'
}
{
  area: 21,
  code: 'NRU',
  name: 'Nauru',
  flag: 'https://flagcdn.com/nr.svg',
  population: 10834,
  region: 'Oceania'
}
{
  area: 147181,
  code: 'NPL',
  name: 'Nepal',
  flag: 'https://flagcdn.com/np.svg',
  population: 29136808,
  region: 'Asia'
}
{
  area: 41850,
  code: 'NLD',
  name: 'Netherlands',
  flag: 'https://flagcdn.com/nl.svg',
  population: 17441139,
  region: 'Europe'
}
{
  area: 18575,
  code: 'NCL',
  name: 'New Caledonia',
  flag: 'https://flagcdn.com/nc.svg',
  population: 271960,
  region: 'Oceania'
}
{
  area: 270467,
  code: 'NZL',
  name: 'New Zealand',
  flag: 'https://flagcdn.com/nz.svg',
  population: 5084300,
  region: 'Oceania'
}
{
  area: 130373,
  code: 'NIC',
  name: 'Nicaragua',
  flag: 'https://flagcdn.com/ni.svg',
  population: 6624554,
  region: 'Americas'
}
{
  area: 1267000,
  code: 'NER',
  name: 'Niger',
  flag: 'https://flagcdn.com/ne.svg',
  population: 24206636,
  region: 'Africa'
}
{
  area: 923768,
  code: 'NGA',
  name: 'Nigeria',
  flag: 'https://flagcdn.com/ng.svg',
  population: 206139587,
  region: 'Africa'
}
{
  area: 260,
  code: 'NIU',
  name: 'Niue',
  flag: 'https://flagcdn.com/nu.svg',
  population: 1470,
  region: 'Oceania'
}
{
  area: 36,
  code: 'NFK',
  name: 'Norfolk Island',
  flag: 'https://flagcdn.com/nf.svg',
  population: 2302,
  region: 'Oceania'
}
{
  area: 120538,
  code: 'PRK',
  name: "Korea (Democratic People's Republic of)",
  flag: 'https://flagcdn.com/kp.svg',
  population: 25778815,
  region: 'Asia'
}
{
  area: 464,
  code: 'MNP',
  name: 'Northern Mariana Islands',
  flag: 'https://flagcdn.com/mp.svg',
  population: 57557,
  region: 'Oceania'
}
{
  area: 323802,
  code: 'NOR',
  name: 'Norway',
  flag: 'https://flagcdn.com/no.svg',
  population: 5379475,
  region: 'Europe'
}
{
  area: 309500,
  code: 'OMN',
  name: 'Oman',
  flag: 'https://flagcdn.com/om.svg',
  population: 5106622,
  region: 'Asia'
}
{
  area: 881912,
  code: 'PAK',
  name: 'Pakistan',
  flag: 'https://flagcdn.com/pk.svg',
  population: 220892331,
  region: 'Asia'
}
{
  area: 459,
  code: 'PLW',
  name: 'Palau',
  flag: 'https://flagcdn.com/pw.svg',
  population: 18092,
  region: 'Oceania'
}
{
  area: undefined,
  code: 'PSE',
  name: 'Palestine, State of',
  flag: 'https://flagcdn.com/ps.svg',
  population: 4803269,
  region: 'Asia'
}
{
  area: 75417,
  code: 'PAN',
  name: 'Panama',
  flag: 'https://flagcdn.com/pa.svg',
  population: 4314768,
  region: 'Americas'
}
{
  area: 462840,
  code: 'PNG',
  name: 'Papua New Guinea',
  flag: 'https://flagcdn.com/pg.svg',
  population: 8947027,
  region: 'Oceania'
}
{
  area: 406752,
  code: 'PRY',
  name: 'Paraguay',
  flag: 'https://flagcdn.com/py.svg',
  population: 7132530,
  region: 'Americas'
}
{
  area: 1285216,
  code: 'PER',
  name: 'Peru',
  flag: 'https://flagcdn.com/pe.svg',
  population: 32971846,
  region: 'Americas'
}
{
  area: 342353,
  code: 'PHL',
  name: 'Philippines',
  flag: 'https://flagcdn.com/ph.svg',
  population: 109581085,
  region: 'Asia'
}
{
  area: 47,
  code: 'PCN',
  name: 'Pitcairn',
  flag: 'https://flagcdn.com/pn.svg',
  population: 56,
  region: 'Oceania'
}
{
  area: 312679,
  code: 'POL',
  name: 'Poland',
  flag: 'https://flagcdn.com/pl.svg',
  population: 37950802,
  region: 'Europe'
}
{
  area: 92090,
  code: 'PRT',
  name: 'Portugal',
  flag: 'https://flagcdn.com/pt.svg',
  population: 10305564,
  region: 'Europe'
}
{
  area: 8870,
  code: 'PRI',
  name: 'Puerto Rico',
  flag: 'https://flagcdn.com/pr.svg',
  population: 3194034,
  region: 'Americas'
}
{
  area: 11586,
  code: 'QAT',
  name: 'Qatar',
  flag: 'https://flagcdn.com/qa.svg',
  population: 2881060,
  region: 'Asia'
}
{
  area: 10908,
  code: 'UNK',
  name: 'Republic of Kosovo',
  flag: 'https://flagcdn.com/xk.svg',
  population: 1775378,
  region: 'Europe'
}
{
  area: undefined,
  code: 'REU',
  name: 'Réunion',
  flag: 'https://flagcdn.com/re.svg',
  population: 840974,
  region: 'Africa'
}
{
  area: 238391,
  code: 'ROU',
  name: 'Romania',
  flag: 'https://flagcdn.com/ro.svg',
  population: 19286123,
  region: 'Europe'
}
{
  area: 17124442,
  code: 'RUS',
  name: 'Russian Federation',
  flag: 'https://flagcdn.com/ru.svg',
  population: 144104080,
  region: 'Europe'
}
{
  area: 26338,
  code: 'RWA',
  name: 'Rwanda',
  flag: 'https://flagcdn.com/rw.svg',
  population: 12952209,
  region: 'Africa'
}
{
  area: 21,
  code: 'BLM',
  name: 'Saint Barthélemy',
  flag: 'https://flagcdn.com/bl.svg',
  population: 9417,
  region: 'Americas'
}
{
  area: undefined,
  code: 'SHN',
  name: 'Saint Helena, Ascension and Tristan da Cunha',
  flag: 'https://flagcdn.com/sh.svg',
  population: 4255,
  region: 'Africa'
}
{
  area: 261,
  code: 'KNA',
  name: 'Saint Kitts and Nevis',
  flag: 'https://flagcdn.com/kn.svg',
  population: 53192,
  region: 'Americas'
}
{
  area: 616,
  code: 'LCA',
  name: 'Saint Lucia',
  flag: 'https://flagcdn.com/lc.svg',
  population: 183629,
  region: 'Americas'
}
{
  area: 53,
  code: 'MAF',
  name: 'Saint Martin (French part)',
  flag: 'https://flagcdn.com/mf.svg',
  population: 38659,
  region: 'Americas'
}
{
  area: 242,
  code: 'SPM',
  name: 'Saint Pierre and Miquelon',
  flag: 'https://flagcdn.com/pm.svg',
  population: 6069,
  region: 'Americas'
}
{
  area: 389,
  code: 'VCT',
  name: 'Saint Vincent and the Grenadines',
  flag: 'https://flagcdn.com/vc.svg',
  population: 110947,
  region: 'Americas'
}
{
  area: 2842,
  code: 'WSM',
  name: 'Samoa',
  flag: 'https://flagcdn.com/ws.svg',
  population: 198410,
  region: 'Oceania'
}
{
  area: 61,
  code: 'SMR',
  name: 'San Marino',
  flag: 'https://flagcdn.com/sm.svg',
  population: 33938,
  region: 'Europe'
}
{
  area: 964,
  code: 'STP',
  name: 'Sao Tome and Principe',
  flag: 'https://flagcdn.com/st.svg',
  population: 219161,
  region: 'Africa'
}
{
  area: 2149690,
  code: 'SAU',
  name: 'Saudi Arabia',
  flag: 'https://flagcdn.com/sa.svg',
  population: 34813867,
  region: 'Asia'
}
{
  area: 196722,
  code: 'SEN',
  name: 'Senegal',
  flag: 'https://flagcdn.com/sn.svg',
  population: 16743930,
  region: 'Africa'
}
{
  area: 88361,
  code: 'SRB',
  name: 'Serbia',
  flag: 'https://flagcdn.com/rs.svg',
  population: 6908224,
  region: 'Europe'
}
{
  area: 452,
  code: 'SYC',
  name: 'Seychelles',
  flag: 'https://flagcdn.com/sc.svg',
  population: 98462,
  region: 'Africa'
}
{
  area: 71740,
  code: 'SLE',
  name: 'Sierra Leone',
  flag: 'https://flagcdn.com/sl.svg',
  population: 7976985,
  region: 'Africa'
}
{
  area: 710,
  code: 'SGP',
  name: 'Singapore',
  flag: 'https://flagcdn.com/sg.svg',
  population: 5685807,
  region: 'Asia'
}
{
  area: 34,
  code: 'SXM',
  name: 'Sint Maarten (Dutch part)',
  flag: 'https://flagcdn.com/sx.svg',
  population: 40812,
  region: 'Americas'
}
{
  area: 49037,
  code: 'SVK',
  name: 'Slovakia',
  flag: 'https://flagcdn.com/sk.svg',
  population: 5458827,
  region: 'Europe'
}
{
  area: 20273,
  code: 'SVN',
  name: 'Slovenia',
  flag: 'https://flagcdn.com/si.svg',
  population: 2100126,
  region: 'Europe'
}
{
  area: 28896,
  code: 'SLB',
  name: 'Solomon Islands',
  flag: 'https://flagcdn.com/sb.svg',
  population: 686878,
  region: 'Oceania'
}
{
  area: 637657,
  code: 'SOM',
  name: 'Somalia',
  flag: 'https://flagcdn.com/so.svg',
  population: 15893219,
  region: 'Africa'
}
{
  area: 1221037,
  code: 'ZAF',
  name: 'South Africa',
  flag: 'https://flagcdn.com/za.svg',
  population: 59308690,
  region: 'Africa'
}
{
  area: undefined,
  code: 'SGS',
  name: 'South Georgia and the South Sandwich Islands',
  flag: 'https://flagcdn.com/gs.svg',
  population: 30,
  region: 'Americas'
}
{
  area: 100210,
  code: 'KOR',
  name: 'Korea (Republic of)',
  flag: 'https://flagcdn.com/kr.svg',
  population: 51780579,
  region: 'Asia'
}
{
  area: 505992,
  code: 'ESP',
  name: 'Spain',
  flag: 'https://flagcdn.com/es.svg',
  population: 47351567,
  region: 'Europe'
}
{
  area: 65610,
  code: 'LKA',
  name: 'Sri Lanka',
  flag: 'https://flagcdn.com/lk.svg',
  population: 21919000,
  region: 'Asia'
}
{
  area: 1886068,
  code: 'SDN',
  name: 'Sudan',
  flag: 'https://flagcdn.com/sd.svg',
  population: 43849269,
  region: 'Africa'
}
{
  area: 619745,
  code: 'SSD',
  name: 'South Sudan',
  flag: 'https://flagcdn.com/ss.svg',
  population: 11193729,
  region: 'Africa'
}
{
  area: 163820,
  code: 'SUR',
  name: 'Suriname',
  flag: 'https://flagcdn.com/sr.svg',
  population: 586634,
  region: 'Americas'
}
{
  area: undefined,
  code: 'SJM',
  name: 'Svalbard and Jan Mayen',
  flag: 'https://flagcdn.com/sj.svg',
  population: 2562,
  region: 'Europe'
}
{
  area: 17364,
  code: 'SWZ',
  name: 'Swaziland',
  flag: 'https://flagcdn.com/sz.svg',
  population: 1160164,
  region: 'Africa'
}
{
  area: 450295,
  code: 'SWE',
  name: 'Sweden',
  flag: 'https://flagcdn.com/se.svg',
  population: 10353442,
  region: 'Europe'
}
{
  area: 41284,
  code: 'CHE',
  name: 'Switzerland',
  flag: 'https://flagcdn.com/ch.svg',
  population: 8636896,
  region: 'Europe'
}
{
  area: 185180,
  code: 'SYR',
  name: 'Syrian Arab Republic',
  flag: 'https://flagcdn.com/sy.svg',
  population: 17500657,
  region: 'Asia'
}
{
  area: 36193,
  code: 'TWN',
  name: 'Taiwan',
  flag: 'https://flagcdn.com/tw.svg',
  population: 23503349,
  region: 'Asia'
}
{
  area: 143100,
  code: 'TJK',
  name: 'Tajikistan',
  flag: 'https://flagcdn.com/tj.svg',
  population: 9537642,
  region: 'Asia'
}
{
  area: 945087,
  code: 'TZA',
  name: 'Tanzania, United Republic of',
  flag: 'https://flagcdn.com/tz.svg',
  population: 59734213,
  region: 'Africa'
}
{
  area: 513120,
  code: 'THA',
  name: 'Thailand',
  flag: 'https://flagcdn.com/th.svg',
  population: 69799978,
  region: 'Asia'
}
{
  area: 14874,
  code: 'TLS',
  name: 'Timor-Leste',
  flag: 'https://flagcdn.com/tl.svg',
  population: 1318442,
  region: 'Asia'
}
{
  area: 56785,
  code: 'TGO',
  name: 'Togo',
  flag: 'https://flagcdn.com/tg.svg',
  population: 8278737,
  region: 'Africa'
}
{
  area: 12,
  code: 'TKL',
  name: 'Tokelau',
  flag: 'https://flagcdn.com/tk.svg',
  population: 1411,
  region: 'Oceania'
}
{
  area: 747,
  code: 'TON',
  name: 'Tonga',
  flag: 'https://flagcdn.com/to.svg',
  population: 105697,
  region: 'Oceania'
}
{
  area: 5130,
  code: 'TTO',
  name: 'Trinidad and Tobago',
  flag: 'https://flagcdn.com/tt.svg',
  population: 1399491,
  region: 'Americas'
}
{
  area: 163610,
  code: 'TUN',
  name: 'Tunisia',
  flag: 'https://flagcdn.com/tn.svg',
  population: 11818618,
  region: 'Africa'
}
{
  area: 783562,
  code: 'TUR',
  name: 'Turkey',
  flag: 'https://flagcdn.com/tr.svg',
  population: 84339067,
  region: 'Asia'
}
{
  area: 488100,
  code: 'TKM',
  name: 'Turkmenistan',
  flag: 'https://flagcdn.com/tm.svg',
  population: 6031187,
  region: 'Asia'
}
{
  area: 948,
  code: 'TCA',
  name: 'Turks and Caicos Islands',
  flag: 'https://flagcdn.com/tc.svg',
  population: 38718,
  region: 'Americas'
}
{
  area: 26,
  code: 'TUV',
  name: 'Tuvalu',
  flag: 'https://flagcdn.com/tv.svg',
  population: 11792,
  region: 'Oceania'
}
{
  area: 241550,
  code: 'UGA',
  name: 'Uganda',
  flag: 'https://flagcdn.com/ug.svg',
  population: 45741000,
  region: 'Africa'
}
{
  area: 603700,
  code: 'UKR',
  name: 'Ukraine',
  flag: 'https://flagcdn.com/ua.svg',
  population: 44134693,
  region: 'Europe'
}
{
  area: 83600,
  code: 'ARE',
  name: 'United Arab Emirates',
  flag: 'https://flagcdn.com/ae.svg',
  population: 9890400,
  region: 'Asia'
}
{
  area: 242900,
  code: 'GBR',
  name: 'United Kingdom of Great Britain and Northern Ireland',
  flag: 'https://flagcdn.com/gb.svg',
  population: 67215293,
  region: 'Europe'
}
{
  area: 9629091,
  code: 'USA',
  name: 'United States of America',
  flag: 'https://flagcdn.com/us.svg',
  population: 329484123,
  region: 'Americas'
}
{
  area: 181034,
  code: 'URY',
  name: 'Uruguay',
  flag: 'https://flagcdn.com/uy.svg',
  population: 3473727,
  region: 'Americas'
}
{
  area: 447400,
  code: 'UZB',
  name: 'Uzbekistan',
  flag: 'https://flagcdn.com/uz.svg',
  population: 34232050,
  region: 'Asia'
}
{
  area: 12189,
  code: 'VUT',
  name: 'Vanuatu',
  flag: 'https://flagcdn.com/vu.svg',
  population: 307150,
  region: 'Oceania'
}
{
  area: 916445,
  code: 'VEN',
  name: 'Venezuela (Bolivarian Republic of)',
  flag: 'https://flagcdn.com/ve.svg',
  population: 28435943,
  region: 'Americas'
}
{
  area: 331212,
  code: 'VNM',
  name: 'Vietnam',
  flag: 'https://flagcdn.com/vn.svg',
  population: 97338583,
  region: 'Asia'
}
{
  area: 142,
  code: 'WLF',
  name: 'Wallis and Futuna',
  flag: 'https://flagcdn.com/wf.svg',
  population: 11750,
  region: 'Oceania'
}
{
  area: 266000,
  code: 'ESH',
  name: 'Western Sahara',
  flag: 'https://flagcdn.com/eh.svg',
  population: 510713,
  region: 'Africa'
}
{
  area: 527968,
  code: 'YEM',
  name: 'Yemen',
  flag: 'https://flagcdn.com/ye.svg',
  population: 29825968,
  region: 'Asia'
}
{
  area: 752618,
  code: 'ZMB',
  name: 'Zambia',
  flag: 'https://flagcdn.com/zm.svg',
  population: 18383956,
  region: 'Africa'
}
{
  area: 390757,
  code: 'ZWE',
  name: 'Zimbabwe',
  flag: 'https://flagcdn.com/zw.svg',
  population: 14862927,
  region: 'Africa'
}

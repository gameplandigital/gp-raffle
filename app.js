var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

const server_port = process.env.PORT || this.SERVER_PORT || 3599;
const env = process.env.NODE_ENV || 'development';

//View Engine
app.set('view engine', 'ejs');
app.set('public', path.join(__dirname, 'public'));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

var employees = [
  {
    "no": 1,
    "employee_id": "12171",
    "last_name": "ABIOG",
    "first_name": "RACHELLE",
    "middle_name": "LUCAS",
    "department": "BD"
  },
  {
    "no": 2,
    "employee_id": "12173",
    "last_name": "ACEBIDO",
    "first_name": "PHILIP ROY",
    "middle_name": "ALO",
    "department": "OPS"
  },
  {
    "no": 3,
    "employee_id": "12189",
    "last_name": "ALBOTRA",
    "first_name": "JAY-R",
    "middle_name": "",
    "department": "ADMIN"
  },
  {
    "no": 4,
    "employee_id": "12322",
    "last_name": "AMBROSIO",
    "first_name": "PETER",
    "middle_name": "TAMAYO",
    "department": "ADMIN"
  },
  {
    "no": 5,
    "employee_id": "12193",
    "last_name": "AQUINO",
    "first_name": "JOEL",
    "middle_name": "ASUNCION",
    "department": "FAB"
  },
  {
    "no": 6,
    "employee_id": "12274",
    "last_name": "ATIENZA",
    "first_name": "RAMNIEL LOUIE",
    "middle_name": "U.",
    "department": "BD"
  },
  {
    "no": 7,
    "employee_id": "12231",
    "last_name": "BALANAY",
    "first_name": "ACE RUDOLPH",
    "middle_name": "COLLADO ",
    "department": "DIGITAL"
  },
  {
    "no": 8,
    "employee_id": "12242",
    "last_name": "BARCELONA",
    "first_name": "JOEY",
    "middle_name": "BLORES",
    "department": "OPS"
  },
  {
    "no": 9,
    "employee_id": "12223",
    "last_name": "BARTOLATA JR.",
    "first_name": "ORLANDO",
    "middle_name": "CABILES",
    "department": "FAB"
  },
  {
    "no": 10,
    "employee_id": "12310",
    "last_name": "BEÑAS",
    "first_name": "JOSHUA",
    "middle_name": "CANTO",
    "department": "DIGITAL"
  },
  {
    "no": 11,
    "employee_id": "12241",
    "last_name": "BERCASIO",
    "first_name": "MC NIEL",
    "middle_name": "CAMPOS",
    "department": "DIGITAL"
  },
  {
    "no": 12,
    "employee_id": "12232",
    "last_name": "BINUYA",
    "first_name": "LEONARDO",
    "middle_name": "CLAVE",
    "department": "DIGITAL"
  },
  {
    "no": 13,
    "employee_id": "12239",
    "last_name": "BRILLANTES",
    "first_name": "MARIA FE",
    "middle_name": "PIS-AN",
    "department": "FINANCE"
  },
  {
    "no": 14,
    "employee_id": "12209",
    "last_name": "BRION",
    "first_name": "MAUREEN",
    "middle_name": "TOLOZA",
    "department": "PURCHASING"
  },
  {
    "no": 15,
    "employee_id": "12161",
    "last_name": "BRIONES",
    "first_name": "RYANNE DOMINIQUE",
    "middle_name": "L",
    "department": "BD"
  },
  {
    "no": 16,
    "employee_id": "12290",
    "last_name": "CALVARIO",
    "first_name": "GIAN ROI",
    "middle_name": "DE PANO",
    "department": "DIGITAL"
  },
  {
    "no": 17,
    "employee_id": "12282",
    "last_name": "CAMBA",
    "first_name": "MARCO ANTONIO",
    "middle_name": "LESCANO",
    "department": "FAB"
  },
  {
    "no": 18,
    "employee_id": "12194",
    "last_name": "CANO JR.",
    "first_name": "ARNOLDO",
    "middle_name": "CIRUJALES",
    "department": "FAB"
  },
  {
    "no": 19,
    "employee_id": "12285",
    "last_name": "CHUA",
    "first_name": "JOANNE GRACE",
    "middle_name": "PANLILIO",
    "department": "SALES"
  },
  {
    "no": 20,
    "employee_id": "12113",
    "last_name": "CORDOVA JR.",
    "first_name": "RICHMOND",
    "middle_name": "TULIO",
    "department": "CREATIVES"
  },
  {
    "no": 21,
    "employee_id": "12172",
    "last_name": "DADACAY",
    "first_name": "SARAH JANE",
    "middle_name": "NAVARRO",
    "department": "FINANCE"
  },
  {
    "no": 22,
    "employee_id": "12207",
    "last_name": "DELA CRUZ ",
    "first_name": "IRVIN JOHN",
    "middle_name": "ABELLA",
    "department": "CREATIVES"
  },
  {
    "no": 23,
    "employee_id": "12179",
    "last_name": "DORIA",
    "first_name": "MICKAELA GRACE",
    "middle_name": "DIAMSAY",
    "department": "FINANCE"
  },
  {
    "no": 24,
    "employee_id": "12321",
    "last_name": "DUMALIANG",
    "first_name": "NICOLE",
    "middle_name": "CACAL",
    "department": "SALES"
  },
  {
    "no": 25,
    "employee_id": "12210",
    "last_name": "EROY",
    "first_name": "REX",
    "middle_name": "DOMENI",
    "department": "ADMIN"
  },
  {
    "no": 26,
    "employee_id": "12325",
    "last_name": "ESTAMA",
    "first_name": "REYDAN",
    "middle_name": "BALCEDA",
    "department": "OPS"
  },
  {
    "no": 27,
    "employee_id": "12228",
    "last_name": "EVANGELISTA",
    "first_name": "KIM",
    "middle_name": "BALLEQUE",
    "department": "BD"
  },
  {
    "no": 28,
    "employee_id": "12305",
    "last_name": "FACISTOL",
    "first_name": "GERALD MICO",
    "middle_name": "SALVADOR",
    "department": "DIGITAL"
  },
  {
    "no": 29,
    "employee_id": "12034",
    "last_name": "GABOTERO",
    "first_name": "LEONARDO",
    "middle_name": "CAÑETAN",
    "department": "ADMIN"
  },
  {
    "no": 30,
    "employee_id": "12243",
    "last_name": "GATAN",
    "first_name": "PATRICK HAKEEM",
    "middle_name": "LAZARO",
    "department": "OPS"
  },
  {
    "no": 31,
    "employee_id": "12271",
    "last_name": "GERONIMO",
    "first_name": "ARGEENE",
    "middle_name": "CRUZADO",
    "department": "CREATIVES"
  },
  {
    "no": 32,
    "employee_id": "12220",
    "last_name": "GINOO",
    "first_name": "RAYMOND",
    "middle_name": "",
    "department": "FAB"
  },
  {
    "no": 33,
    "employee_id": "12147",
    "last_name": "GRACIA",
    "first_name": "CHARLEIN JAEANN",
    "middle_name": "DELA CRUZ",
    "department": "CREATIVES"
  },
  {
    "no": 34,
    "employee_id": "12107",
    "last_name": "GRIMALDO",
    "first_name": "ROMMEL",
    "middle_name": "MALANOG",
    "department": "OPS"
  },
  {
    "no": 35,
    "employee_id": "12153",
    "last_name": "GUADIZ",
    "first_name": "ROMMEL",
    "middle_name": "TARRONAS",
    "department": "FAB"
  },
  {
    "no": 36,
    "employee_id": "12240",
    "last_name": "GUILLERMO ",
    "first_name": "JERIC",
    "middle_name": "VILLASERAN",
    "department": "DIGITAL"
  },
  {
    "no": 37,
    "employee_id": "12196",
    "last_name": "HERMOSILLA",
    "first_name": "FERMIN",
    "middle_name": "CANALAN",
    "department": "FAB"
  },
  {
    "no": 38,
    "employee_id": "12192",
    "last_name": "HERMOSO",
    "first_name": "RAMEL",
    "middle_name": "RAFAYA",
    "department": "FAB"
  },
  {
    "no": 39,
    "employee_id": "12015",
    "last_name": "ICARO",
    "first_name": "IRENE",
    "middle_name": "MAGDALENA",
    "department": "PURCHASING"
  },
  {
    "no": 40,
    "employee_id": "12237",
    "last_name": "IGNACIO ",
    "first_name": "APRIL",
    "middle_name": "DELA CRUZ",
    "department": "HR"
  },
  {
    "no": 41,
    "employee_id": "12333",
    "last_name": "ILOCARIO",
    "first_name": "KRISTINE",
    "middle_name": "ESPADILLA ",
    "department": "HR"
  },
  {
    "no": 42,
    "employee_id": "12226",
    "last_name": "LIBRADO",
    "first_name": "ALBERT",
    "middle_name": "     ",
    "department": "FAB"
  },
  {
    "no": 43,
    "employee_id": "12035",
    "last_name": "MACEDA",
    "first_name": "JONIFFER",
    "middle_name": "AREVALO ",
    "department": "ADMIN"
  },
  {
    "no": 44,
    "employee_id": "12234",
    "last_name": "MAHINAY",
    "first_name": "MARK",
    "middle_name": "",
    "department": "OPS"
  },
  {
    "no": 45,
    "employee_id": "12335",
    "last_name": "MAMAUAG",
    "first_name": "HILBERT",
    "middle_name": "TAMANG",
    "department": "FAB"
  },
  {
    "no": 46,
    "employee_id": "12036",
    "last_name": "MANSUETO",
    "first_name": "BERNEL",
    "middle_name": "CALLEGO",
    "department": "ADMIN"
  },
  {
    "no": 47,
    "employee_id": "12187",
    "last_name": "MENDOZA",
    "first_name": "MA. NATALIA NAHZ",
    "middle_name": "DE JESUS",
    "department": "OPS"
  },
  {
    "no": 48,
    "employee_id": "12328",
    "last_name": "MESANO  ",
    "first_name": "JEM ROSE",
    "middle_name": "M",
    "department": "BD"
  },
  {
    "no": 49,
    "employee_id": "12224",
    "last_name": "MIRA ",
    "first_name": "ELISEO",
    "middle_name": "",
    "department": "FAB"
  },
  {
    "no": 50,
    "employee_id": "12074",
    "last_name": "MOLINA",
    "first_name": "REZON",
    "middle_name": "MEDALLA",
    "department": "OPS"
  },
  {
    "no": 51,
    "employee_id": "12023",
    "last_name": "MONTEYRO",
    "first_name": "JUNELA ANN",
    "middle_name": "FABRIGAS",
    "department": "SALES"
  },
  {
    "no": 52,
    "employee_id": "12304",
    "last_name": "MORENO",
    "first_name": "TONIE MARIE",
    "middle_name": "CASTRO",
    "department": "SALES"
  },
  {
    "no": 53,
    "employee_id": "12330",
    "last_name": "NAGTALON",
    "first_name": "MARY",
    "middle_name": "ADIARTE",
    "department": "FINANCE"
  },
  {
    "no": 54,
    "employee_id": "12318",
    "last_name": "NAVARRETE ",
    "first_name": "BIANCA CAMILLE",
    "middle_name": "CATAYLO",
    "department": "SALES"
  },
  {
    "no": 55,
    "employee_id": "12327",
    "last_name": "OLARTE",
    "first_name": "WENCESLAO",
    "middle_name": "AMORA",
    "department": "FAB"
  },
  {
    "no": 56,
    "employee_id": "12087",
    "last_name": "PALCO",
    "first_name": "ALDRIN",
    "middle_name": "SOLIS",
    "department": "OPS"
  },
  {
    "no": 57,
    "employee_id": "12195",
    "last_name": "PALER",
    "first_name": "DIOSDADO",
    "middle_name": "CABAL",
    "department": "FAB"
  },
  {
    "no": 58,
    "employee_id": "12211",
    "last_name": "PAÑA ",
    "first_name": "ROBERT",
    "middle_name": "FLORES",
    "department": "ADMIN"
  },
  {
    "no": 59,
    "employee_id": "12165",
    "last_name": "PARADERO",
    "first_name": "REJINE SELLINA",
    "middle_name": "BRIONES",
    "department": "SALES"
  },
  {
    "no": 60,
    "employee_id": "12315",
    "last_name": "PASION",
    "first_name": "OMAR",
    "middle_name": "DE LARA",
    "department": "OPS"
  },
  {
    "no": 61,
    "employee_id": "12184",
    "last_name": "PAYLAGA",
    "first_name": "SHERWIN",
    "middle_name": "MAGDAEL",
    "department": "FAB"

  },
  {
    "no": 62,
    "employee_id": "12151",
    "last_name": "PEÑA ",
    "first_name": "MARGIE",
    "middle_name": "MARQUEZ",
    "department": "BD"
  },
  {
    "no": 63,
    "employee_id": "12331",
    "last_name": "PEREZ",
    "first_name": "RAYMOND",
    "middle_name": "RESULTA",
    "department": "OPS"
  },
  {
    "no": 64,
    "employee_id": "12236",
    "last_name": "PEREZ",
    "first_name": "RUBEN",
    "middle_name": "ISAYAS",
    "department": "FINANCE"
  },
  {
    "no": 65,
    "employee_id": "12301",
    "last_name": "PUNZALAN",
    "first_name": "SHERRY",
    "middle_name": "C",
    "department": "HR"
  },
  {
    "no": 66,
    "employee_id": "12245",
    "last_name": "QUIJANO",
    "first_name": "ROBBIE",
    "middle_name": "CATALAN",
    "department": "OPS"
  },
  {
    "no": 67,
    "employee_id": "12309",
    "last_name": "REVILLA",
    "first_name": "LEONARDO JR.",
    "middle_name": "ROYA",
    "department": "OPS"
  },
  {
    "no": 68,
    "employee_id": "12029",
    "last_name": "ROLDAN",
    "first_name": "GENEROSA",
    "middle_name": "FLORES",
    "department": "BD"
  },
  {
    "no": 69,
    "employee_id": "12160",
    "last_name": "SAN VICENTE",
    "first_name": "JOHN MICHAEL",
    "middle_name": "LOPEZ",
    "department": "FINANCE"
  },
  {
    "no": 70,
    "employee_id": "12181",
    "last_name": "SANCHEZ",
    "first_name": "PAOLO BRYAN",
    "middle_name": "ROSETE",
    "department": "OPS"
  },
  {
    "no": 71,
    "employee_id": "12183",
    "last_name": "SERRANO",
    "first_name": "JAMES ARVI",
    "middle_name": "PABUSTAN",
    "department": "OPS"
  },
  {
    "no": 72,
    "employee_id": "12303",
    "last_name": "TANDAYU",
    "first_name": "MICHAELLA JESSA ",
    "middle_name": "RAGALA",
    "department": "SALES"
  },
  {
    "no": 73,
    "employee_id": "12227",
    "last_name": "TAWIDE",
    "first_name": "CARLITO",
    "middle_name": "AMADO",
    "department": "FAB"
  },
  {
    "no": 74,
    "employee_id": "12269",
    "last_name": "TIANIA",
    "first_name": "QUEENIE ",
    "middle_name": "AVANZADO",
    "department": "SALES"
  },
  {
    "no": 75,
    "employee_id": "12319",
    "last_name": "TUY",
    "first_name": "JONALD ARIES ",
    "middle_name": "LORENA",
    "department": "SALES"
  },
  {
    "no": 76,
    "employee_id": "12334",
    "last_name": "UY   ",
    "first_name": "CARLITO",
    "middle_name": "MACUSE",
    "department": "OPS"
  },
  {
    "no": 77,
    "employee_id": "12272",
    "last_name": "VERSOZA",
    "first_name": "JAMES",
    "middle_name": "BLASE",
    "department": "FAB"
  },
  {
    "no": 78,
    "employee_id": "12148",
    "last_name": "VILLACASTIN",
    "first_name": "GRETCHEN",
    "middle_name": "CLARO",
    "department": "SALES"
  },
  {
    "no": 79,
    "employee_id": "12280",
    "last_name": "YARCIA",
    "first_name": "MARVIN",
    "middle_name": "PINEDA",
    "department": "FINANCE"
  }
]

app.get('/', function (req, res) {
  res.render('index');
});

app.route('/api/employees/:no')
  .get(function (req, res) {
    if (req.params.no) {
      var no = req.params.no;
      for (var i = 0; i < employees.length; i++) {
        if (no == employees[i].no) {
          res.send(employees[i]);
          break;
        }
      }
    } else {
      res.send(employees);
    }
  })

app.listen(server_port, function () {
  console.log('Server started on port ' + server_port + ".");
});
var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()

app.use(cors());
app.use(bodyParser.json())


var autoCompleteList = {
    "A# .NET": null,"A# (Axiom)": null,"A-0 System": null,"A+": null,"A++": null,"ABAP": null,"ABC": null,"ABC ALGOL": null,"ABLE": null,"ABSET": null,"ABSYS": null,"ACC": null,"Accent": null,"Ace DASL": null,"ACL2": null,"ACT-III": null,"Action!": null,"ActionScript": null,"Ada": null,"Adenine": null,"Agda": null,"Agilent VEE": null,"Agora": null,"AIMMS": null,"Alef": null,"ALF": null,"ALGOL 58": null,"ALGOL 60": null,"ALGOL 68": null,"ALGOL W": null,"Alice": null,"Alma-0": null,"AmbientTalk": null,"Amiga E": null,"AMOS": null,"AMPL": null,"APL": null,"App Inventor for Androids visual block language": null,"AppleScript": null,"Arc": null,"ARexx": null,"Argus": null,"AspectJ": null,"Assembly language": null,"ATS": null,"Ateji PX": null,"AutoHotkey": null,"Autocoder": null,"AutoIt": null,"AutoLISP / Visual LISP": null,"Averest": null,"AWK": null,"Axum": null,"B": null,"Babbage": null,"Bash": null,"BASIC": null,"bc": null,"BCPL": null,"BeanShell": null,"Batch (Windows/Dos)": null,"Bertrand": null,"BETA": null,"Bigwig": null,"Bistro": null,"BitC": null,"BLISS": null,"Blue": null,"Bon": null,"Boo": null,"Boomerang": null,"Bourne shell": null,"bash": null,"ksh": null,"BREW": null,"BPEL": null,"C": null,"C--": null,"C++": null,"C#": null,"C/AL": null,"Caché ObjectScript": null,"C Shell": null,"Caml": null,"Candle": null,"Cayenne": null,"CDuce": null,"Cecil": null,"Cel": null,"Cesil": null,"Ceylon": null,"CFEngine": null,"CFML": null,"Cg": null,"Ch": null,"Chapel": null,"CHAIN": null,"Charity": null,"Charm": null,"Chef": null,"CHILL": null,"CHIP-8": null,"chomski": null,"ChucK": null,"CICS": null,"Cilk": null,"CL": null,"Claire": null,"Clarion": null,"Clean": null,"Clipper": null,"CLIST": null,"Clojure": null,"CLU": null,"CMS-2": null,"COBOL": null,"Cobra": null,"CODE": null,"CoffeeScript": null,"Cola": null,"ColdC": null,"ColdFusion": null,"COMAL": null,"Combined Programming Language": null,"COMIT": null,"Common Intermediate Language": null,"Common Lisp": null,"COMPASS": null,"Component Pascal": null,"Constraint Handling Rules": null,"Converge": null,"Cool": null,"Coq": null,"Coral 66": null,"Corn": null,"CorVision": null,"COWSEL": null,"CPL": null,"csh": null,"CSP": null,"Csound": null,"CUDA": null,"Curl": null,"Curry": null,"Cyclone": null,"Cython": null,"D": null,"DASL": null,"DASL": null,"Dart": null,"DataFlex": null,"Datalog": null,"DATATRIEVE": null,"dBase": null,"dc": null,"DCL": null,"Deesel": null,"Delphi": null,"DCL": null,"DinkC": null,"DIBOL": null,"Dog": null,"Draco": null,"DRAKON": null,"Dylan": null,"DYNAMO": null,"E": null,"E#": null,"Ease": null,"Easy PL/I": null,"Easy Programming Language": null,"EASYTRIEVE PLUS": null,"ECMAScript": null,"Edinburgh IMP": null,"EGL": null,"Eiffel": null,"ELAN": null,"Elixir": null,"Elm": null,"Emacs Lisp": null,"Emerald": null,"Epigram": null,"EPL": null,"Erlang": null,"es": null,"Escapade": null,"Escher": null,"ESPOL": null,"Esterel": null,"Etoys": null,"Euclid": null,"Euler": null,"Euphoria": null,"EusLisp Robot Programming Language": null,"CMS EXEC": null,"EXEC 2": null,"Executable UML": null,"F": null,"F#": null,"Factor": null,"Falcon": null,"Fancy": null,"Fantom": null,"FAUST": null,"Felix": null,"Ferite": null,"FFP": null,"Fjölnir": null,"FL": null,"Flavors": null,"Flex": null,"FLOW-MATIC": null,"FOCAL": null,"FOCUS": null,"FOIL": null,"FORMAC": null,"@Formula": null,"Forth": null,"Fortran": null,"Fortress": null,"FoxBase": null,"FoxPro": null,"FP": null,"FPr": null,"Franz Lisp": null,"F-Script": null,"FSProg": null,"G": null,"Google Apps Script": null,"Game Maker Language": null,"GameMonkey Script": null,"GAMS": null,"GAP": null,"G-code": null,"Genie": null,"GDL": null,"Gibiane": null,"GJ": null,"GEORGE": null,"GLSL": null,"GNU E": null,"GM": null,"Go": null,"Go!": null,"GOAL": null,"Gödel": null,"Godiva": null,"GOM (Good Old Mad)": null,"Goo": null,"Gosu": null,"GOTRAN": null,"GPSS": null,"GraphTalk": null,"GRASS": null,"Groovy": null,"Hack (programming language)": null,"HAL/S": null,"Hamilton C shell": null,"Harbour": null,"Hartmann pipelines": null,"Haskell": null,"Haxe": null,"High Level Assembly": null,"HLSL": null,"Hop": null,"Hope": null,"Hugo": null,"Hume": null,"HyperTalk": null,"IBM Basic assembly language": null,"IBM HAScript": null,"IBM Informix-4GL": null,"IBM RPG": null,"ICI": null,"Icon": null,"Id": null,"IDL": null,"Idris": null,"IMP": null,"Inform": null,"Io": null,"Ioke": null,"IPL": null,"IPTSCRAE": null,"ISLISP": null,"ISPF": null,"ISWIM": null,"J": null,"J#": null,"J++": null,"JADE": null,"Jako": null,"JAL": null,"Janus": null,"JASS": null,"Java": null,"JavaScript": null,"JCL": null,"JEAN": null,"Join Java": null,"JOSS": null,"Joule": null,"JOVIAL": null,"Joy": null,"JScript": null,"JScript .NET": null,"JavaFX Script": null,"Julia": null,"Jython": null,"K": null,"Kaleidoscope": null,"Karel": null,"Karel++": null,"KEE": null,"Kixtart": null,"KIF": null,"Kojo": null,"Kotlin": null,"KRC": null,"KRL": null,"KUKA": null,"KRYPTON": null,"ksh": null,"L": null,"L# .NET": null,"LabVIEW": null,"Ladder": null,"Lagoona": null,"LANSA": null,"Lasso": null,"LaTeX": null,"Lava": null,"LC-3": null,"Leda": null,"Legoscript": null,"LIL": null,"LilyPond": null,"Limbo": null,"Limnor": null,"LINC": null,"Lingo": null,"Linoleum": null,"LIS": null,"LISA": null,"Lisaac": null,"Lisp": null,"Lite-C": null,"Lithe": null,"Little b": null,"Logo": null,"Logtalk": null,"LPC": null,"LSE": null,"LSL": null,"LiveCode": null,"LiveScript": null,"Lua": null,"Lucid": null,"Lustre": null,"LYaPAS": null,"Lynx": null,"M2001": null,"M4": null,"Machine code": null,"MAD": null,"MAD/I": null,"Magik": null,"Magma": null,"make": null,"Maple": null,"MAPPER": null,"MARK-IV": null,"Mary": null,"MASM Microsoft Assembly x86": null,"Mathematica": null,"MATLAB": null,"Maxima": null,"Macsyma": null,"Max": null,"MaxScript": null,"Maya (MEL)": null,"MDL": null,"Mercury": null,"Mesa": null,"Metacard": null,"Metafont": null,"MetaL": null,"Microcode": null,"MicroScript": null,"MIIS": null,"MillScript": null,"MIMIC": null,"Mirah": null,"Miranda": null,"MIVA Script": null,"ML": null,"Moby": null,"Model 204": null,"Modelica": null,"Modula": null,"Modula-2": null,"Modula-3": null,"Mohol": null,"MOO": null,"Mortran": null,"Mouse": null,"MPD": null,"CIL": null,"MSL": null,"MUMPS": null,"NASM": null,"NATURAL": null,"Napier88": null,"Neko": null,"Nemerle": null,"nesC": null,"NESL": null,"Net.Data": null,"NetLogo": null,"NetRexx": null,"NewLISP": null,"NEWP": null,"Newspeak": null,"NewtonScript": null,"NGL": null,"Nial": null,"Nice": null,"Nickle": null,"NPL": null,"Not eXactly C": null,"Not Quite C": null,"NSIS": null,"Nu": null,"NWScript": null,"NXT-G": null,"o:XML": null,"Oak": null,"Oberon": null,"Obix": null,"OBJ2": null,"Object Lisp": null,"ObjectLOGO": null,"Object REXX": null,"Object Pascal": null,"Objective-C": null,"Objective-J": null,"Obliq": null,"Obol": null,"OCaml": null,"occam": null,"occam-p": null,"Octave": null,"OmniMark": null,"Onyx": null,"Opa": null,"Opal": null,"OpenCL": null,"OpenEdge ABL": null,"OPL": null,"OPS5": null,"OptimJ": null,"Orc": null,"ORCA/Modula-2": null,"Oriel": null,"Orwell": null,"Oxygene": null,"Oz": null,"P#": null,"ParaSail (programming language)": null,"PARI/GP": null,"Pascal": null,"Pawn": null,"PCASTL": null,"PCF": null,"PEARL": null,"PeopleCode": null,"Perl": null,"PDL": null,"PHP": null,"Phrogram": null,"Pico": null,"Picolisp": null,"Pict": null,"Pike": null,"PIKT": null,"PILOT": null,"Pipelines": null,"Pizza": null,"PL-11": null,"PL/0": null,"PL/B": null,"PL/C": null,"PL/I": null,"PL/M": null,"PL/P": null,"PL/SQL": null,"PL360": null,"PLANC": null,"Plankalkül": null,"Planner": null,"PLEX": null,"PLEXIL": null,"Plus": null,"POP-11": null,"PostScript": null,"PortablE": null,"Powerhouse": null,"PowerBuilder": null,"PowerShell": null,"PPL": null,"Processing": null,"Processing.js": null,"Prograph": null,"PROIV": null,"Prolog": null,"PROMAL": null,"Promela": null,"PROSE modeling language": null,"PROTEL": null,"ProvideX": null,"Pro*C": null,"Pure": null,"Python": null,"Q (equational programming language)": null,"Q (programming language from Kx Systems)": null,"Qalb": null,"Qi": null,"QtScript": null,"QuakeC": null,"QPL": null,"R": null,"R++": null,"Racket": null,"RAPID": null,"Rapira": null,"Ratfiv": null,"Ratfor": null,"rc": null,"REBOL": null,"Red": null,"Redcode": null,"REFAL": null,"Reia": null,"Revolution": null,"rex": null,"REXX": null,"Rlab": null,"RobotC": null,"ROOP": null,"RPG": null,"RPL": null,"RSL": null,"RTL/2": null,"Ruby": null,"RuneScript": null,"Rust": null,"S": null,"S2": null,"S3": null,"S-Lang": null,"S-PLUS": null,"SA-C": null,"SabreTalk": null,"SAIL": null,"SALSA": null,"SAM76": null,"SAS": null,"SASL": null,"Sather": null,"Sawzall": null,"SBL": null,"Scala": null,"Scheme": null,"Scilab": null,"Scratch": null,"Script.NET": null,"Sed": null,"Seed7": null,"Self": null,"SenseTalk": null,"SequenceL": null,"SETL": null,"Shift Script": null,"SIMPOL": null,"Shakespeare": null,"SIGNAL": null,"SiMPLE": null,"SIMSCRIPT": null,"Simula": null,"Simulink": null,"SISAL": null,"SLIP": null,"SMALL": null,"Smalltalk": null,"Small Basic": null,"SML": null,"Snap!": null,"SNOBOL": null,"SPITBOL": null,"Snowball": null,"SOL": null,"Span": null,"SPARK": null,"SPIN": null,"SP/k": null,"SPS": null,"Squeak": null,"Squirrel": null,"SR": null,"S/SL": null,"Stackless Python": null,"Starlogo": null,"Strand": null,"Stata": null,"Stateflow": null,"Subtext": null,"SuperCollider": null,"SuperTalk": null,"Swift (Apple programming language)": null,"Swift (parallel scripting language)": null,"SYMPL": null,"SyncCharts": null,"SystemVerilog": null,"T": null,"TACL": null,"TACPOL": null,"TADS": null,"TAL": null,"Tcl": null,"Tea": null,"TECO": null,"TELCOMP": null,"TeX": null,"TEX": null,"TIE": null,"Timber": null,"TMG": null,"Tom": null,"TOM": null,"Topspeed": null,"TPU": null,"Trac": null,"TTM": null,"T-SQL": null,"TTCN": null,"Turing": null,"TUTOR": null,"TXL": null,
    "TypeScript": null,"Turbo C++": null,"Ubercode": null,"UCSD Pascal": null,"Umple": null,"Unicon": null,"Uniface": null,"UNITY": null,"Unix shell": null,"UnrealScript": null,"Vala": null,"VBA": null,"VBScript": null,"Verilog": null,"VHDL": null,"Visual Basic": null,"Visual Basic .NET": null,"Visual DataFlex": null,"Visual DialogScript": null,"Visual Fortran": null,"Visual FoxPro": null,"Visual J++": null,"Visual J#": null,"Visual Objects": null,"Visual Prolog": null,"VSXu": null,"Vvvv": null,"WATFIV WATFOR": null,"WebDNA": null,"WebQL": null,"Windows PowerShell": null,"Winbatch": null,"Wolfram": null,"Wyvern": null,"X++": null,"X#": null,"X10": null,"XBL": null,"XC": null,"XMOS architecture": null,"xHarbour": null,"XL": null,"Xojo": null,"XOTcl": null,"XPL": null,"XPL0": null,"Xquery": null,"XSB": null,"XSLT": null,"Xpath": null,"Xtend": null,"Yorick": null,"YQL": null,"Z notation": null,"Zeno": null,"ZOPL": null,"ZPL": null,"ZOPL": null,"ZPL": null
}

var projectList = {
    projects: [
        {
            id: 1,
            title: "Test 1",
            description: "Vero exerci atomorum his an. Ne sed quem case civibus, id idque aeque alterum nec, at sit nonumy sanctus omittantur. Pri nemore tamquam ut. Pri unum timeam hendrerit eu, no vix viris phaedrum consectetuer, id vel gubergren definiebas sadipscing. Consulatu sententiae comprehensam cu vel. Vitae aperiri et his, ne usu.",
            tags: [
                {
                    name: "tag1"
                },
                {
                    name: "tag2"
                }
            ],
            readme: "## Test 1"
        },
        {
            id: 2,
            title: "Test 2",
            description: "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more",
            tags: [
                {
                    name: "tag1"
                },
                {
                    name: "tag2"
                }
            ],
            readme: "### Test 2"            
        },
        {
            id: 3,
            title: "Test 3",
            description: "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more",
            tags: [
                {
                    name: "tag1"
                },
                {
                    name: "tag2"
                }
            ],
            readme: "#### Test 3"            
        },
        {
            id: 4,
            title: "Test 4",
            description: "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more",
            tags: [
                {
                    name: "tag1"
                },
                {
                    name: "tag2"
                }
            ],
            readme: "##### Test 4"            
        },
        {
            id: 5,
            title: "Test 5",
            description: "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more",
            tags: [
                {
                    name: "tag1"
                },
                {
                    name: "tag2"
                }
            ],
            readme: "###### Test 5"
        },
    ]
}

var next_id = 6

app.get('/projects', function(req, res){
    res.json(projectList.projects);
})

app.get('/projects/:id', function (req, res) {
    res.json(projectList.projects.find(project => {
        return project.id == req.params.id;
    }));
})

app.get('/nextid', (req, res) => {
    res.json({nextid: next_id});
    next_id++;
});

app.get('/autotags', (req, res) => {
    res.json({autotags: autoCompleteList})
})

app.put('/projects/:id', function(req, res){
    var item = projectList.projects.find(project => {
        return project.id == req.params.id;
    });
    var index = projectList.projects.indexOf(item)
    projectList.projects[index] = req.body;
    res.send("thanks!")
})

app.post('/projects/:id', function(req, res){
    projectList.projects.push(req.body);
    res.send("thanks!")
})

app.listen(3000);
console.log("listening on: 3000")
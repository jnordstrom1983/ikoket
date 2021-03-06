var exchange = {};

exchange.units = {
    title : "Internationella enheter",
    icon : "fas fa-globe-europe",
    units : {}
};



exchange.temp = {
    title : "Temperatur",
    icon : "fas fa-oil-temp",
    units : {}
};

exchange.volume = {
    title : "Vikt och volym",
    icon : "fas fa-balance-scale-right",
    units : {}
};



exchange.options_unit = [];
for(var x = 1;x<=100;x++) exchange.options_unit.push(x);
for(var x = 110;x<=500;x=x+10) exchange.options_unit.push(x);
for(var x = 550;x<=2000;x=x+50) exchange.options_unit.push(x);

exchange.options_temp = [];
for(var x = -50;x<500;x++){
    exchange.options_temp.push(x);
}

exchange.units.units.uscup = {
    default_value : 1,
    from_unit : "us cup",
    to_unit : "dl",
    title : "Amerikansk cup",
    factor :  2.37,
    product : null,
    options : exchange.options_unit
}

exchange.units.units.usgallon = {
    default_value : 1,
    from_unit : "us gallon",
    to_unit : "liter",
    title : "Amerikansk gallon",
    factor :  3.79,
    product : null,
    options : exchange.options_unit
}


exchange.units.units.uliquidquart  = {
    default_value : 1,
    from_unit : "us liquid quart",
    to_unit : "dl",
    title : "Amerikansk liquid quart",
    factor :  9.5,
    product : null,
    options : exchange.options_unit
}

exchange.units.units.uliquidpint  = {
    default_value : 1,
    from_unit : "us liquid pint",
    to_unit : "dl",
    title : "Amerikansk liquid pint",
    factor :  4.73,
    product : null,
    options : exchange.options_unit
}

exchange.units.units.usliquidounce  = {
    default_value : 1,
    from_unit : "us liquid ounce (fl oz)",
    to_unit : "ml",
    title : "Amerikansk fluid ounce (fl oz)",
    factor :  29.57,
    product : null,
    options : exchange.options_unit
}



exchange.units.units.britishgallon  = {
    default_value : 1,
    from_unit : "brittisk gallon",
    to_unit : "liter",
    title : "Brittisk gallon",
    factor :  4.55,
    product : null,
    options : exchange.options_unit
}


exchange.units.units.britishpint  = {
    default_value : 1,
    from_unit : "brittisk pint",
    to_unit : "dl",
    title : "Brittisk pint",
    factor :  5.68,
    product : null,
    options : exchange.options_unit
}


exchange.units.units.britishcup  = {
    default_value : 1,
    from_unit : "brittisk cup",
    to_unit : "dl",
    title : "Brittisk cup",
    factor :  2.84,
    product : null,
    options : exchange.options_unit
}


exchange.units.units.britishfloz  = {
    default_value : 1,
    from_unit : "brittisk fluid ounce (fl oz)",
    to_unit : "ml",
    title : "Brittisk fluid ounce (fl oz)",
    factor :  28.4,
    product : null,
    options : exchange.options_unit
}









exchange.units.units.stone = {
    default_value : 1,
    from_unit : "stone",
    to_unit : "kg",
    title : "Stone",
    factor :  6.35,
    product : null,
    options : exchange.options_unit
}


exchange.units.units.pound = {
    default_value : 1,
    from_unit : "pound",
    to_unit : "kg",
    title : "Pound",
    factor :  0.4536,
    product : null,
    options : exchange.options_unit
}



exchange.units.units.ounce = {
    default_value : 1,
    from_unit : "ounce",
    to_unit : "gram",
    title : "Ounce",
    factor :  28.35,
    product : null,
    options : exchange.options_unit
}


exchange.units.units.grain = {
    default_value : 1,
    from_unit : "grain",
    to_unit : "mg",
    title : "Grain",
    factor :  65,
    product : null,
    options : exchange.options_unit
}



exchange.temp.units.fahrenheit = {
    default_value : 100,
    from_unit : "??F",
    to_unit : "??C",
    title : "Fahrenheit",
    factor :  1,
    formula : function(input){
        console.log("input", input)
        if(exchange.IsReversed){
            return (input * (9/5)) + 32
            
        }
        return (input - 32) * (5/9);
        
    },
    product : null,
    options : exchange.options_temp
}


exchange.option_alternative_volume_units = [
  { name : "dl", "ratio" : "1" },
  { name : "tsk", "ratio" : "0.05" },
  { name : "msk", "ratio" : "0.15" },
  { name : "krm", "ratio" : "0.01" },
]
exchange.volume.units = {
  "blandmjol24sadesslag": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Blandmj??l (2-4 s??desslag)",
    "factor": "50",
    "product": "Blandmj??l (2-4 s??desslag)",
    "options": exchange.options_unit,
    "category": "Mj??l"
  },
  "bovetemjol": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Bovetemj??l",
    "factor": "60",
    "product": "Bovetemj??l",
    "options": exchange.options_unit,
    "category": "Mj??l"
  },
  "grahamsmjol": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Grahamsmj??l",
    "factor": "60",
    "product": "Grahamsmj??l",
    "options": exchange.options_unit,
    "category": "Mj??l"
  },
  "kornmjol": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Kornmj??l",
    "factor": "55",
    "product": "Kornmj??l",
    "options": exchange.options_unit,
    "category": "Mj??l"
  },
  "kruskakli": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Kruskakli",
    "factor": "20",
    "product": "Kruskakli",
    "options": exchange.options_unit,
    "category": "Mj??l"
  },
  "maizena": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Maizena",
    "factor": "55",
    "product": "Maizena",
    "options": exchange.options_unit,
    "category": "Mj??l"
  },
  "potatismjol": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Potatismj??l",
    "factor": "80",
    "product": "Potatismj??l",
    "options": exchange.options_unit,
    "category": "Mj??l"
  },
  "ragkrossochvetekross": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "R??gkross och vetekross",
    "factor": "70",
    "product": "R??gkross och vetekross",
    "options": exchange.options_unit,
    "category": "Mj??l"
  },
  "ragmjolfintochgrovt": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "R??gmj??l, fint och grovt",
    "factor": "50",
    "product": "R??gmj??l, fint och grovt",
    "options": exchange.options_unit,
    "category": "Mj??l"
  },
  "ragsikt": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "R??gsikt",
    "factor": "55",
    "product": "R??gsikt",
    "options": exchange.options_unit,
    "category": "Mj??l"
  },
  "vetekli": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Vetekli",
    "factor": "35",
    "product": "Vetekli",
    "options": exchange.options_unit,
    "category": "Mj??l"
  },
  "vetemjol": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Vetemj??l",
    "factor": "60",
    "product": "Vetemj??l",
    "options": exchange.options_unit,
    "category": "Mj??l"
  },
  "sojamjol": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Sojamj??l",
    "factor": "60",
    "product": "Sojamj??l",
    "options": exchange.options_unit,
    "category": "Mj??l"
  },
  "farinsocker": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Farinsocker",
    "factor": "75",
    "product": "Farinsocker",
    "options": exchange.options_unit,
    "category": "Socker"
  },
  "florsocker": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Florsocker",
    "factor": "60",
    "product": "Florsocker",
    "options": exchange.options_unit,
    "category": "Socker"
  },
  "honung": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Honung",
    "factor": "120",
    "product": "Honung",
    "options": exchange.options_unit,
    "category": "Socker"
  },
  "parlsocker": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "P??rlsocker",
    "factor": "60",
    "product": "P??rlsocker",
    "options": exchange.options_unit,
    "category": "Socker"
  },
  "sirap": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Sirap",
    "factor": "140",
    "product": "Sirap",
    "options": exchange.options_unit,
    "category": "Socker"
  },
  "strosocker": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Str??socker",
    "factor": "85",
    "product": "Str??socker",
    "options": exchange.options_unit,
    "category": "Socker"
  },
  "vaniljsocker": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Vaniljsocker",
    "factor": "90",
    "product": "Vaniljsocker",
    "options": exchange.options_unit,
    "category": "Socker"
  },
  "isterabsolutrentmatfettsmalt": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Ister (absolut rent matfett), sm??lt",
    "factor": "85",
    "product": "Ister (absolut rent matfett), sm??lt",
    "options": exchange.options_unit,
    "category": "Matfett"
  },
  "margarinochsmorfast": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Margarin och sm??r, fast",
    "factor": "95",
    "product": "Margarin och sm??r, fast",
    "options": exchange.options_unit,
    "category": "Matfett"
  },
  "margarinochsmorsmalt": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Margarin och sm??r, sm??lt",
    "factor": "90",
    "product": "Margarin och sm??r, sm??lt",
    "options": exchange.options_unit,
    "category": "Matfett"
  },
  "olja": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Olja",
    "factor": "90",
    "product": "Olja",
    "options": exchange.options_unit,
    "category": "Matfett"
  },
  "keso": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Keso",
    "factor": "100",
    "product": "Keso",
    "options": exchange.options_unit,
    "category": "Mj??lkprodukt"
  },
  "mjolkpulver": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Mj??lkpulver",
    "factor": "50",
    "product": "Mj??lkpulver",
    "options": exchange.options_unit,
    "category": "Mj??lkprodukt"
  },
  "ostriven": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Ost, riven",
    "factor": "40",
    "product": "Ost, riven",
    "options": exchange.options_unit,
    "category": "Mj??lkprodukt"
  },
  "havregryn": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Havregryn",
    "factor": "49",
    "product": "Havregryn",
    "options": exchange.options_unit,
    "category": "Bakprodukt"
  },
  "hasselnotskarnor": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Hasseln??tsk??rnor",
    "factor": "65",
    "product": "Hasseln??tsk??rnor",
    "options": exchange.options_unit,
    "category": "Bakprodukt"
  },
  "kakao": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Kakao",
    "factor": "40",
    "product": "Kakao",
    "options": exchange.options_unit,
    "category": "Bakprodukt"
  },
  "kokosriven": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Kokos, riven",
    "factor": "35",
    "product": "Kokos, riven",
    "options": exchange.options_unit,
    "category": "Bakprodukt"
  },
  "linfrohela": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Linfr??, hela",
    "factor": "65",
    "product": "Linfr??, hela",
    "options": exchange.options_unit,
    "category": "Bakprodukt"
  },
  "mandelspan": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Mandelsp??n",
    "factor": "30",
    "product": "Mandelsp??n",
    "options": exchange.options_unit,
    "category": "Bakprodukt"
  },
  "russinkarnfria": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Russin, k??rnfria",
    "factor": "60",
    "product": "Russin, k??rnfria",
    "options": exchange.options_unit,
    "category": "Bakprodukt"
  },
  "sotmandelbittermandel": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "S??tmandel, bittermandel",
    "factor": "65",
    "product": "S??tmandel, bittermandel",
    "options": exchange.options_unit,
    "category": "Bakprodukt"
  },
  "salt": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Salt",
    "factor": "125",
    "product": "Salt",
    "options": exchange.options_unit,
    "category": "Bakprodukt"
  },
  "sojaproteinpulver": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Sojaprotein, pulver",
    "factor": "35",
    "product": "Sojaprotein, pulver",
    "options": exchange.options_unit,
    "category": "Bakprodukt"
  },
  "strobrod": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Str??br??d",
    "factor": "50",
    "product": "Str??br??d",
    "options": exchange.options_unit,
    "category": "Bakprodukt"
  },
  "valnotskarnor": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Valn??tsk??rnor",
    "factor": "40",
    "product": "Valn??tsk??rnor",
    "options": exchange.options_unit,
    "category": "Bakprodukt"
  },
  "smaaggs": {
    "default_value": 1,
    "from_unit": "st",
    "to_unit": "gram",
    "title": "Sm?? ??gg (S)",
    "factor": "50",
    "product": "Sm?? ??gg (S)",
    "options": exchange.options_unit,
    "category": "??gg"
  },
  "medelstoraaggm": {
    "default_value": 1,
    "from_unit": "st",
    "to_unit": "gram",
    "title": "Medelstora ??gg (M)",
    "factor": "55",
    "product": "Medelstora ??gg (M)",
    "options": exchange.options_unit,
    "category": "??gg"
  },
  "storaaggl": {
    "default_value": 1,
    "from_unit": "st",
    "to_unit": "gram",
    "title": "Stora ??gg (L)",
    "factor": "65",
    "product": "Stora ??gg (L)",
    "options": exchange.options_unit,
    "category": "??gg"
  },
  "extrastoraaggxl": {
    "default_value": 1,
    "from_unit": "st",
    "to_unit": "gram",
    "title": "Extra stora ??gg (XL)",
    "factor": "75",
    "product": "Extra stora ??gg (XL)",
    "options": exchange.options_unit,
    "category": "??gg"
  }
}

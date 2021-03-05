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
    from_unit : "°F",
    to_unit : "°C",
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
    "title": "Blandmjöl (2-4 sädesslag)",
    "factor": "50",
    "product": "Blandmjöl (2-4 sädesslag)",
    "options": exchange.options_unit,
    "category": "Mjöl"
  },
  "bovetemjol": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Bovetemjöl",
    "factor": "60",
    "product": "Bovetemjöl",
    "options": exchange.options_unit,
    "category": "Mjöl"
  },
  "grahamsmjol": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Grahamsmjöl",
    "factor": "60",
    "product": "Grahamsmjöl",
    "options": exchange.options_unit,
    "category": "Mjöl"
  },
  "kornmjol": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Kornmjöl",
    "factor": "55",
    "product": "Kornmjöl",
    "options": exchange.options_unit,
    "category": "Mjöl"
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
    "category": "Mjöl"
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
    "category": "Mjöl"
  },
  "potatismjol": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Potatismjöl",
    "factor": "80",
    "product": "Potatismjöl",
    "options": exchange.options_unit,
    "category": "Mjöl"
  },
  "ragkrossochvetekross": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Rågkross och vetekross",
    "factor": "70",
    "product": "Rågkross och vetekross",
    "options": exchange.options_unit,
    "category": "Mjöl"
  },
  "ragmjolfintochgrovt": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Rågmjöl, fint och grovt",
    "factor": "50",
    "product": "Rågmjöl, fint och grovt",
    "options": exchange.options_unit,
    "category": "Mjöl"
  },
  "ragsikt": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Rågsikt",
    "factor": "55",
    "product": "Rågsikt",
    "options": exchange.options_unit,
    "category": "Mjöl"
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
    "category": "Mjöl"
  },
  "vetemjol": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Vetemjöl",
    "factor": "60",
    "product": "Vetemjöl",
    "options": exchange.options_unit,
    "category": "Mjöl"
  },
  "sojamjol": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Sojamjöl",
    "factor": "60",
    "product": "Sojamjöl",
    "options": exchange.options_unit,
    "category": "Mjöl"
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
    "title": "Pärlsocker",
    "factor": "60",
    "product": "Pärlsocker",
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
    "title": "Strösocker",
    "factor": "85",
    "product": "Strösocker",
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
    "title": "Ister (absolut rent matfett), smält",
    "factor": "85",
    "product": "Ister (absolut rent matfett), smält",
    "options": exchange.options_unit,
    "category": "Matfett"
  },
  "margarinochsmorfast": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Margarin och smör, fast",
    "factor": "95",
    "product": "Margarin och smör, fast",
    "options": exchange.options_unit,
    "category": "Matfett"
  },
  "margarinochsmorsmalt": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Margarin och smör, smält",
    "factor": "90",
    "product": "Margarin och smör, smält",
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
    "category": "Mjölkprodukt"
  },
  "mjolkpulver": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Mjölkpulver",
    "factor": "50",
    "product": "Mjölkpulver",
    "options": exchange.options_unit,
    "category": "Mjölkprodukt"
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
    "category": "Mjölkprodukt"
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
    "title": "Hasselnötskärnor",
    "factor": "65",
    "product": "Hasselnötskärnor",
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
    "title": "Linfrö, hela",
    "factor": "65",
    "product": "Linfrö, hela",
    "options": exchange.options_unit,
    "category": "Bakprodukt"
  },
  "mandelspan": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Mandelspån",
    "factor": "30",
    "product": "Mandelspån",
    "options": exchange.options_unit,
    "category": "Bakprodukt"
  },
  "russinkarnfria": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Russin, kärnfria",
    "factor": "60",
    "product": "Russin, kärnfria",
    "options": exchange.options_unit,
    "category": "Bakprodukt"
  },
  "sotmandelbittermandel": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Sötmandel, bittermandel",
    "factor": "65",
    "product": "Sötmandel, bittermandel",
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
    "title": "Ströbröd",
    "factor": "50",
    "product": "Ströbröd",
    "options": exchange.options_unit,
    "category": "Bakprodukt"
  },
  "valnotskarnor": {
    "default_value": 1,
    "from_unit": "dl",
    "alternative_units" :  exchange.option_alternative_volume_units,
    "to_unit": "gram",
    "title": "Valnötskärnor",
    "factor": "40",
    "product": "Valnötskärnor",
    "options": exchange.options_unit,
    "category": "Bakprodukt"
  },
  "smaaggs": {
    "default_value": 1,
    "from_unit": "st",
    "to_unit": "gram",
    "title": "Små ägg (S)",
    "factor": "50",
    "product": "Små ägg (S)",
    "options": exchange.options_unit,
    "category": "Ägg"
  },
  "medelstoraaggm": {
    "default_value": 1,
    "from_unit": "st",
    "to_unit": "gram",
    "title": "Medelstora ägg (M)",
    "factor": "55",
    "product": "Medelstora ägg (M)",
    "options": exchange.options_unit,
    "category": "Ägg"
  },
  "storaaggl": {
    "default_value": 1,
    "from_unit": "st",
    "to_unit": "gram",
    "title": "Stora ägg (L)",
    "factor": "65",
    "product": "Stora ägg (L)",
    "options": exchange.options_unit,
    "category": "Ägg"
  },
  "extrastoraaggxl": {
    "default_value": 1,
    "from_unit": "st",
    "to_unit": "gram",
    "title": "Extra stora ägg (XL)",
    "factor": "75",
    "product": "Extra stora ägg (XL)",
    "options": exchange.options_unit,
    "category": "Ägg"
  }
}

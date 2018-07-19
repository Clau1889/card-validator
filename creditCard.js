
var dataClients = [
    {
        'name': 'Erika Estrada Pacheco',
        'numberCard': '4571612553847958',
        'month': '10',
        'year': '17',
        'cvv': '270',
    },
    {
        'name': 'Israel Álvarez',
        'numberCard': '4065471966803600',
        'month': '07',
        'year': '16',
        'cvv': '336',
    },
    {
        'name': 'Claudia Montserrat Torres',
        'numberCard': '4043800134371172',
        'month': '05',
        'year': '18',
        'cvv': '568',
    },
    {
        'name': 'Carolina Valle Ruvalcaba',
        'numberCard': '4686008102429244',
        'month': '10',
        'year': '17',
        'cvv': '895',
    },
    {
        'name': 'Carmen Valencia Menchaca',
        'numberCard': '4530929310352951',
        'month': '07',
        'year': '17',
        'cvv': '242',
    },

];

const valName = 'Claudia Montserrat Torres';
const numTDC = '4043800134371172';
const monthData = '05';
const yearData = '18';
const cvv = '568';

/****************FUNCION PARA VALIDACIONES: NOMBRE***************/
const validateName = (name) => {
    const regEx = /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/g;
    if (regEx.exec(name) == null) {
        console.log('NOMBRE INVALIDO');
    } else {
        console.log('NOMBRE VALIDO');
        return userName(name);;
    }
}

/*************FUNCION PARA NAME************************/
const userName = (fullName) => {
    let j = 0;

    for (j; j < dataClients.length; j += 1) {
        if (dataClients[j].name !== fullName) {
            continue;
        }
        console.log('El nombre fue encontrado en la posicion ' + [j]);
        return userNumTDC(numTDC);
    }
}

/*************FUNCION PARA NUMERO************************/
const userNumTDC = (fullNumTDC) => {
    validateNumTDC(fullNumTDC);

    let i = 0;

    for (i; i < dataClients.length; i += 1) {
        if (dataClients[i].numberCard !== fullNumTDC) {
            continue;
        } else {
            console.log('En esta posicion la Tarjeta fue encontrada' + [i]);
            return userDate(monthData, yearData);
        }
    }

};


/**********FUNCION DE VALIDACIONES ACEPTABLES PARA NUM DE TDC**********/
/*                                  NOTA:
                        TARJETAS DE CREDITO QUE ACEPTA:
                                4 == VISA
                                5 == MASTERCARD
*/
const validateNumTDC = nums => {
    /*Expresion regular que especifica que es lo que acepta */
    const regEx = /^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/;//EXPRESION REGULAR PARA TDC DE MASTERCARD-VISA-DISCORD
    if (regEx.exec(nums) == null) {
    } else {
        /*Convertir el string en Array y en numero entero */
        let arrayNums = [];

        for (let i = 0; i < nums.length; i++) {
            arrayNums.push(parseInt(nums[i]));
        }
        return validateNumTDCluhn(arrayNums);

    }
};


/*COMIENZA FUNCION ALGORITMO LUHN: para corroborar validacion de TDC */
const validateNumTDCluhn = (numeros) => {
    let sumTotalDigits = 0;
    let reverseNums = numeros.reverse();

    let k = 0;

    for (k; k < reverseNums.length; k++) {
        let pairNums;
        /*BUSCAR LA POSICION PAR */
        if ((k + 1) % 2 == 0) {
            pairNums = (reverseNums[k] * 2);
            if (pairNums >= 10) {
                let getOneDigits = ((pairNums - 10) + 1);
                reverseNums[k] = getOneDigits;
            } else {
                reverseNums[k] = pairNums;
            }
        }
        /*SUMA DEL ARRAY */
        sumTotalDigits += reverseNums[k];
    }

    if (sumTotalDigits % 10 == 0) {
        console.log('TARJETA VALIDA');

        return true;
    } else {
        console.log('TARJETA INVALIDA');
    }
}


/*****FUNCION PARA VALIDACIONES DEL MES DE EXPIRACIÓN DE LA TARJETA******/
const expDateMonth = (n1) => {
    const datExpRegEx = /^(0[0-9]|1[0-2])$/;

    if (datExpRegEx.exec(n1) == null) {
        console.log('mes de expiración erronea');
        return false;
    } else {
        console.log('mes de expiración válida');
        return true;
    }
}

/*****FUNCION PARA VALIDACIONES DEL AÑO DE EXPIRACIÓN DE LA TARJETA******/
const expDateYear = (n2) => {
    const datExpRegEx = /^(20)?([0-9]{2})$/;

    if (datExpRegEx.exec(n2) == null) {
        console.log('year de expiración erronea');
        return false;
    } else {
        console.log('year de expiración válida');
        return true;
    }
}


/*************FUNCION PARA EXPDATE************************/
const userDate = (n1, n2) => {
    expDateMonth(n1);
    expDateYear(n2);

    let j = 0;

    for (j; j < dataClients.length; j += 1) {
        if (dataClients[j].month !== n1 || dataClients[j].year !== n2) {
            // console.log('La fecha no fue encontrada');
            continue;
        } else {
            console.log('La fecha de expiración fue encontrada en la posicion ' + [j]);
            return cvvVal(cvv);
        }
    }
}

/****************FUNCION PARA VALIDACIONES: CVV***************/
const cvvVal = (n) => {
    const cvvRegEx = /^[0-9]{3}$/;///^d{2}$/;//(/\D/g, ""/);
    if (cvvRegEx.exec(n) == null) {
        console.log('número de seguridad inválido');
    } else {
        console.log('número de seguridad válido');
        return userCvv(n);
    }
}

// /*************FUNCION PARA CVV************************/
const userCvv = (cvvDigits) => {
    let j = 0;

    for (j; j < dataClients.length; j += 1) {
        if (dataClients[j].cvv !== cvvDigits) {
            continue;
        }
        console.log('El cvv fue encontrado en la posicion ' + [j]);
        return true;
    }
}


validateName(valName);
console.log(validateName(valName));
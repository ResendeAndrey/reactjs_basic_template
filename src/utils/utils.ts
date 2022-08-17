import currency from 'currency.js';
import Swal from 'sweetalert2';

export const clearCharactersNumber = (item: string) => {
  if (typeof item === 'number') return item;

  let str = item
  str = str.replace(/\D/g, '')

  return Number(str)
}
export const clearCharactersString = (item: string) => {

  let str = item
  str = str.replace(/\D/g, '')

  return str
}

export const BRLFormatter = (value: number | string, symbol = true) => currency(value, {
  symbol: symbol ? 'R$' : '',
  decimal: ',',
  separator: '.',
  precision: 2
}).format()

export const formatTelephone = (tel: string) => {

  if (typeof tel === 'number') String(tel)
  let str = tel
  str = str.replace(/\D/g, '')
  str = str.replace(/^(\d\d)(\d)/g, '($1) $2')
  str = str.replace(/(\d{5})(\d)/, '$1-$2')
  return str
}

export const formatCPF = (cnpj: string) => {
  if (typeof cnpj === 'number') String(cnpj)

  let str = cnpj
  str = str.replace(/\D/g, '')
  str = str.replace( /(\d{3})(\d)/ , '$1.$2');
  str = str.replace( /(\d{3})(\d)/ , '$1.$2');
  str = str.replace( /(\d{3})(\d{1,2})$/ , '$1-$2');

  return str
}
export const formatDate = (date: string) => {
  if (typeof date === 'number') String(date)

  let str = date
  str = str.replace(/\D/g, '')
  str = str.replace( /(\d{2})(\d)/ , '$1/$2');
  str = str.replace( /(\d{2})(\d)/ , '$1/$2');
  str = str.replace( /(\d{4})(\d)/ , '$1/$2');

  return str
}

export const formatCep = (cep: string) => {

  if (typeof cep === 'number') String(cep)
  let str = cep
  str = str.replace(/\D/g, '')
  str = str.replace(/^(\d{5})(\d)/, '$1-$2')
  return str
}

export const MoneyFormatInput = (value: any) => {
  if(!value) return;
  if(typeof value === 'number') {
    value =  value.toString()
  }

  function reverse(bla: any) {
      return bla.split('').reverse().join('');
  }

  const valor = reverse(value.replace(/[^\d]+/gi, ''));
  let resultado = '';
  const mascara = reverse('##.###.###,##');
  for (let x = 0, y = 0; x < mascara.length && y < valor.length; ) {
      if (mascara.charAt(x) !== '#') {
          resultado += mascara.charAt(x);
          x++;
      } else {
          resultado += valor.charAt(y);
          y++;
          x++;
      }
  }
  return reverse(resultado);
};

export const MoneyFormatLabel = (value: string, withPrefix?: boolean) => {
  const valor = parseFloat(value);
  let valorFinal = '';
  if (!withPrefix) {
      valorFinal = valor.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
      });
  } else
      valorFinal = valor.toLocaleString('pt-br', {
          minimumFractionDigits: 2,
      });

  return valorFinal;
};

export const formatParseFloat = (value: string | number) => {
  if (!value) return 0;
  if (typeof value === 'number') return value;
  let textFormatted = value.replace('.', '');
  let index = value.indexOf('.');
  if (index > -1) {
      textFormatted = textFormatted.replace('.', '');
      index = textFormatted.indexOf('.');
      formatParseFloat(textFormatted);
  }
  const textFinal = parseFloat(textFormatted.replace(',', '.')).toFixed(2);
  return parseFloat(textFinal);
};

export const checkCPFValid =(cpf: string) => {
  let sum;
  let rest;
  let strCPF = cpf;

  sum = 0


  if(strCPF === '00000000000' || strCPF === '' || undefined) return false

  strCPF = strCPF.replace(/\D/g, '')

  for (let i=1; i<=9; i++) sum = sum + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11))  rest = 0;
    if (rest != parseInt(strCPF.substring(9, 10)) ) return false;

  sum = 0;
    for (let i = 1; i <= 10; i++) sum = sum + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11))  rest = 0;
    if (rest != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}

export const SwalHandler = (icon: 'success' | 'error' | 'warning', title: string, text: string) => {
  return Swal.fire({
    title: title,
    icon: icon,
    text: text,
  })
}



export const weekDays = [
  {
    'value' : 1,
    'label': 'Domingo'
  },
  {
    'value' : 2,
    'label': 'Segunda'
  },
  {
    'value' : 3,
    'label': 'Terça'
  },
  {
    'value' : 4,
    'label': 'Quarta'
  },
  {
    'value' : 5,
    'label': 'Quinta'
  },
  {
    'value' : 6,
    'label': 'Sexta'
  },
  {
    'value' : 7,
    'label': 'Sábado'
  }
]

export const BrazilState = [
  {
    'uuid': 1,
    'state': 'AC',
    'name': 'Acre'
  },
  {
    'uuid': 2,
    'state': 'AL',
    'name': 'Alagoas'
  },
  {
    'uuid': 3,
    'state': 'AM',
    'name': 'Amazonas'
  },
  {
    'uuid': 4,
    'state': 'AP',
    'name': 'Amapá'
  },
  {
    'uuid': 5,
    'state': 'BA',
    'name': 'Bahia'
  },
  {
    'uuid': 6,
    'state': 'CE',
    'name': 'Ceará'
  },
  {
    'uuid': 7,
    'state': 'DF',
    'name': 'Distrito Federal'
  },
  {
    'uuid': 8,
    'state': 'ES',
    'name': 'Espírito Santo'
  },
  {
    'uuid': 9,
    'state': 'GO',
    'name': 'Goiás'
  },
  {
    'uuid': 10,
    'state': 'MA',
    'name': 'Maranhão'
  },
  {
    'uuid': 11,
    'state': 'MG',
    'name': 'Minas Gerais'
  },
  {
    'uuid': 12,
    'state': 'MS',
    'name': 'Mato Grosso do Sul'
  },
  {
    'uuid': 13,
    'state': 'MT',
    'name': 'Mato Grosso'
  },
  {
    'uuid': 14,
    'state': 'PA',
    'name': 'Pará'
  },
  {
    'uuid': 15,
    'state': 'PB',
    'name': 'Paraíba'
  },
  {
    'uuid': 16,
    'state': 'PE',
    'name': 'Pernambuco'
  },
  {
    'uuid': 17,
    'state': 'PI',
    'name': 'Piauí'
  },
  {
    'uuid': 18,
    'state': 'PR',
    'name': 'Paraná'
  },
  {
    'uuid': 19,
    'state': 'RJ',
    'name': 'Rio de Janeiro'
  },
  {
    'uuid': 20,
    'state': 'RN',
    'name': 'Rio Grande do Norte'
  },
  {
    'uuid': 21,
    'state': 'RO',
    'name': 'Rondônia'
  },
  {
    'uuid': 22,
    'state': 'RR',
    'name': 'Roraima'
  },
  {
    'uuid': 23,
    'state': 'RS',
    'name': 'Rio Grande do Sul'
  },
  {
    'uuid': 24,
    'state': 'SC',
    'name': 'Santa Catarina'
  },
  {
    'uuid': 25,
    'state': 'SE',
    'name': 'Sergipe'
  },
  {
    'uuid': 26,
    'state': 'SP',
    'name': 'São Paulo'
  },
  {
    'uuid': 27,
    'state': 'TO',
    'name': 'Tocantins'
  }
]
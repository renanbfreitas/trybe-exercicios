import CepService from './CepService';
import MockCepApi from './MockCepApi';

async function main() {
  const cepSvc = new CepService(new MockCepApi());

  console.log(
    'get address by cep',
    '->',
    await cepSvc.addressByCep('21.061-080', 50),
  );
  console.log(
    'get cep by address',
    '->',
    await cepSvc.cepByAddress('street foo, between bar and baz', 10),
  );
}

main();
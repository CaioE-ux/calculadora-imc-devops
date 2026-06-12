const calcularIMC = require('./imc');

describe('Função calcularIMC', () => {
    test.each([
        [80, 2, '20.00'],
        [70, 1.75, '22.86'],
        [90, 1.80, '27.78'],
        [60, 1.60, '23.44']
    ])(
        'deve retornar %s/%s² = %s',
        (peso, altura, resultadoEsperado) => {
            expect(calcularIMC(peso, altura)).toBe(resultadoEsperado);
        }
    );
});
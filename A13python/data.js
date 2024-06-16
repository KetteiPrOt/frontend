/* How to create a new Chapter
    copy /capX
    rename 'capX' => 'capN' (N = X + 1)
    rewrite chapter number in line 1 of file: /capN/chapter.js
    all ready :)
*/

const theme = {
    title: 'Python',
    description: 'Python es un lenguaje de programación ampliamente utilizado en las aplicaciones web, el desarrollo de software, la ciencia de datos y el machine learning (ML). '
};

const chapters = [
    // ch1
    {
        name: 'Fundamentos de Python',
        parts: [
            // p1
            {
                name: 'Introducción',
                themes: [
                    'Que es Python?',
                    'Que beneficios ofrece Python?',
                    'Para que se usa Python?',
                    'Características de Python',
                    'Bibliotecas más populares',
                    'Frameworks',
                    'IDE de Python'
                ]
            },
            // p2
            {
                name: 'Principios básicos',
                themes: [
                    'Comentarios',
                    'Variables',
                    'Constantes',
                    'Tipos de datos básicos',
                    'Secuencias',
                    'Listas',
                    'Tuplas',
                    'Rangos',
                    'Diccionarios',
                ]
            },
            // p3
            {
                name: 'Operadores básicos',
                themes: [
                    'Concatenación',
                    'Operadores Aritmeticos',
                    'Operadores de asignación',
                    'Operadores de comparación',
                    'Operadores Lógicos'
                ]
            },
            // p4
            {
                name: 'Control de flujo',
                themes: [
                    'Identación',
                    'Condicional',
                    'Bucle for',
                    'Bucle while',
                    'try except'
                ]
            },
            // p5
            {
                name: 'Funciones',
                themes: [
                    'Definir una función',
                    'Recursividad'
                ]
            }
        ]
    },
    // ch2
    {
        name: 'POO en Python',
        parts: [
            // p1
            {
                name: 'Principios de la POO',
                themes: [
                    'Paradigma',
                    'Crear instancias',
                    'Diccionarios como objetos',
                    'Crear clases'
                ]
            },
        ]
    },
];
// SMro
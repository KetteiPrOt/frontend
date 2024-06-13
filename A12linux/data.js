/* How to create a new Chapter
    copy /capX
    rename 'capX' => 'capN' (N = X + 1)
    rewrite chapter number in line 1 of file: /capN/chapter.js
    all ready :)
*/

const theme = {
    title: 'Linux',
    description: 'Linux es el sistema operativo (SO) open source más utilizado.'
};

const chapters = [
    // ch1
    {
        name: 'Interfaz de Línea de Comandos [CLI]',
        parts: [
            // p1
            {
                name: 'Comandos Escenciales',
                themes: [
                    'man',
                    'clear',
                    'sudo'
                ]
            },
            // p2
            {
                name: 'Comandos básicos de directorios',
                themes: [
                    'pwd',
                    'cd',
                    'ls',
                    'mkdir',
                    'rmdir'
                ]
            },
            // p3
            {
                name: 'Comandos básicos para archivos',
                themes: [
                    'find'
                ]
            }
        ]
    }
    // chN
];